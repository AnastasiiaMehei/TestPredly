// document.addEventListener('DOMContentLoaded', function () {
//   const select = document.getElementById('country');
//   const selectedFlagContainer = document.querySelector('.selected-flag');

//   function updateSelectedFlag() {
//     const selectedOption = select.options[select.selectedIndex];
//     const flagClass = selectedOption.getAttribute('data-flag');
//     selectedFlagContainer.innerHTML = ''; // Clear previous content

//     if (flagClass) {
//       const flagIcon = document.createElement('span');
//       flagIcon.classList.add('flag-icon', flagClass);
//       selectedFlagContainer.appendChild(flagIcon);
//     }
//   }

//   // Initialize the selected flag on page load
//   updateSelectedFlag();

//   // Update the selected flag when the selection changes
//   select.addEventListener('change', updateSelectedFlag);
// });
document.addEventListener("DOMContentLoaded", function () {
  const select = document.getElementById("country");
  const selectedFlagContainer = document.querySelector(".selected-flag");

  function updateSelectedFlag() {
    const select = document.getElementById("country");
    const selectedFlagContainer = document.querySelector(".selected-flag");
    const selectedOption = select.options[select.selectedIndex];
    const flagClass = selectedOption.getAttribute("data-flag");
    selectedFlagContainer.innerHTML = ""; // Clear previous content

    if (flagClass) {
      const flagIcon = document.createElement("span");
      flagIcon.classList.add("flag-icon", flagClass);
      selectedFlagContainer.appendChild(flagIcon);
    }
  }

  // Initialize the selected flag on page load
  updateSelectedFlag();

  // Update the selected flag when the selection changes
  select.addEventListener("change", updateSelectedFlag);

  // Initialize Swiper
  if (typeof Swiper !== "undefined") {
    const swiper = new Swiper(".swiper-container", {
      slidesPerView: 1,
      slidesPerGroup: 1,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    // Add event listeners for custom navigation buttons
    document
      .querySelector("#btn-swipe1")
      .addEventListener("click", function () {
        swiper.slidePrev();
      });
    document
      .querySelector("#btn-swipe2")
      .addEventListener("click", function () {
        swiper.slideNext();
      });
    document
      .querySelector("#btn-swipe3")
      .addEventListener("click", function () {
        swiper.slidePrev();
      });
    document
      .querySelector("#btn-swipe4")
      .addEventListener("click", function () {
        swiper.slideNext();
      });
    document
      .querySelector("#btn-swipe5")
      .addEventListener("click", function () {
        swiper.slidePrev();
      });
    document
      .querySelector("#btn-swipe6")
      .addEventListener("click", function () {
        swiper.slideNext();
      });
    document
      .querySelector("#btn-swipe7")
      .addEventListener("click", function () {
        swiper.slidePrev();
      });
    document
      .querySelector("#btn-swipe8")
      .addEventListener("click", function () {
        swiper.slideNext();
      });
  } else {
    console.error("Swiper is not loaded");
  }

  // Contact sales button click event
  const contactSalesBtn = document.querySelector(".contact-sales-btn");
  const nameInput = document.getElementById("name");
  const phoneInput = document.getElementById("phone");
  const nameError = document.getElementById("name-error");
  const phoneError = document.getElementById("phone-error");
  const inputWithIcon = document.querySelector(".input-with-icon");

  contactSalesBtn.addEventListener("click", function (event) {
    let isValid = true;

    if (nameInput.value.trim() === "") {
      nameError.style.display = "block";
      nameInput.classList.add("input-error");
      isValid = false;
    } else {
      nameError.style.display = "none";
      nameInput.classList.remove("input-error");
    }

    if (phoneInput.value.trim() === "") {
      phoneError.style.display = "block";
      phoneInput.classList.add("input-error");
      inputWithIcon.classList.add("input-with-icon-error");
      isValid = false;
    } else {
      phoneError.style.display = "none";
      phoneInput.classList.remove("input-error");
      inputWithIcon.classList.remove("input-with-icon-error");
    }

    if (!isValid) {
      event.preventDefault();
    }
  });

  // Modal functionality
  const modalBackdrop = document.querySelector(".modal-backdrop");
  const modalCloseBtn = document.querySelector(".modal-close-btn");
  const popUpButtons = document.querySelectorAll(
    "#pop-up1, #pop-up2, #pop-up3"
  );

  popUpButtons.forEach((button) => {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      // modalBackdrop.classList.remove('hidden');
      modalBackdrop.classList.add("flex");
    });
  });

  modalCloseBtn.addEventListener("click", function () {
    // modalBackdrop.classList.add('hidden');
    modalBackdrop.classList.remove("flex");
  });

  // Initialize VanillaTilt for elements with class "card"
  VanillaTilt.init(document.querySelectorAll(".card"), {
    max: 15,
    speed: 400,
    glare: true,
    "max-glare": 0.5,
  });

  // Initialize VanillaTilt for elements with id "frame1", "frame2", "frame3"
  VanillaTilt.init(document.querySelectorAll("#frame1, #frame2, #frame3"), {
    max: 15,
    speed: 400,
    glare: true,
    "max-glare": 0.5,
  });
});
