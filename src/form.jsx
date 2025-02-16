import { useReducer } from "react"


const reducer = (state, action) => {
    const actionType = action.type;
    switch (actionType) {
        case 'update':
            return {
                ...state,
                [action.field]: action.value
            }
        case 'reset':
            return action.initialValue;
        default:
            return action.initialValue;
    }

}




const Form = () => {
    const initialValue = {
        name: '',
        roll: ''
    }
    const [state, dispatch] = useReducer(reducer, initialValue)
    return (
        <>
            <h1 style={{ color: '#2c3e50', textAlign: 'center', margin: '20px 0' }}> 
                Hello {state.name} , Your roll is: {state.roll}
            </h1>
            <hr style={{ border: '1px solid #ecf0f1', margin: '20px 0' }}></hr>
            <h2 style={{ color: '#34495e', marginBottom: '10px' }}> Name </h2>
            <input
                type="text"
                value={state.name}
                onChange={
                    (e) => dispatch({ type: 'update', field: 'name', value: e.target.value })
                }
                style={{
                    padding: '10px',
                    fontSize: '16px',
                    width: '100%',
                    marginBottom: '20px',
                    border: '2px solid #3498db',
                    borderRadius: '5px'
                }}
            />
            <h2 style={{ color: '#34495e', marginBottom: '10px' }}> Roll </h2>
            <input
                type="number"
                value={state.roll}
                onChange={
                    (e) => dispatch({ type: 'update', field: 'roll', value: e.target.value })
                }
                style={{
                    padding: '10px',
                    fontSize: '16px',
                    width: '100%',
                    marginBottom: '20px',
                    border: '2px solid #3498db',
                    borderRadius: '5px'
                }}
            />
            <button 
                onClick={
                    () => dispatch({ type: 'reset', initialValue })
                }
                style={{
                    padding: '10px 20px',
                    fontSize: '16px',
                    backgroundColor: '#e74c3c',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s',
                    ':hover': {
                        backgroundColor: '#c0392b'
                    }
                }}
            >
                Reset
            </button>
        </>
    )
}

export default Form; 