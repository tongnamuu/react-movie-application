import React from 'react';
import { moviesApi, tvApi } from '../../api';
import DetailPresenter from './DetailPresenter';

export default class extends React.Component {
  constructor(props) {
    super(props);
    const {
      location: { pathname },
    } = props;
    this.state = {
      result: null,
      error: null,
      isMovie: pathname.includes('/movie/'),
      loading: true,
    };
  }

  async componentDidMount() {
    const {
      match: {
        params: { id },
      },
      history: { push },
    } = this.props;
    const parseId = Number(id);
    if (isNaN(parseId)) {
      return push('/');
    }
    let result = null;

    try {
      if (this.state.isMovie) {
        ({ data: result } = await moviesApi.movieDetail(parseId));
      } else {
        ({ data: result } = await tvApi.showDetail(parseId));
      }
    } catch {
      this.setState({ error: "Can't find anything" });
    } finally {
      this.setState({ loading: false, result });
    }
  }

  render() {
    const { result, error, loading } = this.state;
    return <DetailPresenter result={result} error={error} loading={loading} />;
  }
}
