import React from 'react';
import { X, Clock, CheckCircle2, AlertTriangle, BookOpen, MessageSquare } from 'lucide-react';
import { Article } from '../types';
import { ResilientImage } from './ResilientImage';

interface ArticleModalProps {
  article: Article | null;
  onClose: () => void;
  onAskQuestion: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({
  article,
  onClose,
  onAskQuestion,
}) => {
  if (!article) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div className="bg-[#FAF8F3] text-[#163A32] max-w-3xl w-full border border-[#B89B67]/40 shadow-2xl overflow-hidden relative max-h-[92vh] flex flex-col my-auto">
        {/* Top Bar */}
        <div className="bg-[#102C26] text-[#F7F4EC] px-6 py-4 flex items-center justify-between border-b border-[#B89B67]/30 shrink-0">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-[#B89B67]" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[#B89B67]">
              Advisory Whitepaper
            </span>
            <span className="text-white/40">·</span>
            <span className="text-xs text-[#DDE5DE]">{article.category}</span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close Modal"
            className="p-1 hover:text-[#B89B67] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 md:p-10 space-y-6">
          {/* Header */}
          <div>
            <div className="flex items-center gap-2 text-xs text-[#163A32]/60 mb-2">
              <Clock className="w-3.5 h-3.5" />
              <span>{article.readTime}</span>
              <span>·</span>
              <span>{article.date}</span>
            </div>
            <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-[#102C26] leading-tight">
              {article.title}
            </h1>
          </div>

          {/* Cover Image */}
          <div className="relative aspect-[16/9] overflow-hidden bg-[#E8E4DA] border border-[#163A32]/10">
            <ResilientImage
              src={article.image}
              alt={article.title}
              fallbackTitle={article.title}
              containerClassName="w-full h-full"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Excerpt Lead */}
          <p className="font-display text-lg text-[#163A32] italic font-medium leading-relaxed border-l-2 border-[#B89B67] pl-4">
            {article.excerpt}
          </p>

          {/* Body Paragraphs */}
          <div className="space-y-4 text-sm text-[#163A32]/85 leading-relaxed font-light">
            {article.content.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          {/* Mandatory Checklist */}
          {article.checklist && article.checklist.length > 0 && (
            <div className="bg-[#FFFFFF] p-6 border border-[#163A32]/15">
              <h4 className="font-display text-base font-bold text-[#102C26] mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#B89B67]" />
                <span>Essential Document Audit Checklist</span>
              </h4>
              <ul className="space-y-2 text-xs text-[#163A32]/90">
                {article.checklist.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#B89B67] font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Legal Warning Box */}
          {article.warningNote && (
            <div className="bg-[#163A32] text-[#F7F4EC] p-5 border border-[#B89B67]/30 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-[#B89B67] shrink-0 mt-0.5" />
              <div className="text-xs">
                <span className="font-bold text-[#B89B67] uppercase tracking-wider block mb-1">
                  Advisory Caution
                </span>
                <p className="text-[#DDE5DE] leading-relaxed">
                  {article.warningNote}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-[#FFFFFF] px-6 py-4 border-t border-[#163A32]/10 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
          <span className="text-xs text-[#163A32]/60">
            Have questions about a specific document or title chain?
          </span>

          <button
            onClick={() => {
              onClose();
              onAskQuestion();
            }}
            className="w-full sm:w-auto px-6 py-2.5 bg-[#163A32] hover:bg-[#102C26] text-[#F7F4EC] text-xs font-semibold tracking-wider uppercase transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <MessageSquare className="w-3.5 h-3.5 text-[#B89B67]" />
            <span>Consult Pramod on Paperwork</span>
          </button>
        </div>
      </div>
    </div>
  );
};
