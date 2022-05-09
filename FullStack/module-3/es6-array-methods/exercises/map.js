const newUsers = users.map(user => {return {email:user.email, companyName:user.company.name}})
console.log(newUsers);