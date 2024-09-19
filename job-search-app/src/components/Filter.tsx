import React from 'react';

const Filter: React.FC<{ setFilter: (filter: any) => void }> = ({ setFilter }) => {
  const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter((prev: any) => ({ ...prev, category: e.target.value }));
  };

  const handleSalaryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter((prev: any) => ({ ...prev, salary: e.target.value }));
  };

  return (
    <div className="w-1/4 p-4 bg-white shadow">
      <h2 className="text-xl font-bold mb-4">求人カテゴリ</h2>
      <div>
        <label className="block">
          <input type="checkbox" value="エンジニア" onChange={handleCategoryChange} />
          エンジニア
        </label>
        <label className="block">
          <input type="checkbox" value="デザイン" onChange={handleCategoryChange} />
          デザイン
        </label>
        {/* 他のカテゴリも同様に追加 */}
      </div>
      <h2 className="text-xl font-bold mt-4 mb-4">年収</h2>
      <select onChange={handleSalaryChange} className="w-full p-2 border">
        <option value="">選択してください</option>
        <option value="300万円以上">300万円以上</option>
        <option value="500万円以上">500万円以上</option>
        {/* 他のオプションも同様に追加 */}
      </select>
    </div>
  );
};

export default Filter;