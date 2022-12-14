const mainImage = document.getElementById('main-image');
const roomName = document.getElementById('room-name');
const smallImages = document.querySelectorAll('.small-image');
const images = [
     {name : 'Living Room', source : 'images/livingroom.jpg'},
     {name : 'Bed Room' , source : 'images/bedroom.jpg'},
     {name : 'Dining Room' , source : 'images/diningroom.jpg'},
     {name : 'Living Room 2' , source : 'images/livingroom2.jpg'}
];

smallImages.forEach((smallImage) => {
     smallImage.addEventListener('click' , () => {
          let imageId = smallImage.id;
          mainImage.style.backgroundImage = `url(${images[imageId].source})`;
          roomName.innerHTML = images[imageId].name;
     })
});

const subscribeBox = document.getElementById('subscribeBox');
const subscribeBtn = document.querySelectorAll('.subscribe');
const unsubscribeBtn = document.getElementById('unsubscribe');
subscribeBtn.forEach((subscribe) => {
     subscribe.addEventListener('click' , () => {
         subscribeBox.style.display = "block";
     })
})
unsubscribeBtn.addEventListener('click' , () => {
     subscribeBox.style.display = "none";
})