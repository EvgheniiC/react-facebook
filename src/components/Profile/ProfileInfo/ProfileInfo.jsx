import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import classes from './ProfileInfo.module.css'


const ProfileInfo = (props) => {

    if(!props.profile){
        return <Preloader/>
    }

    return  <div>
                <img src = "https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"/>
                <div className = {classes.descriptionBlock}>
                    <img src={props.profile.photos.large}/>
                    <div>
                        <p> {props.profile.fullName} </p>
                        <p> {props.profile.aboutMe} </p>
                    </div>
                     
                </div>

            </div>


  

}

export default ProfileInfo;