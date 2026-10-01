import React, { useState } from 'react';
import { Building2, Compass, ShieldCheck } from 'lucide-react';

interface ResilientImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackTitle?: string;
  fallbackSubtitle?: string;
  containerClassName?: string;
  fallbackSrc?: string;
}

export const ResilientImage: React.FC<ResilientImageProps> = ({
  src,
  fallbackSrc,
  alt,
  fallbackTitle,
  fallbackSubtitle,
  className = '',
  containerClassName = '',
  ...props
}) => {
  const [currentSrc, setCurrentSrc] = useState<string | undefined>(src);
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Sync if src prop changes
  React.useEffect(() => {
    setCurrentSrc(src);
    setHasError(false);
    setIsLoaded(false);
  }, [src]);

  const handleError = () => {
    if (fallbackSrc && currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
    } else {
      setHasError(true);
    }
  };

  return (
    <div className={`relative overflow-hidden bg-[#E8E4DA] ${containerClassName}`}>
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-[#E8E4DA] animate-pulse flex items-center justify-center">
          <Building2 className="w-8 h-8 text-[#B89B67]/40" />
        </div>
      )}

      {hasError ? (
        <div className="absolute inset-0 bg-gradient-to-br from-[#163A32] via-[#1A4239] to-[#102C26] p-6 flex flex-col justify-end text-[#F7F4EC]">
          <div className="flex items-center gap-2 text-[#B89B67] text-xs font-semibold uppercase tracking-wider mb-2">
            <ShieldCheck className="w-4 h-4" />
            <span>Reality With Pramod · Indore Verified</span>
          </div>
          <h4 className="font-display text-lg text-white font-medium mb-1">
            {fallbackTitle || alt || 'Indore Property Showcase'}
          </h4>
          <p className="text-xs text-[#DDE5DE]/80 max-w-xs">
            {fallbackSubtitle || 'Curated high-standard real estate asset in prime Indore micro-market.'}
          </p>
        </div>
      ) : (
        <img
          src={currentSrc}
          alt={alt || 'Indore Real Estate'}
          referrerPolicy="no-referrer"
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          onError={handleError}
          className={`w-full h-full object-cover transition-opacity duration-700 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          } ${className}`}
          {...props}
        />
      )}
    </div>
  );
};
