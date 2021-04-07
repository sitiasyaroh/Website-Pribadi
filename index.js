//Async
const getDataGithub = async () => {
  const url = "https://api.github.com/users/sitiasyaroh";
  const option = {
  method: "GET",
  };
  try {
      let response = await fetch(url, option);
      response = await response.json();
      console.log(response);
      let displayUsername = `<h1>${response.login}</h1>`;
      const container1 = document.querySelector(".container1");
      container1.innerHTML = displayUsername;
  } catch (error) {
      console.log(error);
  }    
};

getDataGithub();  