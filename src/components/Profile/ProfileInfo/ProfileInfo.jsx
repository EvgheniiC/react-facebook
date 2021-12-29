import React from "react";
import Preloader from "../../comman/Preloader/Preloader";
import classes from './ProfileInfo.module.css'


const ProfileInfo = (props) => {

    let userId = props.match.params.userId;

    function findArrayElementById(array, id) {
      if (!id){
        id = 21242
      }
        return array.find((element) => {
          return element.id == id;
        })
      }
    
    if(!props.profile){
        return <Preloader/>
    }

    return  <div>
                <img src = "https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"/>
                <div className = {classes.descriptionBlock}>
                    <img src={findArrayElementById(props.profile.items,userId).photos.small} height={150} />
                    <div> {findArrayElementById(props.profile.items,userId).status}</div>
                </div>
            </div>
}

export default ProfileInfo;