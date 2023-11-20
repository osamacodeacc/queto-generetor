const api_url ="https://api.quotable.io/random"
const quote = document.getElementById("quote")
const author = document.getElementById("author")

async function generatecode(url){
    const response = await fetch(url)
    var date= await response.json()

    quote.innerHTML = date.content
    author.innerHTML = date.author
}
generatecode(api_url)

function tweet(){
    window.open(
        "https://twitter.com/intent/tweet?text=" +
            quote.innerHTML +
            "--by"  +
            author.innerHTML
    )
}
