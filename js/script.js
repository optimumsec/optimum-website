// index.js

function main() {
  sliderHelper();
  swiperHelper();
};

// helpers
function swiperHelper() {
  const swiper = new Swiper(".swiper", {
    slidesPerView: 1.4,
    spaceBetween: 40,
    centeredSlides: true,
    breakpoints: {
      768: {
        slidesPerView: 3.5,
        spaceBetween: 20,
      },
    },
  });

  const numOfSlides = document.querySelector(".swiper-wrapper").children.length;
  const middleSlideIndex = Math.floor(numOfSlides / 2);
  for (let i = 0; i < middleSlideIndex; i++) {
    swiper.slideNext();
  }

  document
    .querySelector(".swiper-btn-prev")
    .addEventListener("click", () => swiper.slidePrev());
  document
    .querySelector(".swiper-btn-next")
    .addEventListener("click", () => swiper.slideNext());
  window.swiper = swiper;
}

function sliderHelper() {
  const c = document.querySelector(".slider .slide-track");

  document.querySelector("head").innerHTML += `<style>
    .our_clients .companies_logos {
      --numofslides: ${c.children.length};
    }
    <style>
  `;
  appendDuplicateChildren(c);
}

function appendDuplicateChildren(containerDiv) {
  const children = containerDiv.children;
  const duplicateChildren = Array.from(children).map((child) =>
    child.cloneNode(true)
  );

  duplicateChildren.forEach((duplicateChild) => {
    containerDiv.appendChild(duplicateChild);
  });
}

function scrollToMiddle() {
  const swiper = document.querySelector(".swiper");
  const swiperWrapper = document.querySelector(".swiper-wrapper");
  const middleIndex = Math.floor(swiperWrapper.children.length / 2);
  const middleItem = swiperWrapper.children[middleIndex];

  if (middleItem) {
    const containerRect = swiper.getBoundingClientRect();
    const itemRect = middleItem.getBoundingClientRect();

    // Calculate the scroll position to bring the item into view
    const scrollPosition =
      itemRect.left -
      containerRect.left -
      (containerRect.width - itemRect.width) / 2;
    swiper.scrollLeft += scrollPosition;
  }
}

