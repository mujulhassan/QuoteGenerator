const quote = document.querySelector("#quote");
const author = document.querySelector("#author");
const btn = document.querySelector("#btn");

//When the button is clicked, an anonymouse async function is called
btn.addEventListener("click", async function(){
    //"try" is used to wrap the code that may throw an exception/error
    try {
        //uses await to wait for the promise returned by the fetch() function to resolve.
        const res = await fetch("http://api.quotable.io/random");
        //uses await to wait for the promise returned by the json method to resolve. value is then assigned to the variable data.
        const data = await res.json();
        quote.innerHTML = `"${data.content}"`;
        author.innerHTML = `"${data.author}"`;
    } catch(err) {
        console.log(err);
    }
});