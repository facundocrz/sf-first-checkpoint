const usersURL = "https://jsonplaceholder.typicode.com/users"

const getUsers = async (URL) => {
    try{
        const res = await fetch(URL) 
        return  res.json()
        
    }catch(err){
        console.log(err)
    }
}

const addUsers = async (data) => {
    const table = document.querySelector("#bodyTable")
    const usersData = (await data).map(user => {
        return `<tr>
                    <td>${user.name}</td>
                    <td>${user.id}</td>
                    <td>${user.phone}</td>
                    <td>${user.address.city}</td>
                    <td>${user.company.name}</td>
                </tr>`
    }).join("")
    table.innerHTML = usersData
}


addUsers(getUsers(usersURL))