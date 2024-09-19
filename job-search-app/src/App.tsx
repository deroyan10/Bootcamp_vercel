import React, { useState } from 'react';
import JobList from 'components/JobList';
import Filter from 'components/Filter';

const App: React.FC = () => {
  const [filter, setFilter] = useState({ category: '', salary: '' });

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">求人検索アプリ</h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="flex">
          <Filter setFilter={setFilter} />
          <JobList filter={filter} />
        </div>
      </main>
    </div>
  );
};

export default App;