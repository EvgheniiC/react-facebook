import React from "react";
import { connect } from "react-redux"
import { follow, setCurrentPage, setUsers, setTotalUsersCount, toggleIsFetching, unfollow ,toggleFolowingProgress} from "../../redux/usersReducer";
import * as axios from "axios"
import Users from "./Users"
import Preloader from "../comman/Preloader/Preloader";
import { getUsers, usersAPI } from "../../api/api";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items)
            this.props.setTotalUsersCount(data.totalCount)
        })
    }

    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items)
        })
    }

    render() {
        return <>
        {  this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCounts={this.props.totalUsersCounts}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                users={this.props.users}
                toggleFolowingProgress={this.props.toggleFolowingProgress}
                folowingInProgress={this.props.isFolowingInProgress}
                />
        </>

    }

}
let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCounts: state.usersPage.totalUsersCounts,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        isFolowingInProgress: state.usersPage.isFolowingInProgress,
    }
}
// alternativa
// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowAC(userId))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setUsersTotalCountAC(totalCount))
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         }

//     }
// }

//alternativa
// export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);

export default connect(mapStateToProps,
     {  follow,unfollow,setUsers,setCurrentPage,setTotalUsersCount,toggleIsFetching,toggleFolowingProgress})(UsersContainer);