//  Sasan Yazdani
//  168555183
//  Final Assessment

window.onload = function() {
  let shoesData = [
    {
      code: 1,
      gender: 'Men',
      brand: 'Nike',
      model: 'Zero',
      price: 155.98,
      category: 'running'
    },
    {
      code: 2,
      gender: 'Men',
      brand: 'Adidas',
      model: 'Yeezy',
      price: 145.95,
      category: 'running'
    },
    {
      code: 3,
      gender: 'Men',
      brand: 'Nike',
      model: 'Air',
      price: 132.99,
      category: 'running'
    },
    {
      code: 4,
      gender: 'Men',
      brand: 'New Balance',
      model: 'Ncap',
      price: 138.99,
      category: 'running'
    },
    {
      code: 5,
      gender: 'Men',
      brand: 'Nike',
      model: 'WalkZeroAir',
      price: 111.99,
      category: 'walking'
    },
    {
      code: 6,
      gender: 'Men',
      brand: 'Under Armour',
      model: 'WalkFree',
      price: 105.97,
      category: 'walking'
    },
    {
      code: 7,
      gender: 'Men',
      brand: 'Nike',
      model: 'WalkOffWhite',
      price: 133.19,
      category: 'walking'
    },
    {
      code: 8,
      gender: 'Women',
      brand: 'Adidas',
      model: 'Zbe',
      price: 123.39,
      category: 'running'
    },
    {
      code: 9,
      gender: 'Women',
      brand: 'Nike',
      model: 'AirMAx90',
      price: 145.59,
      category: 'running'
    },
    {
      code: 10,
      gender: 'Women',
      brand: 'Nike',
      model: 'Air350',
      price: 175.99,
      category: 'running'
    },
    {
      code: 11,
      gender: 'Women',
      brand: 'Adidas',
      model: 'CloudFeel',
      price: 150.99,
      category: 'running'
    },
    {
      code: 12,
      gender: 'Women',
      brand: 'Adidas',
      model: 'Classic',
      price: 115.98,
      category: 'walking'
    },
    {
      code: 13,
      gender: 'Women',
      brand: 'Adidas',
      model: 'ComfySeries',
      price: 129.92,
      category: 'walking'
    },
    {
      code: 14,
      gender: 'Women',
      brand: 'Nike',
      model: 'Zero',
      price: 120.99,
      category: 'walking'
    }
  ];

  let imageGrid = document.getElementById('imageGrid');

  console.log(imageGrid);
  shoesData.forEach(shoe => {
    let figure = document.createElement('figure');
    figure.className = 'card';
    let img = document.createElement('img');
    img.src = `./images/${shoe.code}.jpg`;
    img.alt = 'the browser cannot display this image';
    figure.appendChild(img);

    let h3 = document.createElement('h3');
    let productName = document.createTextNode(`${shoe.brand} ${shoe.model}`);
    h3.appendChild(productName);
    let pCategory = document.createElement('p');
    let categoryNode = document.createTextNode(`${shoe.category}`);
    pCategory.appendChild(categoryNode);
    let h3Price = document.createElement('h3');
    let priceNode = document.createTextNode(`CAD $ ${shoe.price.toFixed(2)}`);
    h3Price.appendChild(priceNode);

    figure.appendChild(h3);
    figure.appendChild(pCategory);
    figure.appendChild(h3Price);
    let hr = document.createElement('hr');
    figure.appendChild(hr);

    imageGrid.appendChild(figure);
  });

  let menRunningButton = document.getElementById('menu_men_running');
  menRunningButton.addEventListener('click', () => {
    let catTag = document.getElementById('category');
    catTag.innerHTML = 'Filter: Mens Running Shoes';
    clearCards();
    shoesData.forEach(shoe => {
      if (shoe.category.toLowerCase() === 'running' && shoe.gender.toLowerCase() === 'men') {
        let figure = document.createElement('figure');
        figure.className = 'card';
        let img = document.createElement('img');
        img.src = `./images/${shoe.code}.jpg`;
        img.alt = 'the browser cannot display this image';
        figure.appendChild(img);

        let h3 = document.createElement('h3');
        let productName = document.createTextNode(`${shoe.brand} ${shoe.model}`);
        h3.appendChild(productName);
        let pCategory = document.createElement('p');
        let categoryNode = document.createTextNode(`${shoe.category}`);
        pCategory.appendChild(categoryNode);
        let h3Price = document.createElement('h3');
        let priceNode = document.createTextNode(`CAD $ ${shoe.price.toFixed(2)}`);
        h3Price.appendChild(priceNode);

        figure.appendChild(h3);
        figure.appendChild(pCategory);
        figure.appendChild(h3Price);
        let hr = document.createElement('hr');
        figure.appendChild(hr);

        imageGrid.appendChild(figure);
      }
    });
  });

  let womenRunningButton = document.getElementById('menu_women_running');
  womenRunningButton.addEventListener('click', () => {
    let catTag = document.getElementById('category');
    catTag.innerHTML = 'Filter: Womens Running Shoes';
    clearCards();
    shoesData.forEach(shoe => {
      if (shoe.category.toLowerCase() === 'running' && shoe.gender.toLowerCase() === 'women') {
        let figure = document.createElement('figure');
        figure.className = 'card';
        let img = document.createElement('img');
        img.src = `./images/${shoe.code}.jpg`;
        img.alt = 'the browser cannot display this image';
        figure.appendChild(img);

        let h3 = document.createElement('h3');
        let productName = document.createTextNode(`${shoe.brand} ${shoe.model}`);
        h3.appendChild(productName);
        let pCategory = document.createElement('p');
        let categoryNode = document.createTextNode(`${shoe.category}`);
        pCategory.appendChild(categoryNode);
        let h3Price = document.createElement('h3');
        let priceNode = document.createTextNode(`CAD $ ${shoe.price.toFixed(2)}`);
        h3Price.appendChild(priceNode);

        figure.appendChild(h3);
        figure.appendChild(pCategory);
        figure.appendChild(h3Price);
        let hr = document.createElement('hr');
        figure.appendChild(hr);

        imageGrid.appendChild(figure);
      }
    });
  });

  let womenWalkingButton = document.getElementById('menu_women_walking');
  womenWalkingButton.addEventListener('click', () => {
    let catTag = document.getElementById('category');
    catTag.innerHTML = 'Filter: Womens Walking Shoes';
    clearCards();
    shoesData.forEach(shoe => {
      if (shoe.category.toLowerCase() === 'walking' && shoe.gender.toLowerCase() === 'women') {
        let figure = document.createElement('figure');
        figure.className = 'card';
        let img = document.createElement('img');
        img.src = `./images/${shoe.code}.jpg`;
        img.alt = 'the browser cannot display this image';
        figure.appendChild(img);

        let h3 = document.createElement('h3');
        let productName = document.createTextNode(`${shoe.brand} ${shoe.model}`);
        h3.appendChild(productName);
        let pCategory = document.createElement('p');
        let categoryNode = document.createTextNode(`${shoe.category}`);
        pCategory.appendChild(categoryNode);
        let h3Price = document.createElement('h3');
        let priceNode = document.createTextNode(`CAD $ ${shoe.price.toFixed(2)}`);
        h3Price.appendChild(priceNode);

        figure.appendChild(h3);
        figure.appendChild(pCategory);
        figure.appendChild(h3Price);
        let hr = document.createElement('hr');
        figure.appendChild(hr);

        imageGrid.appendChild(figure);
      }
    });
  });

  let menWalkingButton = document.getElementById('menu_men_walking');
  menWalkingButton.addEventListener('click', () => {
    let catTag = document.getElementById('category');
    catTag.innerHTML = 'Filter: Mens Walking Shoes';
    clearCards();
    console.log('men walking');
    shoesData.forEach(shoe => {
      if (shoe.category.toLowerCase() === 'walking' && shoe.gender.toLowerCase() === 'men') {
        let figure = document.createElement('figure');
        figure.className = 'card';
        let img = document.createElement('img');
        img.src = `./images/${shoe.code}.jpg`;
        img.alt = 'the browser cannot display this image';
        figure.appendChild(img);

        let h3 = document.createElement('h3');
        let productName = document.createTextNode(`${shoe.brand} ${shoe.model}`);
        h3.appendChild(productName);
        let pCategory = document.createElement('p');
        let categoryNode = document.createTextNode(`${shoe.category}`);
        pCategory.appendChild(categoryNode);
        let h3Price = document.createElement('h3');
        let priceNode = document.createTextNode(`CAD $ ${shoe.price.toFixed(2)}`);
        h3Price.appendChild(priceNode);

        figure.appendChild(h3);
        figure.appendChild(pCategory);
        figure.appendChild(h3Price);
        let hr = document.createElement('hr');
        figure.appendChild(hr);

        imageGrid.appendChild(figure);
      }
    });
  });

  let homeButton = document.getElementById('home');
  homeButton.addEventListener('click', () => {
    let catTag = document.getElementById('category');
    catTag.innerHTML = 'Filter: All Shoes';
    clearCards();
    shoesData.forEach(shoe => {
      let figure = document.createElement('figure');
      figure.className = 'card';
      let img = document.createElement('img');
      img.src = `./images/${shoe.code}.jpg`;
      img.alt = 'the browser cannot display this image';
      figure.appendChild(img);

      let h3 = document.createElement('h3');
      let productName = document.createTextNode(`${shoe.brand} ${shoe.model}`);
      h3.appendChild(productName);
      let pCategory = document.createElement('p');
      let categoryNode = document.createTextNode(`${shoe.category}`);
      pCategory.appendChild(categoryNode);
      let h3Price = document.createElement('h3');
      let priceNode = document.createTextNode(`CAD $ ${shoe.price.toFixed(2)}`);
      h3Price.appendChild(priceNode);

      figure.appendChild(h3);
      figure.appendChild(pCategory);
      figure.appendChild(h3Price);
      let hr = document.createElement('hr');
      figure.appendChild(hr);

      imageGrid.appendChild(figure);
    });
  });
};

function clearCards() {
  console.log('clear grid');
  let removeCards = document.getElementById('imageGrid');
  if (removeCards) {
    while (removeCards.hasChildNodes()) {
      removeCards.removeChild(removeCards.lastChild);
    }
  }
}

document.getElementById('radio-input3').addEventListener('click', () => {
  document.getElementById('order-number').style.display = 'block';
});

document.getElementById('radio-input2').addEventListener('click', () => {
  document.getElementById('order-number').style.display = 'none';
});

document.getElementById('radio-input1').addEventListener('click', () => {
  document.getElementById('order-number').style.display = 'none';
});
