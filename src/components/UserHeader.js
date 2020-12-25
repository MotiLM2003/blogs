import React, { useEffect } from 'react';
import { connect } from 'react-redux';

const UserHeader = ({ users, user }) => {
  //console.log(users);
  if (!user) return <div>Loading </div>;
  return <div>{user.name}</div>;
};

const stateToProps = (state, ownProps) => {
  const user = state.users.find((user) => user.id === ownProps.userId);

  return {
    posts: state.posts,
    users: state.users,
  };
};

export default connect(stateToProps)(UserHeader);
