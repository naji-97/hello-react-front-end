// Component (Greeting.js)
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreetings } from '../store/greetingsSlice';

const Greeting = () => {
  const { greetings, isLoading } = useSelector((state) => state.greetings);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGreetings());
  }, [dispatch]);

  return (
    <div>
      <h1>Random Greeting</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {greetings && <p>{greetings}</p>}
        </div>
      )}
    </div>
  );
};

export default Greeting;
