const express = require("express");
const puppeteer = require("puppeteer");
const app = express();
const path = require("path"); 
const { constants } = require("buffer");
const port = 5000;

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static('public'))

let a = 'Iphone';
const Home =  async(req, res) => {

  console.log('Started')
  try{
    if(req.query.search.trim() !== '')
     a = req.query.search;
  }catch(err){
    a = 'Iphone';
  }
  if(a.trim() === ''){
    a = 'Iphone';
  }

    
  try{
  
  const amazonURL =
  "https://www.flipkart.com/search?q="+a+"&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off";
  

  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(amazonURL);

  const data = await page.$$eval(
    ".CGtC98",
    (elements) => {
      return elements.map((el) => ({
        title: el.querySelector(".KzDlHZ").innerText,
        price: el.querySelector(".Nx9bqj").innerText,
        imageURL: el.querySelector(".DByuf4").src,
      }));
    }
  );

  (data.length === 0) ? console.log('No results') : console.log('Success');
 
  res.render("index", {data});

  }catch(er){
    console.log('Failure')
    const data = [
      {
        title: 'Apple iPhone 15 (Black, 128 GB)',
        price: '₹58,499',
        imageURL: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/h/d/9/-original-imagtc2qzgnnuhxh.jpeg?q=70'
      },
      {
        title: 'Apple iPhone 15 (Green, 128 GB)',
        price: '₹58,499',
        imageURL: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/j/z/3/-original-imagtc5fqyz8tu4c.jpeg?q=70'
      },
      {
        title: 'Apple iPhone 15 Plus (Black, 128 GB)',
        price: '₹63,999',
        imageURL: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/h/d/9/-original-imagtc2qzgnnuhxh.jpeg?q=70'
      },
      {
        title: 'Apple iPhone 15 Plus (Green, 128 GB)',
        price: '₹63,999',
        imageURL: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/j/z/3/-original-imagtc5fqyz8tu4c.jpeg?q=70'
      },
      {
        title: 'Apple iPhone 15 Plus (Pink, 128 GB)',
        price: '₹63,999',
        imageURL: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/a/c/k/-original-imagtc5fuzkvczr7.jpeg?q=70'
      },
      {
        title: 'Apple iPhone 15 (Pink, 128 GB)',
        price: '₹58,499',
        imageURL: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/a/c/k/-original-imagtc5fuzkvczr7.jpeg?q=70'
      },
      {
        title: 'Apple iPhone 15 Plus (Blue, 128 GB)',
        price: '₹63,999',
        imageURL: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/k/l/l/-original-imagtc5fz9spysyk.jpeg?q=70'
      },
      {
        title: 'Apple iPhone 15 (Blue, 128 GB)',
        price: '₹58,499',
        imageURL: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/k/l/l/-original-imagtc5fz9spysyk.jpeg?q=70'
      },
      {
        title: 'Apple iPhone 16 (Teal, 128 GB)',
        price: '₹79,900',
        imageURL: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/r/k/a/-original-imah4jyfyrpxfhtk.jpeg?q=70'
      },
      {
        title: 'Apple iPhone 16 (Ultramarine, 256 GB)',
        price: '₹89,900',
        imageURL: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/q/n/s/-original-imah4jyfrgsbebg9.jpeg?q=70'
      },
      {
        title: 'Apple iPhone 16 (Teal, 256 GB)',
        price: '₹89,900',
        imageURL: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/r/k/a/-original-imah4jyfyrpxfhtk.jpeg?q=70'
      },
      {
        title: 'Apple iPhone 16 (Ultramarine, 128 GB)',
        price: '₹79,900',
        imageURL: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/q/n/s/-original-imah4jyfrgsbebg9.jpeg?q=70'
      },
      {
        title: 'Apple iPhone 16 (White, 128 GB)',
        price: '₹79,900',
        imageURL: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/g/v/p/-original-imah4jyfveygyubc.jpeg?q=70'
      },
      {
        title: 'Apple iPhone 16 (Black, 128 GB)',
        price: '₹79,900',
        imageURL: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/8/w/5/-original-imah4jyfwr3bfjbg.jpeg?q=70'
      },
      {
        title: 'Apple iPhone 16 Plus (White, 256 GB)',
        price: '₹99,900',
        imageURL: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/j/h/x/-original-imah4jykuzexdzek.jpeg?q=70'
      },
      {
        title: 'Apple iPhone 16 Plus (Black, 256 GB)',
        price: '₹99,900',
        imageURL: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/f/y/e/-original-imah4jykc3knhq3b.jpeg?q=70'
      },
      {
        title: 'Apple iPhone 16 (White, 256 GB)',
        price: '₹89,900',
        imageURL: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/g/v/p/-original-imah4jyfveygyubc.jpeg?q=70'
      },
      {
        title: 'Apple iPhone 16 (Pink, 256 GB)',
        price: '₹89,900',
        imageURL: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/c/v/p/-original-imah4jyfcjgcghqs.jpeg?q=70'
      },
      {
        title: 'Apple iPhone 15 Plus (Green, 512 GB)',
        price: '₹93,999',
        imageURL: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/j/z/3/-original-imagtc5fqyz8tu4c.jpeg?q=70'
      },
      {
        title: 'Apple iPhone 15 (Yellow, 128 GB)',
        price: '₹58,499',
        imageURL: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/f/l/g/-original-imagtc5frtz9j7tb.jpeg?q=70'
      },
      {
        title: 'Apple iPhone 15 (Blue, 512 GB)',
        price: '₹99,900',
        imageURL: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/k/l/l/-original-imagtc5fz9spysyk.jpeg?q=70'
      },
      {
        title: 'Apple iPhone 16 (Black, 256 GB)',
        price: '₹89,900',
        imageURL: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/8/w/5/-original-imah4jyfwr3bfjbg.jpeg?q=70'
      },
      {
        title: 'Apple iPhone 14 Plus (Blue, 128 GB)',
        price: '₹56,999',
        imageURL: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/c/4/d/-original-imaghx9qygjjg8hz.jpeg?q=70'
      },
      {
        title: 'Apple iPhone 15 (Green, 256 GB)',
        price: '₹79,900',
        imageURL: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/j/z/3/-original-imagtc5fqyz8tu4c.jpeg?q=70'
      }
    ];

    res.render("index", {data});

  }


}
app.get("/", Home);


app.listen(port, () => {
  console.log(`App listening at port ${port}`);
});