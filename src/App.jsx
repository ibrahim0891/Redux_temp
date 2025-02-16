import { act, useReducer } from "react";
import Counter from "./counter";
import Form from "./form";

const reducer = (state, action) => {
    switch (action.type) {
        case 'showCounter':
            return {
                ...state,
                component: 'counter'
            }
        case 'showForm':
            return {
                ...state,
                component: 'form'
            }
        case 'toggleElement':
            return {
                dualButton: false,
                component: state.component === 'counter' ? 'form' : 'counter'
            }
        case "toggleUI":
            return {
                ...state,
                dualButton: state.dualButton ? false : true
            }

        default:
            return state;
    }
}

const DualButton = (props) => {
    return (
        <div className="grid grid-cols-2 gap-4 max-w-md mx-auto p-4">
            <button 
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
                onClick={() => {
                    return props.action({ type: 'showCounter' })
                }}>
                Show counter
            </button>
            <button 
                className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
                onClick={() => {
                    return props.action({ type: 'showForm' })
                }}>
                Show form
            </button>
        </div>
    )
}

const Toggler = ({ action }) => {
    return (
        <button 
            className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 mx-auto block my-4"
            onClick={() => action({ type: 'toggleElement' })}> 
            Toggle 
        </button>
    )
}

function App() {
    const initialView = {
        dualButton: false,
        component: 'counter'
    }
    const [toggleComponent, dispatch] = useReducer(reducer, initialView)
    console.log(toggleComponent);
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-8">
            <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-6 space-y-6">
                
                <div className="bg-white rounded-lg p-4 shadow-sm">
                    {toggleComponent.component == 'counter' ? <Counter /> : <Form />}
                </div>

                {toggleComponent.dualButton ?
                    <DualButton action={dispatch}></DualButton> :
                    <Toggler action={dispatch}> </Toggler>
                }

                <div className="flex flex-col mt-12 justify-center items-center mt-6">
                    <p>Dual button mode: </p>
                    <div className="relative w-14 h-8 bg-gray-300 rounded-full cursor-pointer shadow-inner"
                        onClick={() => dispatch({ type: 'toggleUI' })}
                    >
                        <div className={`absolute w-8 h-8 bg-white rounded-full shadow-lg transform transition-transform duration-300 ease-in-out ${toggleComponent.dualButton ? 'translate-x-6 bg-red-500 shadow-md' : 'translate-x-0 bg-gray-300'}`}></div>
                        <div className={`hidden absolute w-full h-full flex items-center justify-center text-xs font-bold ${toggleComponent.dualButton ? 'text-white' : 'text-gray-500'}`}>
                            {toggleComponent.dualButton ? 'ON' : 'OFF'}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default App
