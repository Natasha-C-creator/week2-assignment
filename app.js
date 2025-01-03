console.log("Test");

const imagesArray = [
  {
    src: "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_4:3/k%2FPhoto%2FSeries%2F2024-07-how-to-make-perfect-cheesecake%2Fhow-to-make-perfect-cheesecake-319",
    alt: "Vanilla Cheesecake with bright red strawberry topping",
    width: 50,
    height: 50,
  },
  {
    src: "https://www.healthyfood.com/wp-content/uploads/2018/02/Basic-omelette.jpg",
    alt: "Folded omelette topped with parsley on a black plate",
    width: 50,
    height: 50,
  },
  {
    src: "https://cdn.media.amplience.net/i/japancentre/recipes-1541-uramaki-inside-out-sushi-roll/Uramaki-inside-out-sushi-roll?$poi$&w=1200&h=630&sm=c&fmt=auto",
    alt: "Wooden plate with two pieces of salmon sushi",
    width: 50,
    height: 50,
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk1pR4Kxyl16suyskuB4zbA4BaNf2XA9yPkw&s",
    alt: "Golden fish and chips with peashoots, lemon and tartare sauce",
    width: 50,
    height: 50,
  },
  {
    src: "https://www.allrecipes.com/thmb/dF2YLgfKMy2Ee_kBskeoMBnxKkk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-56803-very-chocolate-ice-cream-Beauties-2x1-9186fbd502194b379eae3041f014fd37.jpg",
    alt: "Bowl of chocolate icecream next to an icecream scoop",
    width: 50,
    height: 50,
  },
];

// This code successfully shows images on the page:
const thumbnailContainer = document.getElementById("thumbnail-container");

function createThumbnails(imagesArray) {
  imagesArray.forEach((image) => {
    const newImg = document.createElement("img");
    newImg.src = image.src;
    newImg.alt = image.alt;
    newImg.width = image.width;
    newImg.height = image.height;
    console.log(newImg);

    thumbnailContainer.appendChild(newImg);
  });
}

createThumbnails(imagesArray);

// //This code was my attempt to start the click function but seemed to remove the images:
// function createThumbnails(imagesArray) {
//   imagesArray.forEach((image) => {
//     const newImg = document.createElement("img");
//     newImg.src = image.src;
//     newImg.alt = image.alt;
//     newImg.width = image.width;
//     newImg.height = image.height;
//     newImg.addEventListener("click", function () {
//       displayedImage.src = image.src;
//       displayedImage.alt = image.alt;
//       //   const thumbnailContainer = document.getElementById("thumbnail-container");
//       //   const largeImageContainer = document.getElementById("large-image-container");
//       //   const displayedImage = document.getElementById("displayed-image");
//     });
//     thumbnailContainer.appendChild(newImg);
//   });
// }

// createThumbnails(imagesArray);
