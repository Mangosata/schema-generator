import React from 'react';

const defaultImg =
  'https://img.alicdn.com/tfs/TB14tSiKhTpK1RjSZFKXXa2wXXa-354-330.png';

export default (format, value) => {
  return format === 'image' ? (
    <img
      src={value || defaultImg}
      alt="Image adress is wrong"
      className="fr-preview-image"
    />
  ) : null;
};
