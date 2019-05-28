import { connect } from 'react-redux';
import {increaseCounter} from "../actions";
import {decreaseCounter} from "../actions";
import CounterButton from "../components/CounterButton";

const mapDispatchToProps = (dispatch) => {
  return {
    increase: (num) => dispatch(increaseCounter(num)),
    decrease: (num) => dispatch(decreaseCounter(num))
  }
}

export default connect(null, mapDispatchToProps)(CounterButton);
