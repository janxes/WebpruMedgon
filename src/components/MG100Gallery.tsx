import React from 'react';
import { ModelGallery, MG100_GALLERY_ITEMS, MG100_PDF_URL } from './ModelGallery';

export { MG100_GALLERY_ITEMS, MG100_PDF_URL };

export const MG100Gallery: React.FC = () => {
  return <ModelGallery modelKey="MG100" />;
};

export default MG100Gallery;
