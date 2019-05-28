import { connect } from 'react-redux';
import {setIsLoading} from "../actions";
import ShowModal from "../components/ShowModal";

const mapDispatchToProps = (dispatch) => {
  return {
    set: (isLoading) => dispatch(setIsLoading(isLoading))
  }
}

export default connect(null, mapDispatchToProps)(ShowModal);
