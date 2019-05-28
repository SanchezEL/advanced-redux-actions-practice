import { connect } from 'react-redux';
import {setCurrentCity} from "../actions";
import CityDropDown from "../components/CityDropDown";

const mapDispatchToProps = (dispatch) => {
  return {
    set: (txt) => dispatch(setCurrentCity(txt))
  }
}

export default connect(null, mapDispatchToProps)(CityDropDown);
