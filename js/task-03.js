const images = [
    {
      url:
        'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url:
        'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url:
        'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
  ];
    let imgArray = [];
    const ulGalery = document.getElementById("gallery");
    ulGalery.style.display = "flex";
    ulGalery.style.flexDirection = "column";
    ulGalery.style.listStyleType = 'none';
    const list = images.map(option => {
    const textImg = `<li><img src = "${option.url}" alt="${option.alt}" width = "200">`;
    imgArray.push(textImg)
});
ulGalery.insertAdjacentHTML('afterbegin', imgArray);
