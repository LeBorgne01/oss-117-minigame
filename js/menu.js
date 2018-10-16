var btnMenu = document.getElementById('btn-menu');

btnMenu.onclick = () => {
    menuBox = document.querySelector('.nav-box');

    if( menuBox.style.display === 'block' ){
        menuBox.style.display = 'none';
    }
    else{
        menuBox.style.display = 'block';
    }
}
