const init = () => {
  
}

const formData = {
    Name: "lucas",
    Email: "farmwaldlucas@gmail.com",
  };




const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(formData),
  };


 async function submitData(){
     const response = await fetch("http://localhost:3000/users", configurationObject);
     const object = response.JSON;
}
document.addEventListener('DOMContentLoaded', init);