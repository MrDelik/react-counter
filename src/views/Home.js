import React from 'react';

function Home({
  Increment,
  Decrement,
  counter,
}) {
  return (
    <div>
      <button onClick={Increment}>
        Cliquez pour incrémenter
      </button>
      <button onClick={Decrement}>
        Cliquez pour décrémenter
      </button>
      <p>Le compteur vaut {counter}</p>
    </div>
  );
};

export default Home;
