import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from './postURL';

import UserCart from '../../components/UserCart';

const PostsView = () => {
  const { isLoading, posts, error } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [posts]);

  return (
    <section>
      {posts &&
        posts.map((p) => {
          const { id, name } = p;
          return (
            <div key={id} className='user_cart'>
              <UserCart name={name} />
            </div>
          );
        })}

      {isLoading && <h5>Loading...</h5>}
      {error && <h4>{error}</h4>}
    </section>
  );
};

export default PostsView;
