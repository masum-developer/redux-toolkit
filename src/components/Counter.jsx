
import { useDispatch, useSelector } from 'react-redux';

import {increment,decrement} from '../redux/features/counter/counterSlice'

const Counter = () => {
    //const count = useSelector((state)=>state.counter.count)
    const {count} = useSelector((state)=>state.counter)
    console.log(count)
    const dispatch = useDispatch()
    return (
        <div>
            <button onClick={()=>dispatch(increment())} className='btn bg-slate-600'>Increment</button>
            <div>
                <h1>{count}</h1>
            </div>
            <button onClick={()=>dispatch(decrement())}>Decrement</button>
        </div>
    );
};

export default Counter;