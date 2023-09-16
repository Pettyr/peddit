// ImagePreview.js
import React from 'react';

const ImagePreview = ({ preview }) => {
  const getUrl = (imgUrl) => {
    let encoded = imgUrl.replace('amp;s', 's');
    let doubleEncoded = encoded.replace('amp;', '');
    let tripleEncoded = doubleEncoded.replace('amp;', '');
    return tripleEncoded;
  };

  if (preview) {
    return <img src={getUrl(preview.images[0].source.url)} alt="preview" />;
  } else {
    return null;
  }
};

export default ImagePreview;
