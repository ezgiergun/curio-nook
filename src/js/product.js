(function () {
  const button0 = document.getElementById("accordion-0");
  const button1 = document.getElementById("accordion-1");
  const button2 = document.getElementById("accordion-2");
  const button3 = document.getElementById("accordion-3");

  const allButtons = document.querySelectorAll(".item-header>button");

  const sec0 = `<div data-v-48d93ce4="" id="section-0" aria-labelledby="accordion-0" class="item-body"><div data-v-48d93ce4="" class="accordion__content"><p data-v-48d93ce4="">All pieces are designed by Adi Goodrich and are built by hand by Adi and a small team of artists in her studio in Los Angeles, California.</p></div></div>`;
  const sec1 = `<div data-v-48d93ce4="" id="section-1" aria-labelledby="accordion-1" class="item-body"><div data-v-48d93ce4="" class="accordion__content"><p data-v-48d93ce4="">All furniture pieces have an estimated lead time between 2-8 weeks. Each piece’s estimated shipping time is listed on the product page.</p></div></div>`;
  const sec2 = `<div data-v-48d93ce4="" id="section-2" aria-labelledby="accordion-2" class="item-body"><div data-v-48d93ce4="" class="accordion__content"><p data-v-48d93ce4="">We allow customers to cancel their order within 24 hours for a full refund. You can email us directly at <a data-v-48d93ce4="" href="mailto:info@curio-nook.com" rel="noopener">info@curio-nook.com</a> and request a cancellation. Because our furniture is all made-to-order, after 24 hours, we will not be able to cancel your order.</p></div></div>`;
  const sec3 = `<div data-v-48d93ce4="" id="section-3" aria-labelledby="accordion-3" class="item-body"><div data-v-48d93ce4="" class="accordion__content"><p data-v-48d93ce4="">Our furniture is made-to-order and we cannot offer returns or refunds. All sales are final. However, if your furniture arrives damaged, please send us an image within 2 days of receiving the item and we will gladly arrange for another piece to be sent to you. In some instances, we will arrange for your damaged piece to be returned before sending out your replacement.</p></div></div>`;
  allButtons.forEach((button) =>
    button.addEventListener("click", () => {
      const accordionItem = button.closest(".accordion__inner .item");
      const isActive = accordionItem.classList.contains("active");
      if (isActive) {
        accordionItem.classList.remove("active");
        const lastElement = accordionItem.lastElementChild;
        if (lastElement) {
          lastElement.remove();
        }
        button.setAttribute("aria-expanded", "");
        button.ariaLabel = "Expand Content";
      } else {
        button.ariaLabel = "Collapse Content";
        button.setAttribute("aria-expanded", "true");
        accordionItem.classList.add("active");
        if (button.id === "accordion-0")
          accordionItem.insertAdjacentHTML("beforeend", sec0);
        if (button.id === "accordion-1")
          accordionItem.insertAdjacentHTML("beforeend", sec1);
        if (button.id === "accordion-2")
          accordionItem.insertAdjacentHTML("beforeend", sec2);
        if (button.id === "accordion-3")
          accordionItem.insertAdjacentHTML("beforeend", sec3);
      }
    })
  );

  const scrollImage = document.querySelector(".product-hero__media-wrapper");
  scrollImage.style.transformOrigin = "top left";
  scrollImage.style.transform = "scale(1.45)";

  window.addEventListener("scroll", function () {
    let value = window.scrollY;
    scrollImage.style.transition = `transform 0.5s ease`;
    if (value === 0) scrollImage.style.transform = "scale(1.45)";
    if (value > 0 && value < 114) scrollImage.style.transform = "scale(1.3)";
    if (value > 114 && value < 228) scrollImage.style.transform = "scale(1.1)";
    if (value > 228 && value < 350) scrollImage.style.transform = "scale(0.99)";
  });
})();
