import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const Text = styled.span`
  color: #43c1d1;
  font-weight: 600;
`;

const Messsage = ({ text, color }) => (
  <Container>
    <Text color={color}>{text}</Text>
  </Container>
);

Messsage.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Messsage;
