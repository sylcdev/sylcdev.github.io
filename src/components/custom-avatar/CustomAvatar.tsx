import React from 'react';
import Avatar from 'react-avatar';

interface ICustomAvatarProps{
    name: string;
    src?: string;
    initials?: string;
}

function CustomAvatar(props: ICustomAvatarProps){
    return <Avatar initials={props.initials} name={props.name} src={props.src} size={"250"} round className='Custom-Avatar'/>
}

export default CustomAvatar;