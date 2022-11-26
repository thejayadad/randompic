

let img = ["https://images.pexels.com/photos/1196507/pexels-photo-1196507.jpeg?auto=compress&cs=tinysrgb&w=600", "https://images.pexels.com/photos/16408/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600", "https://images.pexels.com/photos/878992/pexels-photo-878992.jpeg?auto=compress&cs=tinysrgb&w=600"]

let imgages = img.length;
let randomNumber = Math.random();
randomNumber = randomNumber * imgages;
randomNumber = Math.floor(randomNumber);

let newImage = img[randomNumber];
pic.src = newImage;