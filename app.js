const button = document.getElementById("button");
const movieContent = document.getElementById("moviecontent");
const movie = document.getElementById("movie");

button.onclick = () =>
{
    axios.get("https://freetestapi.com/api/v1/movies/1")
    .then(function(response)
{
    button.textContent= "Recommend";

})
    .catch(function(error)
{
     console.log(error)
})
};


