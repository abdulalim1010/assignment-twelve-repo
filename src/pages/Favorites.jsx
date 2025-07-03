import React from 'react';

const favorites = [
  {
    title: "Coding at Night",
    description: "I enjoy the calm and focus that comes with late-night coding sessions.",
    img: "https://cdn-icons-png.flaticon.com/512/411/411763.png", // Moon/laptop icon
  },
  {
    title: "Watching Footballers",
    description: "I love watching football and following my favorite players.",
    img: "https://cdn-icons-png.flaticon.com/512/2972/2972109.png", // Football
  },
  {
    title: "Playing Football",
    description: "Playing football with friends keeps me active and energized.",
    img: "https://cdn-icons-png.flaticon.com/512/902/902731.png", // Kicking ball
  },
  {
    title: "Tech YouTube Channels",
    description: "I learn a lot and stay up-to-date with tech trends via YouTube.",
    img: "https://cdn-icons-png.flaticon.com/512/1384/1384060.png", // YouTube
  },
  {
    title: "Traveling Abroad",
    description: "I dream of exploring different countries and cultures.",
    img: "https://cdn-icons-png.flaticon.com/512/201/201623.png", // Globe
  },
  {
    title: "Nature: River, Hills & Jungle",
    description: "I find peace in the beauty of rivers, green hills, and dense forests.",
    img: "https://cdn-icons-png.flaticon.com/512/4275/4275497.png", // Nature icon
  },
  {
    title: "Helping Others with Code",
    description: "Sharing knowledge and helping others brings me joy.",
    img: "https://cdn-icons-png.flaticon.com/512/3649/3649460.png", // Helping icon
  },
];

const Favorites = () => {
  return (
    <section className="max-w-6xl mx-auto px-4" data-aos="fade-up">
      <h2 className="text-3xl font-bold text-accent mb-10 text-center">💖 My Favorite Things</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {favorites.map((item, idx) => (
          <div
            key={idx}
            className="card bg-base-100 shadow-md p-6 text-center transition-transform hover:scale-105"
            data-aos="fade-up"
            data-aos-delay={idx * 100}
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-16 h-16 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-primary mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Favorites;
