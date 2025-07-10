import React from 'react';
import { EditableText } from './EditableText';
import { useTheme } from '../contexts/ThemeContext';

export const AboutSection: React.FC = () => {
  const { currentTheme } = useTheme();
  
  return (
    <section id="about" className="py-20 bg-bg-secondary">
      <div className="container mx-auto px-4">
        <EditableText
          id="about-title"
          defaultContent="FROM THE UNDERGROUND"
          className={`text-4xl md:text-5xl font-bold text-center mb-12 ${
            currentTheme.variant === 'atmospheric' ? 'font-atmospheric-header' :
            currentTheme.variant === 'raw' ? 'font-raw-header' :
            'font-modern-header'
          } text-text-primary`}
          tag="h2"
        />
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <EditableText
              id="about-bio"
              defaultContent="Forged in the shadows of the underground metal scene, Crimson Throne emerged as a vessel for raw, uncompromising artistic expression. Our sound channels the primal darkness that courses through the veins of authentic black metal, refusing to bow to commercial pressures or mainstream acceptance.

Since our formation, we have remained committed to the underground ethos that defines true metal - where passion supersedes profit, and artistic integrity stands above all else. Each release is a ritual, each performance a communion with those who understand that some music is meant to be felt in the bones rather than heard on the radio."
              className={`text-lg leading-relaxed ${
                currentTheme.variant === 'atmospheric' ? 'font-atmospheric-body' :
                currentTheme.variant === 'raw' ? 'font-raw-body' :
                'font-modern-body'
              } text-text-primary`}
              multiline
              tag="p"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {/* Band member cards - convert to editable */}
            <div className="bg-bg-primary p-6 border border-accent-primary">
              <div className="w-full h-48 bg-bg-secondary mb-4 border border-accent-primary flex items-center justify-center">
                <span className="text-accent-primary">VOCALIST</span>
              </div>
              <EditableText
                id="member-1-name"
                defaultContent="SHADOW"
                className="font-bold text-text-primary mb-2"
                tag="h3"
              />
              <EditableText
                id="member-1-role"
                defaultContent="Vocals, Lyrics"
                className="text-accent-primary text-sm"
                tag="p"
              />
            </div>
            
            <div className="bg-bg-primary p-6 border border-accent-primary">
              <div className="w-full h-48 bg-bg-secondary mb-4 border border-accent-primary flex items-center justify-center">
                <span className="text-accent-primary">GUITARIST</span>
              </div>
              <EditableText
                id="member-2-name"
                defaultContent="VOID"
                className="font-bold text-text-primary mb-2"
                tag="h3"
              />
              <EditableText
                id="member-2-role"
                defaultContent="Guitar, Composition"
                className="text-accent-primary text-sm"
                tag="p"
              />
            </div>
            
            <div className="bg-bg-primary p-6 border border-accent-primary">
              <div className="w-full h-48 bg-bg-secondary mb-4 border border-accent-primary flex items-center justify-center">
                <span className="text-accent-primary">BASSIST</span>
              </div>
              <EditableText
                id="member-3-name"
                defaultContent="ABYSS"
                className="font-bold text-text-primary mb-2"
                tag="h3"
              />
              <EditableText
                id="member-3-role"
                defaultContent="Bass, Underground Networks"
                className="text-accent-primary text-sm"
                tag="p"
              />
            </div>
            
            <div className="bg-bg-primary p-6 border border-accent-primary">
              <div className="w-full h-48 bg-bg-secondary mb-4 border border-accent-primary flex items-center justify-center">
                <span className="text-accent-primary">DRUMMER</span>
              </div>
              <EditableText
                id="member-4-name"
                defaultContent="STORM"
                className="font-bold text-text-primary mb-2"
                tag="h3"
              />
              <EditableText
                id="member-4-role"
                defaultContent="Drums, Ritual Percussion"
                className="text-accent-primary text-sm"
                tag="p"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};