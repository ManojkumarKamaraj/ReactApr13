export default function ReducerAction(state,action){
            // dispatch type
            console.log(action.type);
            console.log(state);
            if(state>0 && action.type==='SUB'){
                switch (action.type) {
                   
                    case 'SUB':{
                        return state - action.payload;
                    }
                    
                }
            }
            else{
                switch (action.type) {
                    case 'ADD':{
                        return state + action.payload
                    }
                    case 'RESET':{
            
                        return state - state;
                    }
                
                    default:
                        
                        return state
                        
                }
            }
    

}