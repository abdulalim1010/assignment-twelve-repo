import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router';
import Education from './Education';

const Study = () => {
  const studies = useLoaderData();

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-primary mb-8">
        🎓 My Educational Journey
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {studies.map((stat) => (
          <Education key={stat.id} stat={stat} />
        ))}
      </div>
    </div>
  );
};

export default Study;
