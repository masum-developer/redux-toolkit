import React from 'react';
import Counter from '../components/Counter';

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <h1 className="text-3xl font-bold underline text-red-600">
      Hello Redux
    </h1>
    <Counter/>
        </div>
    );
};

export default Home;