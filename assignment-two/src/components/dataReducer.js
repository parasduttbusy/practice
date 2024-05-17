import data from "../data";
import { defaultDataVal } from "../data";

function dataReducer(state, action) {

    switch (action.type) {
        case "added":
            return [...state,{...defaultDataVal, ...action.addedData}];
    
        case 'changed':
            let index;
            state.forEach((element,ind) => {
                if(action.companyId === element.companyId) index = ind;
            });
            state[index][action.change.feild] = action.change.changed

            return state;
    
        case 'deleted':
            return state.filter((val)=>{
                return val.companyId !== action.companyId
            })

        default:
            console.log("default");
            return;
    }

    console.log(state);
}

export default dataReducer