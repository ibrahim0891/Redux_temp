import { useReducer } from "react";



const Counter = ({count , counter , dispatch}) => { 
    return (
        <>
            <h1 className="text-4xl text-center font-semibold text-gray-800 mb-6"> Counter: {count} </h1>
            <div className="space-x-4 flex items-center justify-center">
                <button 
                    className="px-6 py-2 rounded-full bg-blue-500 text-white font-medium shadow-md hover:bg-blue-600 active:bg-blue-700 transition-colors"
                    onClick={() => dispatch({ type: 'inc' , counterName : counter  })}
                > + </button>
                <button 
                    className="px-6 py-2 rounded-full bg-blue-500 text-white font-medium shadow-md hover:bg-blue-600 active:bg-blue-700 transition-colors"
                    onClick={() => dispatch({ type: 'dec' , counterName : counter })}
                > - </button>
                <button 
                    className="px-6 py-2 rounded-full bg-gray-500 text-white font-medium shadow-md hover:bg-gray-600 active:bg-gray-700 transition-colors"
                    onClick={() => dispatch({ type: 'reset'  , counterName : counter})}
                > Reset </button>
            </div>
        </>    )
}

export default Counter; 