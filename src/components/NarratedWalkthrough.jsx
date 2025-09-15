import React, { useState } from 'react';
import './NarratedWalkthrough.css';

const mediaData = [
  {
    type: 'video',
    title: 'Rumtek Monastery',
    language: 'English',
    url: 'https://www.youtube.com/embed/yE4QXBQMT4E',
  },
  {
    type: 'video',
    title: 'Pemayangtse Monastery',
    language: 'Hindi',
    url: 'https://www.youtube.com/embed/r0FS9TQANHM',
  },
  {
    type: 'audio',
    title: 'Enchey Monastery',
    language: 'English',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
  },
  {
    type: 'audio',
    title: 'Tashiding Monastery',
    language: 'Hindi',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
  },
];

const NarratedWalkthrough = () => {
  const [language, setLanguage] = useState('English');

  const filteredVideos = mediaData.filter(
    (item) => item.type === 'video' && item.language === language
  );

  const filteredAudios = mediaData.filter(
    (item) => item.type === 'audio' && item.language === language
  );

  return (
    <section className="NarratedWalkthrough" id="narrated-walkthrough">
      <h2 className="NarratedWalkthrough__title">Narrated Walkthroughs</h2>
      <p className="NarratedWalkthrough__description">
        Watch and listen to narrated monastery walkthroughs in your preferred language.
      </p>

      {/* Language Selector */}
      <div className="NarratedWalkthrough__language-selector">
        <label htmlFor="language-select">Select Language:</label>
        <select
          id="language-select"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="English">English</option>
          <option value="Hindi">Hindi</option>
        </select>
      </div>

      {/* Video Section */}
      <div className="NarratedWalkthrough__media-grid">
        {filteredVideos.map((item, index) => (
          <div className="NarratedWalkthrough__media-card" key={`video-${index}`}>
            <iframe
              title={item.title}
              src={item.url}
              frameBorder="0"
              allowFullScreen
              className="NarratedWalkthrough__iframe"
            ></iframe>
            <p>{item.title} – {item.language}</p>
          </div>
        ))}
      </div>

      {/* Audio Section */}
      <div className="NarratedWalkthrough__audio-section">
        {filteredAudios.map((item, index) => (
          <div className="NarratedWalkthrough__media-card" key={`audio-${index}`}>
            <audio controls className="NarratedWalkthrough__audio">
              <source src={item.url} type="audio/mp3" />
              Your browser does not support the audio element.
            </audio>
            <p>{item.title} – {item.language}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NarratedWalkthrough;
