import React, { useState } from 'react';
import { BookOpen, ArrowUpRight, Clock, FileText, CheckCircle2 } from 'lucide-react';
import { Article } from '../types';
import { ARTICLES } from '../data/articles';
import { ResilientImage } from './ResilientImage';

interface KnowledgeHubProps {
  onSelectArticle: (article: Article) => void;
}

export const KnowledgeHub: React.FC<KnowledgeHubProps> = ({ onSelectArticle }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Property Documents', 'Resale Property', 'Home Buying', 'Investment Basics'];

  const filteredArticles = ARTICLES.filter((art) => {
    if (selectedCategory === 'All') return true;
    return art.category === selectedCategory;
  });

  return (
    <section id="knowledge" className="py-24 md:py-32 bg-[#F7F4EC] text-[#163A32]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-[#163A32]/10 pb-8">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#B89B67] font-semibold mb-3">
              <BookOpen className="w-4 h-4" />
              <span>Due Diligence & Legal Intelligence</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#102C26] tracking-tight">
              BEFORE YOU BUY, KNOW WHAT YOU’RE SIGNING.
            </h2>
          </div>
          <p className="text-sm md:text-base text-[#163A32]/80 max-w-md font-light leading-relaxed">
            Essential property paperwork, municipal guidelines, and risk prevention guides for Indore homebuyers.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#163A32] text-[#F7F4EC]'
                  : 'bg-[#FAF8F3] text-[#163A32]/80 hover:bg-[#E8E4DA] border border-[#163A32]/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              onClick={() => onSelectArticle(article)}
              className="group bg-[#FFFFFF] border border-[#163A32]/10 hover:border-[#B89B67] transition-all duration-300 p-6 md:p-8 flex flex-col justify-between shadow-xs hover:shadow-md cursor-pointer"
            >
              <div>
                {/* Image Cover */}
                <div className="relative aspect-[16/9] overflow-hidden bg-[#E8E4DA] mb-6 border border-[#163A32]/5">
                  <ResilientImage
                    src={article.image}
                    alt={article.title}
                    fallbackTitle={article.title}
                    fallbackSubtitle={article.category}
                    containerClassName="w-full h-full"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-[#102C26]/90 text-[#F7F4EC] text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 border border-[#B89B67]/30">
                    {article.category}
                  </div>
                </div>

                {/* Metadata */}
                <div className="flex items-center gap-3 text-xs text-[#163A32]/60 mb-3 font-medium">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{article.readTime}</span>
                  </span>
                  <span>·</span>
                  <span>{article.date}</span>
                </div>

                {/* Title */}
                <h3 className="font-display text-xl sm:text-2xl font-bold text-[#102C26] mb-3 group-hover:text-[#B89B67] transition-colors leading-snug">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-xs sm:text-sm text-[#163A32]/75 leading-relaxed font-light mb-6">
                  {article.excerpt}
                </p>
              </div>

              {/* Read Article CTA */}
              <div className="pt-4 border-t border-[#163A32]/8 flex items-center justify-between">
                <span className="text-xs font-semibold text-[#102C26] group-hover:text-[#B89B67] transition-colors flex items-center gap-1">
                  <span>Read Full Advisory Article</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
                <FileText className="w-4 h-4 text-[#B89B67]" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
