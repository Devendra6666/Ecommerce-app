const productReducer = (state,action) => {
    switch (action.type) {
        case "SET_LOADING":
            return{
                ...state,
                isLoading : true
            }
        case "SET_API_DATA":
            const featuredata = action.payload.filter((curele) => {
                return curele.featured===true;
            })
            // console.log(featuredata)
            return{
                ...state,
                isLoading : false,
               products : action.payload,
               featureProducts : featuredata,
            }  ;
        case "API_ERROR":
            return{
                ...state,
                isError : true,
                isLoading : false
            }
        case "SET_SINGLE_LOADING":
            return{
                ...state,
                isSingleLoading : true
            }
        case "SET_SINGLE_DATA":
            return{
                ...state,
                isSingleLoading: false,
                singleProduct : action.payload
            }
        case "SINGLE_API_DATA_ERROR":
            return{
                ...state,
                isError : true,
                isSingleLoading : false
            }
    
        default:
           return state;
    }
  return state;
}
export default productReducer;