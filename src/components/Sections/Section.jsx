import React from 'react';
import PropTypes from 'prop-types';
import { Sections } from './Section.styled';

export const Section = ({ titel, children }) => {
  return (
    <Sections>
      <h1>{titel}</h1>
      {children}
    </Sections>
  );
};

Section.propTypes = {
  titel: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
