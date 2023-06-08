var darkmode = "VILÁGOS";
darkmode = localStorage.getItem("darkus");
if(localStorage.getItem("darkus") != null)
{
    console.log("im fucked");
    console.log(localStorage.getItem("darkus"));
    
    darkify();
}
    

function toggleDarkMode()
{
    if(darkmode != "SÖTÉT")
        darkmode = "SÖTÉT";
    else
        darkmode = "VILÁGOS"
    
    darkify();

    localStorage.setItem("darkus",darkmode);
    //$.cookies.set("darkus", darkmode);
    console.log(localStorage.getItem("darkus"));
}

function darkify()
{
    //console.log(localStorage.getItem("darkus"));
    console.log(darkmode);
    if(darkmode == "SÖTÉT")
    {
        document.getElementById('pagestyle').setAttribute('href',"dark.css");
        console.log("dark");
    }
    else
    {
        document.getElementById('pagestyle').setAttribute('href',"style.css");
        console.log("white");
    }
}