import 'react-loading-skeleton/dist/skeleton.css';
import Skeleton from 'react-loading-skeleton';

function App() {
  return (
    <>
      {(
        <p>
          possimus, qui, eum aliquid modi blanditiis quisquam laudantium
          voluptatem ex reprehenderit veniam beatae nisi eos, nihil ab esse iure
          corrupti. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Quas numquam
        </p>
      ) || <Skeleton />}
    </>
  );
}

export default App;
