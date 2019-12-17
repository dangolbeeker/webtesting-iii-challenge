export const UNLOCK_GATE = "UNLOCK_GATE";
export const LOCK_GATE = "LOCK_GATE";
export const LOCK_GATE_SUCCESS = "LOCK_GATE_SUCCESS";
export const UNLOCK_GATE_FAILURE = "UNLOCK_GATE_FAILURE";
export const LOCK_GATE_FAILURE = "LOCK_GATE_FAILURE";
export const UNLOCK_GATE_SUCCESS = "UNLOCK_GATE_SUCCESS";
export const CLOSE_GATE = "CLOSE_GATE";
export const CLOSE_GATE_SUCCESS = "CLOSE_GATE_SUCCESS";
export const CLOSE_GATE_FAILURE = "CLOSE_GATE_FAILURE";


export const uGate = () => dispatch => {
    dispatch({ type:UNLOCK_GATE})
    .then(res => {
        console.log(res);
        dispatch({ type: UNLOCK_GATE_SUCCESS, payload: res.data })
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: UNLOCK_GATE_FAILURE, payload: err.message})
      })
    }


    export const lGate  = () => dispatch => {
        dispatch({ type:LOCK_GATE})
        .then(res => {
            console.log(res);
            dispatch({ type: LOCK_GATE_SUCCESS, payload: res.data })
          })
          .catch(err => {
            console.log(err);
            dispatch({ type: LOCK_GATE_FAILURE, payload: err.message})
          })
        }

        export const cGate  = () => dispatch => {
            dispatch({ type:CLOSE_GATE})
            .then(res => {
                console.log(res);
                dispatch({ type: CLOSE_GATE_SUCCESS, payload: res.data })
              })
              .catch(err => {
                console.log(err);
                dispatch({ type: CLOSE_GATE_FAILURE, payload: err.message})
              })
            }