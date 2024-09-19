import React from 'react';

interface Job {
  title: string;
  category: string;
  salary: string;
}

interface JobListProps {
  filter: { category: string; salary: string };
}

const jobs: Job[] = [
  { title: '経験者歓迎！大手企業でのWebエンジニア募集', category: 'エンジニア', salary: '600万円' },
  { title: '未経験OK！営業アシスタント急募', category: '営業', salary: '350万円' },
  // 他の求人データも同様に追加
];

const JobList: React.FC<JobListProps> = ({ filter }) => {
  const filteredJobs = jobs.filter(job => {
    return (
      (filter.category === '' || job.category.includes(filter.category)) &&
      (filter.salary === '' || job.salary.includes(filter.salary))
    );
  });

  return (
    <div className="w-3/4 p-4">
      <h2 className="text-xl font-bold mb-4">求人一覧</h2>
      {filteredJobs.map((job, index) => (
        <div key={index} className="p-4 mb-4 bg-white shadow">
          <h3 className="text-lg font-bold">{job.title}</h3>
          <p>カテゴリ: {job.category}</p>
          <p>年収: {job.salary}</p>
        </div>
      ))}
    </div>
  );
};

export default JobList;