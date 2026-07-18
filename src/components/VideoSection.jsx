"use client";
import React, { useEffect, useRef } from "react";

const VideoSection = () => {
  const playerRef = useRef(null);

  useEffect(() => {
    let player;

    const createPlayer = () => {
      player = new window.YT.Player("youtube-player", {
        videoId: "yDgsaOV5h9s",
        playerVars: {
          autoplay: 1,
          mute: 1,
          loop: 1,
          playlist: "yDgsaOV5h9s",
          controls: 0,
          rel: 0,
          modestbranding: 1,
          iv_load_policy: 3,
          showinfo: 0,
          disablekb: 1,
        },
        events: {
          onReady: (event) => {
            event.target.setPlaybackRate(1.5); // Speed increased to 1.5x
            event.target.playVideo();
          },
          onStateChange: (event) => {
            if (event.data === window.YT.PlayerState.ENDED) {
              event.target.playVideo();
            }
          },
        },
      });
      playerRef.current = player;
    };

    if (window.YT && window.YT.Player) {
      createPlayer();
    } else {
      if (!document.getElementById("youtube-iframe-api-script")) {
        const tag = document.createElement("script");
        tag.id = "youtube-iframe-api-script";
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName("script")[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      }

      const checkAndCreate = () => {
        if (window.YT && window.YT.Player) {
          createPlayer();
        } else {
          setTimeout(checkAndCreate, 100);
        }
      };
      
      checkAndCreate();
    }

    return () => {
      if (player && typeof player.destroy === "function") {
        player.destroy();
      }
    };
  }, []);

  return (
    <section className="w-full h-[500px] bg-slate-900 relative overflow-hidden border-t border-slate-100">
      {/* 
        This wrapper behaves like 'object-fit: cover' for the iframe.
        It maintains a 16:9 aspect ratio, scales to fill the screen width/height, 
        and is scaled by 1.15 to push YouTube's header and controls out of the crop window.
      */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] min-w-[889px] h-[56.25vw] min-h-[500px] scale-[1.15] pointer-events-none">
        <div id="youtube-player" className="absolute inset-0 w-full h-full border-0" />
      </div>
    </section>
  );
};

export default VideoSection;

