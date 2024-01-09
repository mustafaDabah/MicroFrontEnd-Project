import { faker } from "@faker-js/faker";

console.log('cart')

const mount = (el) => {
  const lang = faker.helpers.arrayElement(["de", "en", "fr"]);
  const name = lang;
  el.innerHTML = `<div>you have ${name} lang</div>`;
};

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#dev-cart-dev-only");

  if (el) {
    mount(el);
  }
}

export { mount };
