const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const invocation = document.querySelector(".gallery");

const createImage = (elements) =>
  elements
    .map(
      (element) =>
        `<li class = "item-img"> <img class = "photo" alt = "${element.alt}" src = "${element.url}"> </li>`
    )
    .join(" ");

const createdImage = createImage(images);

const li = invocation.insertAdjacentHTML("afterbegin", createdImage);

invocation.style.display = "flex";
invocation.style.flexDirection = "column";
invocation.style.alignItems = "center";
invocation.style.backgroundColor = "#d9efe4";
