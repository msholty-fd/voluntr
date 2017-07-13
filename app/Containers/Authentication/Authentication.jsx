import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';
import { browserHistory } from 'react-router';
import CircularProgress from 'material-ui/CircularProgress';

const style = {
  display: 'flex',
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
};

@firebaseConnect()
@connect(({ firebase: { auth } }) => ({ auth }))
export default class Authentication extends React.Component {
  static propTypes = {
    auth: PropTypes.shape(),
    children: PropTypes.element.isRequired,
  };

  render() {
    const { auth } = this.props;

    if (!auth.isLoaded) {
      return (
        <div style={style}>
          <CircularProgress size={80} thickness={5} />
        </div>
      );
    } else if (auth.isEmpty) {
      browserHistory.replace('/');
      return null;
    }

    return this.props.children;
  }
}
