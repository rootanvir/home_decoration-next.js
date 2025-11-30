import React, { FC, ReactNode } from 'react';

interface Props {
  children : ReactNode;
}

const RootLayer: FC<Props> = ({ children }) => {
  return (
    <html>
      <head></head>
      <body>
        {children}
      </body>
    </html>
  );
};

export default RootLayer;