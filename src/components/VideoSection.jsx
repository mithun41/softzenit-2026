"use client";
import React from "react";

const VideoSection = () => {
  return (
    <section className="w-full h-[500px] bg-slate-900 relative overflow-hidden border-t border-slate-100">
      {/* 
        This wrapper behaves like 'object-fit: cover' for the iframe.
        It maintains a 16:9 aspect ratio, scales to fill the screen width/height, 
        and is scaled by 1.15 to push YouTube's header and controls out of the crop window.
      */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] min-w-[889px] h-[56.25vw] min-h-[500px] scale-[1.15] pointer-events-none">
        <iframe
          src="https://www.youtube.com/embed/yDgsaOV5h9s?autoplay=1&mute=1&loop=1&playlist=yDgsaOV5h9s&controls=0&rel=0&modestbranding=1&iv_load_policy=3"
          title="SoftZen IT Video Presentation"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 w-full h-full border-0"
        />
      </div>
    </section>
  );
};

export default VideoSection;
