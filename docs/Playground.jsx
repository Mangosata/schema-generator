import React, { useRef } from 'react';
import Generator from 'fr-generator-en';
import './index.css';

const defaultValue = {
  schema: {
    type: 'object',
    properties: {},
  },
  displayType: 'row',
  showDescIcon: true,
  labelWidth: 120,
};

const Demo = () => {
  const ref = useRef();

  const onClick = () => {
    ref.current.copyValue();
    window.open('https://x-render.gitee.io/form-render/playground');
  };

  return (
    <div style={{ height: '100vh' }}>
      <Generator
        ref={ref}
        defaultValue={defaultValue}
        extraButtons={[{ text: 'Go to playground', onClick }]}
      />
    </div>
  );
};

export default Demo;
