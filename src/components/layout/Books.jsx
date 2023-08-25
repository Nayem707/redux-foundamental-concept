import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBooksAction } from '../../service/action/bookAction';

function Cart() {
  const { books, isLoading, error } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooksAction(books));
  }, []);

  return (
    <div>
      <h2>All Books</h2>

      <section>
        {books &&
          books.map((b) => {
            const { name, id, phone } = b;
            return (
              <div key={id}>
                <h4>{name}</h4>
                <h5>{phone}</h5>
              </div>
            );
          })}
      </section>

      {isLoading && <h3>Loading...</h3>}
      {error && <h3>{error}</h3>}
    </div>
  );
}

export default Cart;
