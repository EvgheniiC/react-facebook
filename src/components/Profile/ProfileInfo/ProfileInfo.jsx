import React from "react";
import Preloader from "../../comman/Preloader/Preloader";
import classes from './ProfileInfo.module.css'


const ProfileInfo = (props) => {

    if(!props.profile){
        return <Preloader/>
    }
    debugger;

    return  <div>
                <img src = "https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"/>
                <div className = {classes.descriptionBlock}>
                    <img src={props.profile.items[0].photos.large} height={150} />
                    <div> {props.profile.items[0].status}</div>
                </div>

            </div>


  

}

export default ProfileInfo;