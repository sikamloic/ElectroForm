const open = document.getElementById('open');
const modal = document.getElementsByClassName('contain');
const close = document.getElementById('close');
const openModal = function(){
    modal.classList.add('show');
};
open.addEventListener('click', openModal);
close.addEventListener('click', () =>{
    console.log(55855);
});