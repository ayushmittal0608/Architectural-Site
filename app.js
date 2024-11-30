const mainMenu = document.querySelector( '.main-head' );
window.addEventListener( 'scroll', ()=> {
    if( this.scrollY > 100 ){
        mainMenu.classList.add( 'slidedown' );
    }else{
        mainMenu.classList.remove( 'slidedown' );
    }
} );
document.getElementById('arrow1').addEventListener('click', function() {
    document.getElementById('footer').scrollIntoView({
        behavior: 'smooth'
    });
});
document.getElementById('arrow2').addEventListener('click', function() {
    document.getElementById('showcase').scrollIntoView({
        behavior: 'smooth'
    });
});
