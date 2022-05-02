import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import classes from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {

    if(!props.profile){
        return <Preloader/>
    }

    return  <div>
                <div className = {classes.descriptionBlock}>
                    <img src={props.profile.photos.large}/>
                    <ProfileStatus status = {"Hei "}/>
                    <div>
                        <p> {props.profile.fullName} </p>
                        <p> {props.profile.aboutMe} </p>
                    </div>
                </div>
            </div>
}

export default ProfileInfo;