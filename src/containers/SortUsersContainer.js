import { connect } from 'react-redux';
import {setCurrentUserSort} from "../actions";
import SortUsers from "../components/SortUsers";

const mapDispatchToProps = (dispatch) => {
  return {
    set: (sort) => dispatch(setCurrentUserSort(sort))
  }
}

export default connect(null, mapDispatchToProps)(SortUsers);
