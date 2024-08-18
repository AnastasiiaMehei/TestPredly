// // main.js
// document.addEventListener('DOMContentLoaded', function () {
//   // Modal for Тури
//   var myModal = document.getElementById('myModal');
//   var openModalBtn = document.getElementById('openModal');
//   var closeModalBtn = myModal.querySelector('.close');

//   openModalBtn.onclick = function (event) {
//     event.preventDefault(); // Prevent default link behavior
//     myModal.style.display = 'block';
//   };

//   closeModalBtn.onclick = function () {
//     myModal.style.display = 'none';
//   };

//   window.onclick = function (event) {
//     if (event.target == myModal) {
//       myModal.style.display = 'none';
//     }
//   };

//   // Modal for Послуги
//   var modalForServices = document.getElementById('modalForServices');
//   var openServicesModalBtn = document.getElementById('openServicesModal');
//   var closeServicesModalBtn = modalForServices.querySelector('.close');

//   openServicesModalBtn.onclick = function (event) {
//     event.preventDefault(); // Prevent default link behavior
//     modalForServices.style.display = 'block';
//   };

//   closeServicesModalBtn.onclick = function () {
//     modalForServices.style.display = 'none';
//   };

//   window.onclick = function (event) {
//     if (event.target == modalForServices) {
//       modalForServices.style.display = 'none';
//     }
//   };

//   // Modal for Навігація
//   var navigationModal = document.getElementById('navigationModal');
//   var openNavigationModalBtn = document.getElementById('openNavigationModal');
//   var closeNavigationModalBtn = navigationModal.querySelector('.close');

//   openNavigationModalBtn.onclick = function (event) {
//     event.preventDefault(); // Prevent default link behavior
//     navigationModal.style.display = 'block';
//   };

//   closeNavigationModalBtn.onclick = function () {
//     navigationModal.style.display = 'none';
//   };

//   window.onclick = function (event) {
//     if (event.target == navigationModal) {
//       navigationModal.style.display = 'none';
//     }
//   };

//   // Modal for Підтримка
//   var supportModal = document.getElementById('supportModal');
//   var openSupportModalBtn = document.getElementById('openSupportModal');
//   var closeSupportModalBtn = supportModal.querySelector('.close');

//   openSupportModalBtn.onclick = function (event) {
//     event.preventDefault(); // Prevent default link behavior
//     supportModal.style.display = 'block';
//   };

//   closeSupportModalBtn.onclick = function () {
//     supportModal.style.display = 'none';
//   };

//   window.onclick = function (event) {
//     if (event.target == supportModal) {
//       supportModal.style.display = 'none';
//     }
//   };

//   // Modal for Контакти
//   var contactsModal = document.getElementById('contactsModal');
//   var openContactsModalBtn = document.getElementById('openContactsModal');
//   var closeContactsModalBtn = contactsModal.querySelector('.close');

//   openContactsModalBtn.onclick = function (event) {
//     event.preventDefault(); // Prevent default link behavior
//     contactsModal.style.display = 'block';
//   };

//   closeContactsModalBtn.onclick = function () {
//     contactsModal.style.display = 'none';
//   };

//   window.onclick = function (event) {
//     if (event.target == contactsModal) {
//       contactsModal.style.display = 'none';
//     }
//   };
// });

// let radios = document.getElementsByName('headerChoice');
// for (let i = 0; i < radios.length; i++) {
//   console.log(radios[i]);
//   radios[i].addEventListener(
//     'change',
//     function (e) {
//       if (radios[i].checked) {
//         document.getElementsByTagName('header')[0].className =
//           'header' + [i + 1];
//         for (let i = 0; i < radios.length; i++) {
//           document.getElementsByClassName('secCont')[i].style.display = 'none';
//           document.getElementsByClassName('secCont')[i].style.opacity = '0';
//         }
//         document.getElementsByClassName('secCont')[i].style.display = 'flex';
//         document.getElementsByClassName('secCont')[i].style.opacity = '1';
//       }
//     },
//     false,
//   );
// }

document.addEventListener('DOMContentLoaded', function () {
  let heroButtons = document.getElementsByClassName('btn-img');
  if (heroButtons.length > 0) {
    heroButtons[0].addEventListener('click', function () {
      document
        .getElementById('heroImage')
        .setAttribute('src', './images/banner4.png');
    });
    heroButtons[1].addEventListener('click', function () {
      document
        .getElementById('heroImage')
        .setAttribute('src', './images/banner1.jpeg');
    });
    heroButtons[2].addEventListener('click', function () {
      document
        .getElementById('heroImage')
        .setAttribute('src', './images/banner5.jpg');
    });
  } else {
    console.error('Elements with class "btn-img" not found.');
  }
});
