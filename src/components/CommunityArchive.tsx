import React, { useState } from 'react';
import { Upload, Image, Music, Calendar, MapPin } from 'lucide-react';
import { EditableText } from './EditableText';

interface ArchiveItem {
  id: string;
  type: 'photo' | 'demo' | 'flyer' | 'recording';
  title: string;
  date: string;
  location?: string;
  contributor: string;
  verified: boolean;
  description: string;
}

// Mock archive items - replace with API/localStorage integration later
const initialArchiveItems: ArchiveItem[] = [
  {
    id: '1',
    type: 'photo',
    title: 'First Show at Underground Venue',
    date: '2019-03-15',
    location: 'The Crypt, Denver',
    contributor: 'DeathMetal_Dave',
    verified: true,
    description: 'Legendary first performance in the underground scene'
  },
  {
    id: '2',
    type: 'demo',
    title: 'Original 4-Track Demo',
    date: '2018-10-31',
    contributor: 'VoidWalker88',
    verified: true,
    description: 'Rare cassette recording from the early days'
  }
];

export const CommunityArchive: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [showUploadForm, setShowUploadForm] = useState(false);
  const [archiveItems, setArchiveItems] = useState<ArchiveItem[]>(initialArchiveItems);
  const [form, setForm] = useState({
    type: 'photo',
    title: '',
    date: '',
    location: '',
    contributor: '',
    description: ''
  });

  const filteredItems = activeFilter === 'all'
    ? archiveItems
    : archiveItems.filter(item => item.type === activeFilter);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setArchiveItems([
      ...archiveItems,
      {
        id: (archiveItems.length + 1).toString(),
        type: form.type as ArchiveItem['type'],
        title: form.title,
        date: form.date,
        location: form.location,
        contributor: form.contributor || 'Anonymous',
        verified: false,
        description: form.description
      }
    ]);
    setShowUploadForm(false);
    setForm({ type: 'photo', title: '', date: '', location: '', contributor: '', description: '' });
  };

  return (
    <section className="py-20 bg-bg-primary">
      <div className="container mx-auto px-4">
        <EditableText
          id="archive-title"
          defaultContent="COMMUNITY ARCHIVE"
          className="text-4xl font-bold text-center mb-4 text-text-primary"
          tag="h2"
        />
        
        <EditableText
          id="archive-subtitle"
          defaultContent="Preserving the Underground Legacy"
          className="text-xl text-center mb-12 text-accent-primary"
          tag="p"
        />

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {['all', 'photo', 'demo', 'flyer', 'recording'].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 border border-accent-primary transition-all ${
                activeFilter === filter
                  ? 'bg-accent-primary text-white'
                  : 'text-accent-primary hover:bg-accent-primary hover:text-white'
              }`}
            >
              {filter.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Upload button */}
        <div className="text-center mb-12">
          <button
            onClick={() => setShowUploadForm(true)}
            className="bg-bg-secondary border border-accent-primary text-accent-primary px-6 py-3 hover:bg-accent-primary hover:text-white transition-all flex items-center gap-2 mx-auto"
          >
            <Upload className="w-4 h-4" />
            CONTRIBUTE TO ARCHIVE
          </button>
        </div>

        {/* Archive grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div key={item.id} className="bg-bg-secondary border border-accent-primary p-6">
              <div className="flex items-center gap-2 mb-3">
                {item.type === 'photo' && <Image className="w-5 h-5 text-accent-primary" />}
                {item.type === 'demo' && <Music className="w-5 h-5 text-accent-primary" />}
                {item.type === 'flyer' && <Calendar className="w-5 h-5 text-accent-primary" />}
                {item.type === 'recording' && <Music className="w-5 h-5 text-accent-primary" />}
                <span className="text-accent-primary text-sm font-bold">
                  {item.type.toUpperCase()}
                </span>
                {item.verified && (
                  <span className="text-green-400 text-xs">✓ VERIFIED</span>
                )}
              </div>
              
              <h3 className="text-text-primary font-bold mb-2">{item.title}</h3>
              <p className="text-text-primary text-sm mb-3">{item.description}</p>
              
              <div className="text-xs text-accent-primary space-y-1">
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {item.date}
                </div>
                {item.location && (
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {item.location}
                  </div>
                )}
                <div>Contributed by: {item.contributor}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Upload form modal */}
        {showUploadForm && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
            <div className="bg-bg-secondary border border-accent-primary p-6 rounded-lg max-w-md w-full mx-4">
              <h3 className="text-text-primary font-bold mb-4">Contribute to Archive</h3>
              <form className="space-y-4" onSubmit={handleFormSubmit}>
                <div>
                  <label className="text-text-primary text-sm block mb-1">Type</label>
                  <select name="type" value={form.type} onChange={handleFormChange} className="w-full bg-bg-primary text-text-primary p-2 border border-accent-primary">
                    <option value="photo">Photo</option>
                    <option value="demo">Demo Recording</option>
                    <option value="flyer">Show Flyer</option>
                    <option value="recording">Live Recording</option>
                  </select>
                </div>
                <div>
                  <label className="text-text-primary text-sm block mb-1">Title</label>
                  <input 
                    type="text" 
                    name="title"
                    value={form.title}
                    onChange={handleFormChange}
                    className="w-full bg-bg-primary text-text-primary p-2 border border-accent-primary"
                    placeholder="Describe your contribution"
                    required
                  />
                </div>
                <div>
                  <label className="text-text-primary text-sm block mb-1">Date</label>
                  <input 
                    type="date" 
                    name="date"
                    value={form.date}
                    onChange={handleFormChange}
                    className="w-full bg-bg-primary text-text-primary p-2 border border-accent-primary"
                    required
                  />
                </div>
                <div>
                  <label className="text-text-primary text-sm block mb-1">Location (optional)</label>
                  <input 
                    type="text" 
                    name="location"
                    value={form.location}
                    onChange={handleFormChange}
                    className="w-full bg-bg-primary text-text-primary p-2 border border-accent-primary"
                    placeholder="Venue, city"
                  />
                </div>
                <div>
                  <label className="text-text-primary text-sm block mb-1">Contributor Name (optional)</label>
                  <input 
                    type="text" 
                    name="contributor"
                    value={form.contributor}
                    onChange={handleFormChange}
                    className="w-full bg-bg-primary text-text-primary p-2 border border-accent-primary"
                    placeholder="Your name or handle"
                  />
                </div>
                <div>
                  <label className="text-text-primary text-sm block mb-1">Description</label>
                  <textarea 
                    name="description"
                    value={form.description}
                    onChange={handleFormChange}
                    className="w-full bg-bg-primary text-text-primary p-2 border border-accent-primary h-20"
                    placeholder="Tell the story behind this item..."
                    required
                  />
                </div>
                <div className="flex gap-2">
                  <button
                    type="submit"
                    className="bg-accent-primary text-white px-4 py-2 flex-1"
                  >
                    Submit for Verification
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowUploadForm(false)}
                    className="bg-gray-600 text-white px-4 py-2"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};