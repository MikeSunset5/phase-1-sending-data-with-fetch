
    const userData ={
        name: "Steve",
        email: "Steve@steve.com",
    };

    const conFigUser = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify(userData),
    };

    fetch("http://localhost:3000/users", conFigUser)
     .then(function (resp) {
         return resp.json();
     })
     .then(function (object) {
         console.log(object);
     })
     .catch(function (error) {
         alert("Something went wrong!");
     });