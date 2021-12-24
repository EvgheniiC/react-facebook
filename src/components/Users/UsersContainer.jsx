import React from "react";
import {connect} from "react-redux"
import { followAC, setCurrentPageAC, setUsersAC, setUsersTotalCountAC, unfollowAC } from "../../redux/usersReducer";
import * as axios from "axios"
import Users from "./Users"

class UsersContainer extends React.Component {

    componentDidMount() {
      axios.get(`http://localhost:3004/users?_page=${this.props.currentPage}&_limit=${this.props.pageSize}`).then(response => {
        this.props.setUsers(response.data.items)
        this.props.setTotalUsersCount(response.data.totalCount)
      })
    }
  
    onPageChanged = (pageNumber) => {
      this.props.setCurrentPage(pageNumber);
      axios.get(`http://localhost:3004/users?_page=${pageNumber}&_limit=${this.props.pageSize}`).then(response => {
        this.props.setUsers(response.data.items)
      })
    }
  
    render() {
      return <Users totalUsersCounts = {this.props.totalUsersCounts}
                    pageSize = {this.props.pageSize}
                    currentPage = {this.props.currentPage}
                    onPageChanged = {this.onPageChanged}
                    unfollow = {this.props.unfollow}
                    follow = {this.props.follow}
                    users = {this.props.users} />
    }
  
  }
let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCounts: state.usersPage.totalUsersCounts,
        currentPage: state.usersPage.currentPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow:(userId) => {
            dispatch(followAC(userId))
        },
        unfollow:(userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers:(users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage:(pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount:(totalCount) => {
            dispatch(setUsersTotalCountAC(totalCount))
        }
       
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);