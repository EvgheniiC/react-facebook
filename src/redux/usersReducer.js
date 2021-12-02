const FOLLOW = 'ADD-FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SETUSERS = 'SETUSERS'

let initialState = {
  users : [
    // {id: 1, followed : false, fullName: "Evghenii", status : "I am hier", location :{city : 'Bremen', country: 'DE'}},
    // {id: 2, followed : true, fullName: "Alex", status : "I am hier", location :{city : 'Moskow', country: 'RU'}},
    // {id: 3, followed : false, fullName: "Vladimir", status : "I am hier", location :{city : 'Tiraspol', country: 'MD'}},
    // {id: 4, followed : false, fullName: "Martin", status : "I am hier", location :{city : 'Rostock', country: 'DE'}}
  ]};

const usersReducer = (state = initialState,action) => {

      switch(action.type){
        case FOLLOW: 
        // copy from user with changed followed
        return { 
          ...state,
          users: state.users.map( u => {
            if (u.id === action.userId){
              return{...u, followed: true}
            }
            return u
          })
        
        }

        case UNFOLLOW:
          return { 
            ...state,
            users: state.users.map( u => {
              if (u.id === action.userId){
                return{...u, followed: false}
              }
              return u
            })
          
        }
        case SETUSERS:
          return { ...state, users:[...state.users, ...action.users] }
        default: return state

      }
    
}

export const followAC = (userId) =>({
  type : FOLLOW, userId
})
export const unfollowAC = (userId) =>({
  type : UNFOLLOW, userId
})
export const setUsersAC = (users) =>({
  type : SETUSERS, users
})

export default usersReducer;