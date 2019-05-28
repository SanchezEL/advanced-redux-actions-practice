import { connect } from 'react-redux';
import {setSearchText} from "../actions";
import SerchTextBox from "../components/SearchTextBox";
import SearchTextBox from '../components/SearchTextBox';

const mapDispatchToProps = (dispatch) => {
  return {
    set: (txt) => dispatch(setSearchText(txt))
  }
}

export default connect(null, mapDispatchToProps)(SearchTextBox);
