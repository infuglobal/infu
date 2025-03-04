"use client";
import { useState, useRef } from "react";
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute, FaExpand } from "react-icons/fa";

export default function VideoPlayer({ videoSrc, thumbnail }: { videoSrc: string; thumbnail: string }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  return (
    <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg group">
      {/* Video Element */}
      <video
        ref={videoRef}
        src={videoSrc}
        poster={thumbnail}
        className="w-full h-full object-cover rounded-lg"
        onClick={togglePlay}
      />

      {/* Overlay Play Button (Visible when video is not playing) */}
      {!isPlaying && (
        <button
          onClick={togglePlay}
          className="absolute inset-0 flex items-center justify-center bg-black/50 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <FaPlay className="w-12 h-12" />
        </button>
      )}

      {/* Custom Controls */}
      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between bg-black/50 p-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
        <button onClick={togglePlay} className="text-white text-lg">
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>

        <button onClick={toggleMute} className="text-white text-lg">
          {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
        </button>

        <button onClick={handleFullscreen} className="text-white text-lg">
          <FaExpand />
        </button>
      </div>
    </div>
  );
}
