// @flow
import React from 'react';

type ViewProps = {
  props?: Object,
  children?: any,
}

const View = ({ children, ...props }: ViewProps) => (
  <div {...props}>
    {children}
    <style jsx>{`
      div {
        display: flex;
        flex: 1;
      }
    `}</style>
  </div>
);

export default View;
