import React from "react";
import { connect } from "react-redux";
import { follow, setCurrentPage, requestUsers, unfollow,toggleFollowingProgress } from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import { getPageSize, getTotalUsersCount, getIsFetching, getCurrentPage, getFollowingInProgress, getUsers, getUsersSuperSelector} from "../../redux/usersSelectors"

class UsersContainer extends React.Component {

  componentDidMount() {
    const {currentPage, pageSize} = this.props;
    this.props.getUsers(currentPage, pageSize);
  }

  onPageRender = (pageNumber) => {
    const {pageSize} = this.props;
    this.props.getUsers(pageNumber, pageSize);
  }
 
  render() {
    return <>
      {this.props.isFetching ?
        <Preloader/>
        : null}
      <Users
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageRender={this.onPageRender}
        users={this.props.users}
        unfollow={this.props.unfollow}
        follow={this.props.follow}
        toggleFollowingProgress={this.props.toggleFollowingProgress}
        followingInProgress={this.props.followingInProgress}
      />
    </>
  }

}
// without selector
// let mapStateToProps = (state) => {
//   return {
//     users: state.usersPage.users,
//     pageSize: state.usersPage.pageSize,
//     totalUsersCount: state.usersPage.totalUsersCount,
//     currentPage: state.usersPage.currentPage,
//     isFetching: state.usersPage.isFetching,
//     followingInProgress: state.usersPage.followingInProgress
//   }
// }
let mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    //users: getUsersSuperSelector(state), // was for exam
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state)
  }
}
// alternativa
// let mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (userId) => {
//       dispatch(followAC(userId))
//     },
//     unfollow: (userId) => {
//       dispatch(unfollowAC(userId))
//     },
//     setUsers: (users) => {
//       dispatch(setUsersAC(users))
//     },
//     setCurrentPage: (pageNumber) => {
//       dispatch(setCurrentPageAC(pageNumber))
//     },
//     setTotalUsersCount: (totalCount) => {
//       dispatch(setTotalUsersCount(totalCount))
//     },
//     toggleIsFetching: (isFetching) => {
//       dispatch(toggleIsFetchingAC(isFetching))
//     }
//   }
// }

//alternativa
//export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);


export default compose(connect(mapStateToProps, { 
    follow,unfollow,setCurrentPage,
    toggleFollowingProgress, getUsers: requestUsers })
    )(UsersContainer)