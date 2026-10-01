import React, { useState } from 'react';
import { Play, Instagram, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { VideoContent } from '../types';
import { VIDEOS } from '../data/videos';
import { ResilientImage } from './ResilientImage';

interface VideoSectionProps {
  onSelectVideo?: (video: VideoContent) => void;
}

export const VideoSection: React.FC<VideoSectionProps> = () => {
  const [activeVideo, setActiveVideo] = useState<VideoContent>(VIDEOS[0]);
  const [isPlayingPreview, setIsPlayingPreview] = useState(false);

  const editorialStripTopics = [
    {
      title: 'PROPERTY FOR MIDDLE-CLASS BUYERS IS DYING',
      desc: 'Why skyrocketing land circle rates push genuine homebuyers 25km into unapproved layouts.',
    },
    {
      title: 'BEFORE YOU BUY A RESALE PROPERTY, CHECK THIS',
      desc: 'The non-negotiable society NOC, Nagar Nigam mutation, and physical title deed audit.',
    },
    {
      title: '20 PROPERTY DOCUMENTS EVERY BUYER SHOULD KNOW',
      desc: 'Khasra-Khatauni, Section 172 Land Diversion, TNCP stamp, and RERA MP clearances.',
    },
    {
      title: '10 PROPERTY TRAPS YOU SHOULD KNOW',
      desc: 'From mortgaged plots to masterplan roads that exist only in marketing brochures.',
    },
  ];

  return (
    <section id="videos" className="py-24 md:py-32 bg-[#102C26] text-[#F7F4EC]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-[#B89B67]/25 pb-8">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#B89B67] font-semibold mb-3">
              <Instagram className="w-4 h-4" />
              <span>Instagram @realitywithpramod</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
              REAL ESTATE. EXPLAINED SIMPLY.
            </h2>
          </div>

          <a
            href="https://www.instagram.com/realitywithpramod"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#B89B67] hover:bg-[#D5BD8D] text-[#102C26] text-xs font-semibold tracking-wider uppercase transition-colors cursor-pointer self-start md:self-auto shadow-md"
          >
            <span>Follow @realitywithpramod</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Editorial Content Strip: Real Topics Highlight */}
        <div className="mb-16">
          <p className="text-xs uppercase tracking-widest text-[#B89B67] font-semibold mb-4">
            Ground-Reality Content Series
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {editorialStripTopics.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#163A32] border border-[#B89B67]/20 p-5 hover:border-[#B89B67] transition-colors"
              >
                <span className="text-[#B89B67] text-xs font-bold block mb-2">
                  Topic 0{idx + 1}
                </span>
                <h4 className="font-display text-base font-bold text-white mb-2 leading-snug">
                  {item.title}
                </h4>
                <p className="text-xs text-[#DDE5DE]/75 leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Video Player & Reel Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Video Highlight Card */}
          <div className="lg:col-span-7 bg-[#163A32] border border-[#B89B67]/30 overflow-hidden shadow-xl">
            <div className="relative aspect-video overflow-hidden bg-black group">
              <ResilientImage
                src={activeVideo.thumbnail}
                alt={activeVideo.title}
                fallbackTitle={activeVideo.title}
                fallbackSubtitle={activeVideo.topic}
                containerClassName="w-full h-full"
                className="w-full h-full object-cover opacity-85 group-hover:opacity-95 transition-opacity"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

              {/* Play Button Trigger */}
              <a
                href={activeVideo.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center cursor-pointer group"
              >
                <div className="w-16 h-16 rounded-full bg-[#B89B67] text-[#102C26] flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-lg">
                  <Play className="w-7 h-7 fill-[#102C26] ml-1" />
                </div>
              </a>

              {/* Badge overlay */}
              <div className="absolute top-4 left-4 bg-[#102C26]/90 px-3 py-1 text-[11px] font-semibold text-[#B89B67] border border-[#B89B67]/30">
                {activeVideo.topic}
              </div>

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-[#DDE5DE]">
                <span>{activeVideo.duration} Reel Breakdown</span>
                <span className="text-[#B89B67] font-semibold">{activeVideo.views}</span>
              </div>
            </div>

            <div className="p-6 md:p-8">
              <span className="text-xs uppercase tracking-wider text-[#B89B67] font-semibold block mb-1">
                Featured Reel
              </span>
              <h3 className="font-display text-2xl font-bold text-white mb-3">
                {activeVideo.title}
              </h3>
              <p className="text-sm text-[#DDE5DE]/85 leading-relaxed font-light mb-6">
                {activeVideo.summary}
              </p>
              <div className="pt-4 border-t border-[#B89B67]/20 flex items-center justify-between">
                <span className="text-xs text-[#DDE5DE]/70">
                  {activeVideo.hook}
                </span>
                <a
                  href={activeVideo.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#B89B67] hover:text-white transition-colors"
                >
                  <span>Watch on Instagram</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Video List / Playlist */}
          <div className="lg:col-span-5 space-y-3">
            <p className="text-xs uppercase tracking-widest text-[#B89B67] font-semibold mb-2">
              Browse More Episodes
            </p>
            {VIDEOS.map((video) => (
              <div
                key={video.id}
                onClick={() => setActiveVideo(video)}
                className={`p-4 border transition-all duration-200 cursor-pointer flex items-center gap-4 ${
                  activeVideo.id === video.id
                    ? 'bg-[#163A32] border-[#B89B67] shadow-md'
                    : 'bg-[#102C26] border-[#B89B67]/15 hover:border-[#B89B67]/40 hover:bg-[#163A32]/50'
                }`}
              >
                <div className="w-20 h-14 relative shrink-0 overflow-hidden bg-black">
                  <ResilientImage
                    src={video.thumbnail}
                    alt={video.title}
                    fallbackTitle={video.title}
                    containerClassName="w-full h-full"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <Play className="w-4 h-4 fill-white text-white opacity-80" />
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <span className="text-[10px] uppercase font-bold text-[#B89B67] block">
                    {video.topic}
                  </span>
                  <h4 className="font-display text-sm font-bold text-white truncate">
                    {video.title}
                  </h4>
                  <span className="text-[11px] text-[#DDE5DE]/70">
                    {video.duration} · {video.views}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
