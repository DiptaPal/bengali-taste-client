export const  setAuthToken = (user) =>{
    const currentUser = {
        email: user.email
    }
    //get jwt token
    fetch('https://bengali-taste-server.vercel.app/jwt', {
        method: 'POST',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(currentUser)
    })
    .then(res => res.json())
    .then(data => {
        //local storage is the easiest but not the best place to store jwt token
        localStorage.setItem('bengali-taste',data.token)
    })
}