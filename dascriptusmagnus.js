let darkmode = false;

function toggleDarkMode()
{
    darkmode = !darkmode;
    if(darkmode)
        document.getElementById('pagestyle').setAttribute('href',"dark.css");
    else
        document.getElementById('pagestyle').setAttribute('href',"style.css");
}