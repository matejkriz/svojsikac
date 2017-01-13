// @flow
import React from 'react';

const styles = {
  View: {
    display: 'flex',
    flex: 1,
  },
};

type ViewProps = {
  props?: Object,
  children?: any,
}

const View = ({ children, ...props }: ViewProps) => (
  <div style={styles.View} {...props}>
    {children}
  </div>
);

export default View;
