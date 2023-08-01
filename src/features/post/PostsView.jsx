import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from './postsSlice';

import UserCart from '../../components/UserCart';

const PostsView = () => {
  const { isLoading, posts, error } = useSelector((state) => state.posts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <section>
      {posts &&
        posts.map((p) => {
          const { id, name } = p;
          return (
            <div key={id}>
              <UserCart name={name} />
            </div>
          );
        })}

      {isLoading && <h1>Loading...</h1>}
      {error && <h4>{error}</h4>}
    </section>
  );
};

export default PostsView;
