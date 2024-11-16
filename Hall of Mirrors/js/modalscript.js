let preveiwContainer = document.querySelector('.card-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');


//for loop, iiterating through each portfolio card
document.querySelectorAll('.card-container .card').forEach(card =>{
  card.onclick = () =>{
    preveiwContainer.style.display = 'flex';
    //initializing name as data-name attribute
    let name = card.getAttribute('data-name');
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      // conditional for adding active to class of preview.
      if(name == target){
        preview.classList.add('active');
      }
    });
  };
});
//remove active class iif user clicks close button.
previewBox.forEach(close =>{
  close.querySelector('.close').onclick = () =>{
    close.classList.remove('active');
    preveiwContainer.style.display = 'none';
  };
});