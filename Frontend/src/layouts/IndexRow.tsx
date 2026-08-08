import React from "react";

interface IndexRowProps {
  leftText: React.ReactNode;
  middleText: React.ReactNode;
  rightText?: React.ReactNode;
}

export default function IndexRow({ leftText, middleText, rightText }: IndexRowProps) {
  return (
    <div className="index-row group">
      <div className="w-1/3 md:w-1/4 font-mono-tech text-xs tracking-widest uppercase text-white/50 group-hover:text-white/80 transition-colors">
        {leftText}
      </div>
      <div className="w-2/3 md:w-1/2 text-lg font-light text-white/90">
        {middleText}
      </div>
      <div className="hidden md:block w-1/4 text-sm text-white/50 text-right">
        {rightText}
      </div>
    </div>
  );
}
