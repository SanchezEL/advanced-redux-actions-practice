import { connect } from 'react-redux';
import {setVideoURL} from "../actions";
import VideoTextBox from "../components/VideoTextBox";

const mapDispatchToProps = (dispatch) => {
  return {
    set: (url) => dispatch(setVideoURL(url))
  }
}

export default connect(null, mapDispatchToProps)(VideoTextBox);
