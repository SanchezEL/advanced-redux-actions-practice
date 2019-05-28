import { connect } from 'react-redux'
import Users from '../components/Users'
import SearchTextBox from '../components/SearchTextBox';

function mapStateToProps(state){
  return {
    users: state.users,
    firstNameFilter: state.searchText,
    sortOn: state.currentUser
  }
}

export default connect(mapStateToProps, null)(Users);
