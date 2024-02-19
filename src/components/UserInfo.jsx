import React from "react";

const UserInfo = ({user}) => {
    return (
        <div>
            {user && (
               <>
                 <img src={user.avatar_url} alt="" />
                 <h2>{user.name}</h2>
                 <p>{user.login}</p>
                <p>{user.created_at}</p>
                <p>{user.bio ? user.bio : "This profile has no bio"}</p>
                <p>{user.public_repos}</p>
                <p>{user.followers}</p>
                <p>{user.following}</p>
                <p>{user.location}</p>
                {user.twitter && <p>{user.twitter}</p>}
                {user.blog && <p>{user.blog}</p>}
                <p>{user.hireable ? "Hireable" : "Not Hireable"}</p>
                <p>{user.company}</p>
               </>
            )}
        </div>
    )
}

  export default UserInfo;