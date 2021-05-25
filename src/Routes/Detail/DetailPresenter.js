import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Loader from '../../Components/Loader';
import { Helmet } from 'react-helmet';
import Messsage from './../../Components/Message';

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 50px;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
  padding-top: 10px;
`;

const Cover = styled.div`
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  width: 30%;
  height: 100%;
  border-radius: 5px;
`;

const Data = styled.div`
  width: 70%;
  margin-left: 10px;
`;

const Title = styled.h3`
  font-size: 32px;
  margin-bottom: 10px;
`;

const Tab = styled.h5`
  font-size: 20px;
  margin-bottom: 10px;
`;

const InfoContainer = styled.div`
  margin: 20px 0px;
`;

const Info = styled.span``;

const Divider = styled.span`
  margin: 0 10px;
`;

const Overview = styled.p`
  font-size: 12px;
  opacity: 0.7;
  line-height: 1.5;
  width: 50%;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.5;
  z-index: 0;
`;

const Button = styled.button`
  color: yellowgreen;
  background-color: inherit;
`;

const DetailPresenter = ({ result, loading, error }) =>
  loading ? (
    <>
      <Helmet>
        <title>Loading</title>
      </Helmet>
      <Loader />
    </>
  ) : result ? (
    <Container>
      <Helmet>
        <title>
          {result.original_title ? result.original_title : result.original_name}
          {''}| tongnamuu
        </title>
      </Helmet>
      <Backdrop
        bgImage={
          result.backdrop_path
            ? `https://image.tmdb.org/t/p/original/${result.backdrop_path}`
            : require('../../Assets/logo.jpg')
        }
      />
      <Content>
        <Cover
          bgImage={
            result.poster_path
              ? `https://image.tmdb.org/t/p/original/${result.poster_path}`
              : require('../../Assets/logo.jpg')
          }
        />
        <Data>
          <Title>
            {result.original_title
              ? result.original_title
              : result.original_name}
          </Title>
          <InfoContainer>
            <Info>
              {result.release_date
                ? result.release_date.substring(0, 4)
                : result.first_air_date
                ? result.first_air_date.substring(0, 4)
                : ''}
            </Info>
            <Divider>⨀</Divider>
            <Info>
              {result.runtime ? result.runtime : result.episode_run_time[0]} min
            </Info>
            <Divider>⨀</Divider>
            <Info>
              {result.genres &&
                result.genres.map((genre, index) =>
                  index === result.genres.length - 1
                    ? genre.name
                    : `${genre.name}/`
                )}
            </Info>
            <Divider>⨀</Divider>
            <Info>
              <Button
                onClick={() =>
                  window.open(`https://www.imdb.com/title/${result.imdb_id}`)
                }
              >
                IMDB LINK
              </Button>
            </Info>
          </InfoContainer>
          <Overview>{result.overview}</Overview>
        </Data>
        <Data>
          <Tab>Country</Tab>
          <Info>
            {result.production_countries &&
              result.production_countries.map((country, index) =>
                index === result.production_countries.length - 1
                  ? country.name
                  : `${country.name}, `
              )}
          </Info>
        </Data>
        <Data>
          <Tab>Production Company</Tab>
          <Info>
            {result.production_companies &&
              result.production_companies.map((company, index) =>
                index === result.production_companies.length - 1
                  ? company.name
                  : `${company.name}, `
              )}
          </Info>
        </Data>
      </Content>
      {error && <Messsage color="#47bf6b" text={error}></Messsage>}
    </Container>
  ) : (
    <Content>Nothing Found</Content>
  );

DetailPresenter.propTypes = {
  result: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default DetailPresenter;
