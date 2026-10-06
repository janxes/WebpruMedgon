import React from 'react';

interface MedgonLogoProps {
  className?: string;
  variant?: 'full' | 'icon';
  alt?: string;
}

export const MedgonLogo: React.FC<MedgonLogoProps> = ({
  className = 'h-11 sm:h-12 w-auto',
  variant = 'full',
  alt = 'Medgón Passivhaus',
}) => {
  const officialLogoUrl = 'https://www.medgon.com/wp-content/uploads/2024/05/logotipo-medgon-passivhaus.png';

  return (
    <img
      src={officialLogoUrl}
      alt={alt}
      className={`${className} object-contain transition-transform duration-200`}
      referrerPolicy="no-referrer"
      loading="eager"
    />
  );
};
