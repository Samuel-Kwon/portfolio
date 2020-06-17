function DisplayPopUpScreen1()
{
    document.getElementById("overlay").style.display = 'block';
    document.getElementById("popUpScreen1").style.display = 'block';
}

function DisplayPopUpScreen2()
{
    document.getElementById("overlay").style.display = 'block';
    document.getElementById("popUpScreen2").style.display = 'block';
}

function DisplayPopUpScreen3()
{
    document.getElementById("overlay").style.display = 'block';
    document.getElementById("popUpScreen3").style.display = 'block';
}

function ClosePopUpScreen()
{
    document.getElementById("popUpScreen1").style.display = 'none';
    document.getElementById("popUpScreen2").style.display = 'none';
    document.getElementById("popUpScreen3").style.display = 'none';
    
    document.getElementById("popUpScreen-video").pause();
    document.getElementById("popUpScreen-video").currentTime = 0;

    document.getElementById("overlay").style.display = 'none';

}