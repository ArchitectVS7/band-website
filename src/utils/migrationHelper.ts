import { format } from 'date-fns';

export interface MigratedContent {
  id: string;
  type: 'text' | 'image' | 'gallery';
  content: any;
  lastModified: Date;
}

export const migrateCrimsonThroneContent = (): void => {
  const legacyContent = {
    // Hero section content
    'hero-band-name': 'CRIMSON THRONE',
    'hero-tagline': 'Emerging from the Depths of Underground Metal',
    'hero-description': 'Forged in the shadows of the underground metal scene, Crimson Throne channels raw, uncompromising artistic expression through atmospheric black metal and ritualistic soundscapes.',
    
    // About section content
    'about-bio': `Forged in the shadows of the underground metal scene, Crimson Throne emerged as a vessel for raw, uncompromising artistic expression. Our sound draws from the depths of atmospheric black metal, ritualistic percussion, and the primal energy of the underground.

We reject commercial compromise in favor of authentic artistic vision. Our music serves as a conduit for the raw emotions and dark atmospheres that define true underground metal. Each composition is crafted with intention, drawing from the rich tapestry of underground metal traditions while forging our own path through the darkness.

The band operates entirely within the underground network, prioritizing artistic integrity over mainstream recognition. Our releases are limited, our shows intimate, and our connection to the underground community unwavering.`,
    
    // Band member information
    'member-1-name': 'SHADOW',
    'member-1-role': 'Vocals, Lyrics',
    'member-1-bio': 'Channeling the darkest depths of human emotion through guttural vocals and poetic lyrics that explore themes of existentialism, nature, and the occult.',
    
    'member-2-name': 'VOID', 
    'member-2-role': 'Guitar, Composition',
    'member-2-bio': 'Crafting atmospheric soundscapes and crushing riffs that bridge the gap between traditional black metal and experimental underground sounds.',
    
    'member-3-name': 'ABYSS',
    'member-3-role': 'Bass, Underground Networks',
    'member-3-bio': 'Providing the foundation of our sound while maintaining connections throughout the underground metal community and DIY network.',
    
    'member-4-name': 'STORM',
    'member-4-role': 'Drums, Ritual Percussion',
    'member-4-bio': 'Creating ritualistic rhythms and thunderous percussion that drive our atmospheric compositions forward with primal energy.',
    
    // Music section content
    'latest-album-title': 'THRONE OF SHADOWS',
    'latest-album-type': 'Full-Length Album • 2024',
    'latest-album-description': 'Our debut full-length album exploring themes of darkness, ritual, and the raw power of underground metal. Limited to 500 hand-numbered copies on black vinyl.',
    
    'previous-release-title': 'RITUAL DEMOS',
    'previous-release-type': 'Demo Collection • 2023',
    'previous-release-description': 'Raw, unpolished recordings capturing the essence of our early ritualistic sound. Available exclusively through underground channels.',
    
    // Tour section content
    'tour-description': 'We perform exclusively at underground venues, DIY spaces, and intimate gatherings within the underground metal community. No mainstream venues, no commercial compromises.',
    
    // Contact section content
    'contact-description': 'For booking inquiries, underground collaboration opportunities, or to join our underground network, reach out through the channels below. We prioritize genuine underground connections over commercial partnerships.',
    
    // Community Archive default content
    'archive-description': 'The Underground Archive preserves rare content from our community - demos, photos, flyers, and recordings shared by our underground network. All submissions are verified for authenticity.',
  };

  // Convert to the new content format
  const contentEntries = Object.entries(legacyContent).map(([id, content]) => [
    id,
    {
      id,
      type: 'text' as const,
      content,
      lastModified: new Date(),
    }
  ]);

  const contentObject = Object.fromEntries(contentEntries);
  
  // Save to localStorage for admin system
  localStorage.setItem('underground-content', JSON.stringify(contentObject));
  
  // Set default theme
  localStorage.setItem('underground-theme', 'atmospheric');
  
  // Set default admin state (not logged in)
  localStorage.setItem('underground-admin', JSON.stringify({
    isAdmin: false,
    isEditMode: false,
  }));
  
  console.log('✅ Migration completed successfully');
  console.log(`📦 Migrated ${Object.keys(legacyContent).length} content items`);
  console.log('🎨 Default theme set to: atmospheric');
  console.log('🔐 Admin system initialized');
};

export const verifyMigration = (): boolean => {
  try {
    const content = localStorage.getItem('underground-content');
    const theme = localStorage.getItem('underground-theme');
    const admin = localStorage.getItem('underground-admin');
    
    if (!content || !theme || !admin) {
      console.error('❌ Migration verification failed: Missing required data');
      return false;
    }
    
    const contentObj = JSON.parse(content);
    const adminObj = JSON.parse(admin);
    
    if (Object.keys(contentObj).length < 10) {
      console.error('❌ Migration verification failed: Insufficient content items');
      return false;
    }
    
    if (theme !== 'atmospheric') {
      console.error('❌ Migration verification failed: Incorrect default theme');
      return false;
    }
    
    if (adminObj.isAdmin !== false || adminObj.isEditMode !== false) {
      console.error('❌ Migration verification failed: Incorrect admin state');
      return false;
    }
    
    console.log('✅ Migration verification passed');
    return true;
  } catch (error) {
    console.error('❌ Migration verification failed:', error);
    return false;
  }
};

export const resetMigration = (): void => {
  localStorage.removeItem('underground-content');
  localStorage.removeItem('underground-theme');
  localStorage.removeItem('underground-admin');
  console.log('🔄 Migration data reset');
};

export const getMigrationStatus = (): {
  contentCount: number;
  theme: string;
  adminState: { isAdmin: boolean; isEditMode: boolean };
  lastModified: string;
} => {
  try {
    const content = localStorage.getItem('underground-content');
    const theme = localStorage.getItem('underground-theme');
    const admin = localStorage.getItem('underground-admin');
    
    if (!content || !theme || !admin) {
      throw new Error('Migration data not found');
    }
    
    const contentObj = JSON.parse(content);
    const adminObj = JSON.parse(admin);
    
    return {
      contentCount: Object.keys(contentObj).length,
      theme,
      adminState: adminObj,
      lastModified: format(new Date(), 'yyyy-MM-dd HH:mm:ss'),
    };
  } catch (error) {
    throw new Error('Failed to get migration status');
  }
};