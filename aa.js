document.getElementById("submit").addEventListener("click", function() {
    let a = document.getElementById('search').value;
    var googleSearchURL = "https://www.google.com/search?q=" + encodeURIComponent(a);
    window.open(googleSearchURL, "_self");
    document.getElementById("search").value = null;
    
});

function branco(color){
    if(color === 1){
        document.getElementsByTagName("body")[0].style.backgroundColor = "white";
        document.getElementsByTagName("h1")[0].style.color = "black";
        color = 1;
        }
        else if (color === 1){
            document.getElementsByTagName("body")[0].style.backgroundColor = "black";
            document.getElementsByTagName("h1")[0].style.color = "white";
            color = 1;
        }
        else{
            document.getElementsByTagName("body")[0].style.backgroundColor = "white";
            document.getElementsByTagName("h1")[0].style.color = "black";
            color = 1;
            }
        
}

function dark(color){
    if(color === 0){
    document.getElementsByTagName("body")[0].style.backgroundColor = "black";
    document.getElementsByTagName("h1")[0].style.color = "white";
    color = 1;
    }
    else if (color === 1){
        document.getElementsByTagName("body")[0].style.backgroundColor = "white";
        document.getElementsByTagName("h1")[0].style.color = "black";
        color = 1;
    }
    else{
        document.getElementsByTagName("body")[0].style.backgroundColor = "black";
        document.getElementsByTagName("h1")[0].style.color = "white";
        color = 1;
        }
    
}
