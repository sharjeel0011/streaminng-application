import React from 'react';
import MovieBanner from '../Components/banner';

const Movi = () => {
  // Dynamic data for sections
  const sectionsData = [
    {
      title: 'En tendencia',
      cards: [
        { title: 'Movie 1' },
        { title: 'Movie 2' },
        { title: 'Movie 3' },
        { title: 'Movie 4' },
        { title: 'Movie 5' },
        { title: 'Movie 6' },
      ],
    },
    {
      title: 'Universo Cinematográfico de Marvel',
      cards: [
        { title: 'Iron Man' },
        { title: 'Captain America' },
        { title: 'Thor' },
        { title: 'Black Widow' },
        { title: 'Hulk' },
        { title: 'Hawkeye' },
      ],
    },
    {
      title: 'Universo Cinematográfico de Marvel: Fase uno',
      cards: [
        { title: 'The Avengers' },
        { title: 'Iron Man 2' },
        { title: 'Thor: The Dark World' },
        { title: 'Captain America: The Winter Soldier' },
        { title: 'Guardians of the Galaxy' },
        { title: 'Age of Ultron' },
      ],
    },
    {
      title: 'Universo Cinematográfico de Marvel: Fase dos',
      cards: [
        { title: 'Ant-Man' },
        { title: 'Doctor Strange' },
        { title: 'Black Panther' },
        { title: 'Captain Marvel' },
        { title: 'Infinity War' },
        { title: 'Endgame' },
      ],
    },
    {
        title: 'Universo Cinematográfico de Marvel: Fase dos',
        cards: [
          { title: 'Ant-Man' },
          { title: 'Doctor Strange' },
          { title: 'Black Panther' },
          { title: 'Captain Marvel' },
          { title: 'Infinity War' },
          { title: 'Endgame' },
        ],
      },
      {
        title: 'Universo Cinematográfico de Marvel: Fase dos',
        cards: [
          { title: 'Ant-Man' },
          { title: 'Doctor Strange' },
          { title: 'Black Panther' },
          { title: 'Captain Marvel' },
          { title: 'Infinity War' },
          { title: 'Endgame' },
        ],
      },
      {
        title: 'Universo Cinematográfico de Marvel: Fase dos',
        cards: [
          { title: 'Ant-Man' },
          { title: 'Doctor Strange' },
          { title: 'Black Panther' },
          { title: 'Captain Marvel' },
          { title: 'Infinity War' },
          { title: 'Endgame' },
        ],
      },
  ];

  return (
    <div className="text-white bg-black">
      {/* Movie Banner */}
      <MovieBanner />

      {/* Render Sections */}
      {sectionsData.map((section, index) => (
        <div key={index} className="mb-8 px-4">
          <h2 className="text-lg font-bold mb-4">{section.title}</h2>
          <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {section.cards.map((card, idx) => (
              <div
                key={idx}
                className="bg-gray-800 rounded shadow-md p-4 flex justify-center items-center"
              >
                <p className="text-sm font-medium">{card.title || 'Placeholder'}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Movi;
