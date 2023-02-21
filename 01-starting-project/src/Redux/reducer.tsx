import { combineReducers } from "redux";
import slice from "./Slice/authSlice";
import dataSlice from "./Slice/dataSlice";
// import RFQDeatilsSlice from "./slice/rfq.details.slice"

const rootReducer = combineReducers({
  user: slice,
  data: dataSlice,
});

export default rootReducer;
