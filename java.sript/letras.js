carrusel();

let c=0;

function carrusel()
{
    document.getElementById("imgcab").style.opacity="0";
    document.getElementById("imgcab").style.transition="all 1s";
    setTimeout("cambio()",1000);
}

function cambio()
{
    c++;
    if(c>5) {c=1;}
    document.getElementById("imgcab").setAttribute("src","img/ban"+c+".jpg");
    document.getElementById("imgcab").style.opacity="1";
    document.getElementById("imgcab").style.transition="all 1s";
    setTimeout("carrusel()",1000);

}

/*document.body.setAttribute("onload","cambiarcolor();fecha();hora()")*/
