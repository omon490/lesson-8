
var elementList = [];
var idBox = [];


var elToDoForm = document.querySelector(`.todolist-form`);
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

// var $_ = function (selector) { //shu qavsning ichiga parametr berdim, u parametrning o'rniga istalgan selectorni yozish mumkin
//   return document.querySelector(`${selector}`);
// }

// var $$_ = function (selectors) { //shu qavsning ichiga parametr berdim, u parametrning o'rniga istalgan selectorlarni yozish mumkin
//   return document.querySelectorAll(`${selectors}`);
// }

// var $_ = function (selector, form) { //shu qavsning ichiga parametrlar berdim, u parametrning o'rniga istalgan selectorni yozish mumkin va u formning ichidan olib kelib beradi
  // Tekshirib chiqamiz ya'ni form borligini tekshiramiz
//   if (form) {
//     var parent = document.querySelector(form);
//     return parent.querySelector(`${selector}`);
//   } else {
//     return document.querySelector(`${selector}`);
//   }
// }

// console.log($$_(`button`));
// console.log($_(`input`, `form`));


// createElement nomli funksiya yaratib olamiz parametrlariga ishlatiladigan element tag js tilida domElementga qo'shiladigan klas nomini kiritamiz
var createElement = function (nodeElement, klas, textContent) {
  // page nomli o'zgaruvchiga documentdan `paga-body` nomli classni topib shunga tenglab qo'yamiz
  var page = document.querySelector(`.page-body`);
  var element = document.createElement(nodeElement);
  // element nomli o'zgaruvchiga documentdan create element qilib olamiz, ya'ni bunda nodeElement nomli tag yaratib oladi va unga class qo'shadi

  // set atribut bilan elementga bir necha klas berayapman
  element.setAttribute(`class`, klas);
  // elementning text contentini uchinchi parametrga tenglab qo'yamiz
  element.textContent = textContent;
  // va uni page nomli o'zgaruvchiga appendChild qilgin deyapman
  // return page.appendChild(element);
  return element;

}
// newEl nomli o'zgaruvchiga createElement nomli funksiyani tenglab qo'yamiz va argumentiga p yaratgin unga text-center va rounded nomli class qo'shgin deymiz
var newEl = createElement(`h1`, `text-center text-danger`, `Bu jsda yozilgan text`);
// endi uni document.querySelector orqali page-body nomli tegga newEl nomli o'zgaruvchini appenChild qilgin deymiz
document.querySelector(`.page-body`).appendChild(newEl);