import React from 'react';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

const Image: React.FC<ImageProps> = ({ src, alt, ...props }) => {
  // Verifica se a URL é externa (começa com http ou https)
  const isExternal = src.startsWith('http');

  // Usa o caminho original para URLs externas, ou o caminho ajustado para URLs internas
  let imageSrc = src;

  if (!isExternal) {
    // Detectar se estamos no GitHub Pages ou em produção
    const isProduction = process.env.NODE_ENV === 'production';
    const isGitHubPages = window.location.hostname === 'vieitas.github.io';

    // Usar o basePath apenas em produção no GitHub Pages
    if (isProduction && isGitHubPages) {
      imageSrc = `/arn-site${src}`;
    } else {
      imageSrc = src;
    }
  }

  return <img src={imageSrc} alt={alt} {...props} />;
};

export default Image;
