console.log("Test");

const images = [
  {
    src: "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_4:3/k%2FPhoto%2FSeries%2F2024-07-how-to-make-perfect-cheesecake%2Fhow-to-make-perfect-cheesecake-319",
    alt: "Vanilla Cheesecake with bright red strawberry topping",
  },
  {
    src: "https://www.healthyfood.com/wp-content/uploads/2018/02/Basic-omelette.jpg",
    alt: "Folded omelette topped with parsley on a black plate",
  },
  {
    src: "   https://cdn.media.amplience.net/i/japancentre/recipes-1541-uramaki-inside-out-sushi-roll/Uramaki-inside-out-sushi-roll?$poi$&w=1200&h=630&sm=c&fmt=auto",
    alt: "Wooden plate with two pieces of salmon sushi",
  },
  {
    src: "   https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk1pR4Kxyl16suyskuB4zbA4BaNf2XA9yPkw&s",
    alt: "Golden fish and chips with peashoots, lemon and tartare sauce",
  },
  {
    src: "   https://www.allrecipes.com/thmb/dF2YLgfKMy2Ee_kBskeoMBnxKkk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-56803-very-chocolate-ice-cream-Beauties-2x1-9186fbd502194b379eae3041f014fd37.jpg",
    alt: "Bowl of chocolate icecream next to an icecream scoop",
  },
];

const thumbnailSize = 50;


// Used the code below from an answer on a website. Changed the links to my URLs for food images and it does update it, but I'm not sure this is what I need (https://stackoverflow.com/questions/42327498/output-an-array-of-images-in-javascript/42327539#42327539)
//Played around with the body to reference the thumbnails container but couldn't get it to work

var ArrayOfImages = [
  "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_4:3/k%2FPhoto%2FSeries%2F2024-07-how-to-make-perfect-cheesecake%2Fhow-to-make-perfect-cheesecake-319",
  "https://cdn.media.amplience.net/i/japancentre/recipes-1541-uramaki-inside-out-sushi-roll/Uramaki-inside-out-sushi-roll?$poi$&w=1200&h=630&sm=c&fmt=auto",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk1pR4Kxyl16suyskuB4zbA4BaNf2XA9yPkw&s",
  "https://www.allrecipes.com/thmb/dF2YLgfKMy2Ee_kBskeoMBnxKkk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-56803-very-chocolate-ice-cream-Beauties-2x1-9186fbd502194b379eae3041f014fd37.jpg",
];
ArrayOfImages.forEach(function (image) {
  var img = document.createElement("img");
  img.src = image;
  img.height = "45";
  img.width = "50";
  document.body.appendChild(img);
});
