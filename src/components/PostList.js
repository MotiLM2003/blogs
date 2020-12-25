import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPostAndUsers } from '../actions/';

import UserHeader from './UserHeader';
const PostList = ({ users, posts, fetchPostAndUsers }) => {
  useEffect(() => {
    fetchPostAndUsers();
  }, []);

  const renderList = () => {
    return posts.map((post) => {
      return (
        <div className='item' key={post.id}>
          <i className='large middle aligned icon user'></i>
          <div className='content'>
            <div className='description'>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          </div>
          <UserHeader user={users[post.userId - 1]} />
        </div>
      );
    });
  };

  return <div>{renderList()}</div>;
};

const stateToProps = (state) => {
  return {
    posts: state.posts,
    users: state.users,
  };
};

export default connect(stateToProps, { fetchPostAndUsers })(PostList);
