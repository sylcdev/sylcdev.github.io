import React from 'react';
import Avatar from 'react-avatar';

interface IGithubAvatarProps{
    username: string,
}

function GithubAvatar(props: IGithubAvatarProps){

    const open = () => {
        window.open(`https://github.com/${props.username}`);
    };

    return (<div style={{position:"relative", cursor:"pointer"}}>
                <Avatar src={`https://avatars.githubusercontent.com/${props.username}`} size={"250"} round className='Custom-Avatar' onClick={open}/>
                <div style={{position:"absolute", bottom:12, right:22}}>
                    <Avatar color="white" size={"60"} round className='Custom-Avatar'/>
                </div>
                <div style={{position:"absolute", bottom:10, right:20}}>
                    <Avatar color="white" src={require("../../assets/GithubMark.png")} size={"64"} round className='Custom-Avatar'/>
                </div>
            </div>
            );
}

export default GithubAvatar;