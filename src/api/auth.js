export const saveUser = user => {
    const currentUser = {
        email: user.email, name: user.displayName, photo: user.photoURL
    }
    fetch(`https://fluency-xpress-server.vercel.app/users/${user?.email}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(currentUser)
    })
        .then(res => res.json())
        .then(data => console.log(data))
}

// Get role
export const getRole = async email => {
    const response = await fetch(`https://fluency-xpress-server.vercel.app/users/${email}`)
    const user = await response.json()
    return user?.role
}

