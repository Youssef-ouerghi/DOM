const product = [
  {
    id: 1,
    image: "image/aa-1.jpeg",
    title: "Headphone",
    Price: "$20",
  },
  {
    id: 2,
    image: "image/bb-1.jpeg",
    title: "Rode NT1 Microphone",
    Price: "$20",
  },
  {
    id: 3,
    image: "image/cc-1.jpeg",
    title: "Smart Watch",
    Price: "$30",
  },
  {
    id: 4,
    image: "image/dd-1.jpeg",
    title: "Hp Laptop Next Generation",
    Price: "$70",
  },
  {
    id: 5,
    image: "image/ee-1.jpeg",
    title: "250D DSLR Camera",
    Price: "$60",
  },
  {
    id: 6,
    image: "image/cc-1.jpeg",
    title: "Smart Watch",
    Price: "$30",
  },

  {
    id: 7,
    image: "im age/ff-1.jpg",
    title: "Metal Dask lamp",
    Price: "$35",
  },
  {
    id: 8,
    image: "image/gg-1.jpeg",
    title: "Z flip foldable Mobile",
    Price: "$55",
  },
  {
    id: 9,
    image: "image/hh-1.jpg",
    title: "Air Pods Pro",
    Price: "$50",
  },
];

const categories = [
  ...new Set(
    product.map((item) => {
      return item;
    })
  ),
];

let cart = document.getElementById("root");
cart.innerHTML = categories
  .map((item) => {
    var { image, title, price } = item;
    return (
      <div class="box">
        <div class="img-box">
          <img src="${image}"></img>
        </div>
        <div class="left">
          <p>${title}</p>
          <h2>${price}</h2>
          <button>Add to cart</button>
        </div>
      </div>
    );
  })
  .join("");
