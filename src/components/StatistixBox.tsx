import React from 'react';
import { useGetDataQuery } from '../utils/api'; // Ganti path sesuai dengan lokasi file dataApi.ts

const StatisticBox: React.FC = () => {
  const { data, error, isLoading } = useGetDataQuery({}); // Mengambil data dari API

  if (isLoading) return <div className="text-center text-white">Loading...</div>;
  if (error) return <div className="text-center text-red-500">Error fetching data</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-6 w-[90%] bg-[#286F6C] absolute bottom-[-100px] left-15 rounded-lg">
      {/* Statistik Experience */}
      <div className="p-6 rounded-lg text-center text-white border-r border-white/30">
        <p className="text-3xl font-bold">{data?.experience}</p>
        <h3 className="text-sm ">Years <br />Experience</h3>
      </div>

      {/* Statistik Country */}
      <div className="p-6 rounded-lg text-center text-white border-r border-white/30">
        <p className="text-3xl font-bold">{data?.country}</p>
        <h3 className="text-sm ">Opened in <br /> the country</h3>
      </div>

      {/* Statistik Sold */}
      <div className="p-6 rounded-lg text-center text-white border-r border-white/30">
        <p className="text-3xl font-bold">{data?.sold}</p>
        <h3 className="text-sm ">Furniture <br /> sold</h3>
      </div>

      {/* Statistik Variant */}
      <div className="p-6 rounded-lg text-center text-white">
        <p className="text-3xl font-bold">{data?.variant}</p>
        <h3 className="text-sm ">Variant <br /> Furniture</h3>
      </div>
    </div>
  );
};

export default StatisticBox;