import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  :not(:last-child) {
    margin-bottom: 50px;
  }
  width: 100%;
  height: 100px;
`;

const Title = styled.div`
  font-size: 14px;
  font-weight: 600;
`;

const Episode = styled.div`
  font-size: 10px;
`;

const Overview = styled.p`
  font-size: 12px;
  opacity: 0.7;
  line-height: 1.5;
  width: 50%;
`;

const Season = ({ name, episode_count, overview }) => (
  <Container>
    <Title>{name}</Title>
    <Episode>Episode : {episode_count}</Episode>
    <Overview>{overview}</Overview>
  </Container>
);

Season.propTypes = {
  name: PropTypes.string,
  episode_count: PropTypes.string,
  overview: PropTypes.string,
};

export default Season;
