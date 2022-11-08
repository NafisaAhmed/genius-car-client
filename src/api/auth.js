export const setAuthToken = (user) => {
    const currentUSer = {
        email: user.email
    }
    fetch('https://genius-car-server-swart.vercel.app/jwt', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(currentUSer)
    })
        .then(res => res.json())
        .then(data => {
            console.log('data:', data);
            //local storage is easiest but not the best place to store jwt token
            localStorage.setItem('genius-token', data.token);
        });
}