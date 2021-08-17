import React, { useEffect } from 'react'

function logout() {
    useEffect(()=>{
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        window.location.href="/login";
    },[])
    return (
        <div>
            <p>Logging out</p>
        </div>
    )
}

export default logout;
