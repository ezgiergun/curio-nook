(function () {
  //Item images change when another color selected on product page:
  const loadContent = () => {
    const colorClicked = JSON.parse(localStorage.getItem("clickedColor"));
    const images = document.querySelectorAll(
      ".product-image-carousel__image > img"
    );
    for (let i = 0; i < images.length; i++) {
      const image = images[i];
      image.parentElement.classList.remove("active");

      const id = image.id;
      if (colorClicked == id) {
        image.parentElement.classList.add("active");
      }
    }
  };
  loadContent();

  //Radio buttons selected and corresponding image loads:
  const radioButtons = document.querySelectorAll(
    ".select-variant input[type='radio']"
  );
  radioButtons.forEach((radioButton) => {
    radioButton.parentElement.addEventListener("click", (event) => {
      radioButtons.forEach((rb) => {
        rb.checked = false;
      });
      radioButton.checked = true;
      localStorage.setItem("clickedColor", radioButton.id);
      loadContent();
    });
  });

  //Previous and next button are used to direct to the product's page:
  const checkIdMatch = (number) => {
    const idMap = {
      1: "4512783456",
      2: "3055832265",
      3: "3968250714",
      4: "7043992558",
      5: "7198266084",
      6: "8642097531",
      7: "8247539125",
      8: "7254369801",
      9: "6410852973",
      10: "6152093487",
      11: "2867519034",
      12: "5048273728",
    };
    localStorage.setItem("clickedColor", idMap[number]);
  };

  const navBtn = document.querySelector(".product-navigation");
  const childNodes = navBtn.childNodes;
  const preBtn = childNodes[1];
  const nextBtn = childNodes[3];

  preBtn.addEventListener("click", () => {
    const preA = preBtn.querySelector("a");
    const href = preA.href;
    const number = href.match(/(\d+)\.html$/)[1];
    checkIdMatch(number);
  });
  nextBtn.addEventListener("click", () => {
    const nextA = nextBtn.querySelector("a");
    const href = nextA.href;
    const number = href.match(/(\d+)\.html$/)[1];
    checkIdMatch(number);
  });

  // Selected color's id on previous page is used to select corresponding radio button:
  window.addEventListener("DOMContentLoaded", () => {
    const selectedId = JSON.parse(localStorage.getItem("clickedColor"));
    if (selectedId) {
      const radioButton = document.querySelector(`input[id='${selectedId}']`);
      if (radioButton) {
        radioButton.checked = true;
      }
    }
  });

  // Previous and next buttons on carousel images change active image and counter logic

  const prevCarou = document.querySelector(".product-image-carousel__prev");
  const nextCarou = document.querySelector(".product-image-carousel__next");
  const counter = document.querySelector(".product-image-carousel__counter");

  const updateCounter = (index) => {
    const imageCount = document.querySelectorAll(
      ".product-image-carousel__image"
    ).length;
    counter.innerHTML = `${
      index + 1
    } <span>&nbsp;OF&nbsp;</span> ${imageCount}`;
  };

  const updateRadio = (imageId) => {
    radioButtons.forEach((radioButton) => {
      radioButton.checked = radioButton.id === imageId;
    });
  };

  prevCarou.addEventListener("click", () => {
    const activeImage = document.querySelector(
      ".product-image-carousel__image.active"
    );
    const images = document.querySelectorAll(".product-image-carousel__image");
    const currentIndex = Array.from(images).indexOf(activeImage);

    let prevIndex;
    if (currentIndex === 0) {
      prevIndex = images.length - 1;
    } else {
      prevIndex = currentIndex - 1;
    }

    const prevImage = images[prevIndex];
    activeImage.classList.remove("active");
    prevImage.classList.add("active");
    updateCounter(prevIndex);
    const prevImageId = prevImage.querySelector("img").getAttribute("id");
    updateRadio(prevImageId);
  });

  nextCarou.addEventListener("click", () => {
    const activeImage = document.querySelector(
      ".product-image-carousel__image.active"
    );
    const images = document.querySelectorAll(".product-image-carousel__image");
    const currentIndex = Array.from(images).indexOf(activeImage);
    let nextIndex;
    if (currentIndex === images.length - 1) {
      nextIndex = 0;
    } else {
      nextIndex = currentIndex + 1;
    }
    const nextImage = images[nextIndex];
    activeImage.classList.remove("active");
    nextImage.classList.add("active");
    updateCounter(nextIndex);
    const nextImageId = nextImage.querySelector("img").getAttribute("id");

    updateRadio(nextImageId);
  });

  // Change size
  const images = document.querySelectorAll("img");

  images.forEach((image) => {
    if (image.width > 400) {
      image.style.maxWidth = "65%";
    }
  });
})();
