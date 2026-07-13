import React from "react";
import { Image as ImageIcon, PlayCircle } from "lucide-react";

const MediaSlot = ({ type = "image", label = "Screenshot / Demo Placeholder", height = "h-80" }) => {
  return (
    <div className={`w-full ${height} bg-slate-100 rounded-3xl border-2 border-dashed border-slate-300 flex flex-col items-center justify-center p-8 text-center group transition-colors hover:bg-slate-50 hover:border-blue-300`}>
      <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-slate-400 mb-4 group-hover:text-blue-500 group-hover:scale-110 transition-all">
        {type === "video" ? <PlayCircle size={32} /> : <ImageIcon size={32} />}
      </div>
      <h4 className="text-slate-700 font-bold text-lg mb-2">{label}</h4>
      <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-bold uppercase tracking-wider rounded-md">
        Content Required from SoftZen IT
      </span>
    </div>
  );
};

export default MediaSlot;
