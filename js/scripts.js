
var elToDoForm = document.querySelector(`.todolist-form`);
var idBox = [];
var elementList = [];

if (elToDoForm) {
  var elInput = elToDoForm.querySelector(`.todo-element-input`);
  var elCheckbox = elToDoForm.querySelector(`.todo-checkbox`);
  var elList = document.querySelector(`.list`);

  var elAlert = document.querySelector(`.alert-text`);
};

var counter = 0;


elToDoForm.addEventListener(`submit`, function(evt){
  counter++
  evt.preventDefault();

  elList.classList.add(`box`);

  if (elementList.includes(elInput.value)) {

    elAlert.textContent = `Bu element ro'yhatda bor!`;

    return;
  } else {
    elAlert.textContent = ``;
  }

  if (elCheckbox.checked === true) {

    elementList.unshift({
      title: elInput.value,
      id: counter,
      isBosilgan: false
    });
    idBox.unshift(counter);
  } else {

    elementList.push({
      title: elInput.value,
      id: counter,
      isBosilgan: false
    });

    idBox.push(counter);
  }


 elList.innerHTML = ``;
  for(var result of elementList) {
    var elItem = document.createElement(`li`);
    elItem.classList.add(`elItem-class`)
    var elItemInput = document.createElement(`input`);
    elItemInput.type = `checkbox`;
    elItemInput.classList.add(`input-check`);
    var elItemSpan = document.createElement(`span`);
    elItemSpan.classList.add(`item-span`);
    var elItemCircleSpan = document.createElement(`span`);
    elItemCircleSpan.classList.add(`circle-span`);

    elItemInput.dataset.id = result.id;

    elItemSpan.textContent = result.title;
    elItemInput.checked = result.isBosilgan;

    elItem.appendChild(elItemInput);
    elItem.appendChild(elItemCircleSpan);
    elItem.appendChild(elItemSpan);
    elList.appendChild(elItem);


    elItemInput.addEventListener(`change`, function () {
      // this.dataset.id
      console.log(this.dataset.id);
      var changed = Number(this.dataset.id);
      var changedIndex = idBox.indexOf(changed);
      var changedItem = elementList[changedIndex];
      console.log(changedItem);
      changedItem.isBosilgan = !changedItem.isBosilgan;
      elementList.splice(changedIndex, 1, changedItem);
    });
  }

  elInput.value = ``;
  elCheckbox.checked = false;
  elInput.focus();

});
