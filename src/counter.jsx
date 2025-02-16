import { useReducer } from "react";


const reducer = (state, action) => {

    switch (action.type) {
        case 'inc':
            return { count: state.count + 1 }
        case 'dec':
            return { count: state.count - 1 }
        case 'reset':
            return { count: 0 }
        default:
            return state;
    }

}

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 })
    return (
        <>
            <h1 className="text-4xl text-center font-semibold text-gray-800 mb-6"> Counter: {state.count} </h1>
            <div className="space-x-4 flex items-center justify-center">
                <button 
                    className="px-6 py-2 rounded-full bg-blue-500 text-white font-medium shadow-md hover:bg-blue-600 active:bg-blue-700 transition-colors"
                    onClick={() => dispatch({ type: 'inc' })}
                > + </button>
                <button 
                    className="px-6 py-2 rounded-full bg-blue-500 text-white font-medium shadow-md hover:bg-blue-600 active:bg-blue-700 transition-colors"
                    onClick={() => dispatch({ type: 'dec' })}
                > - </button>
                <button 
                    className="px-6 py-2 rounded-full bg-gray-500 text-white font-medium shadow-md hover:bg-gray-600 active:bg-gray-700 transition-colors"
                    onClick={() => dispatch({ type: 'reset' })}
                > Reset </button>
            </div>
        </>    )
}

export default Counter; 