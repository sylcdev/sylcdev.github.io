import React from 'react';
import Avatar from 'react-avatar';

interface ICustomAvatarProps{
    name: string;
    src?: string;
}

function CustomAvatar(props: ICustomAvatarProps){
    return <Avatar name={props.name} src={props.src} size="250" round/>
}

export default CustomAvatar;