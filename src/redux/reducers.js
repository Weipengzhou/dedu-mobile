const initialState ={

}

const reducers = (state=initialState,action) =>{
  switch(action.type){
    case 'DATA_INFORMATION':
    return Object.assign({},state,{

    });
    default:
    return state;
  }
}

export default reducers;
