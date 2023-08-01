// import Counter from './components/Counter';
// import Books from './components/Books';
import './App.css';

import CounterView from './features/counter/CounterView';
import PostsView from './features/post/PostsView';

function App() {
  return (
    <>
      <CounterView />
      <PostsView />
      {/* <Counter /> */}
      {/* <Books /> */}
    </>
  );
}

export default App;
