
  cardsArr = [
    {
      image:
        "https://www.hellobrightline.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F96gdpqkm7elu%2F4uB56VI83NNAa328OLhu83%2Ff7f138f65d3fc724353f0156ea629d28%2Fmedcity_news_logo_2121a3af9c.png&w=384&q=75",
      para: "Northwell pours $10M into Brightline as it, other providers aim to address pediatric mental health crisis",
    },

    {
      image:
        "https://www.hellobrightline.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F96gdpqkm7elu%2F1TtpfeBJdrC5yul2OrzE7E%2F1cfc31c9b3c72a864988aa8aed2fe8c0%2F5847e9aacef1014c0b5e4828.png&w=384&q=75",
      para: "InnovationRx: Teens And Mental Health; Plus, 'All-In-One' Vaccine",
    },

    {
      image:
        "https://www.hellobrightline.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F96gdpqkm7elu%2F4HjPOqG6q7KRxl9URjiulz%2Fe244d69d1a4d83858f4cf529ac1bdd30%2Flogo.png&w=384&q=75",
      para: "Most Americans are still choosing virtual visits for their mental health care. Experts say that’s here to stay",
    },

    {
      image:
        "https://www.hellobrightline.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F96gdpqkm7elu%2F2X2ZRXaeu8qmCbmt7CobbK%2Fa75a57e5fc35f37a3ad08ad76804a31e%2Flogo-2.png&w=384&q=75",
      para: "The Top 50 Healthcare Technology CEOs of 2022",
    },

    {
      image:
        "https://www.hellobrightline.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F96gdpqkm7elu%2F3WYJXnYO2dJilNqgfHTfyr%2F443ce67a0d71840cce3b99a3529af9c2%2Fyahoo_finance_en-US_h_p_financev2_2.png&w=384&q=75",
      para: "Brightline Announces Partnership with Peer Health Exchange to Develop Next Evolution of Company's Offering for Teenagers",
    },

    {
      image:
        "https://images.ctfassets.net/96gdpqkm7elu/686qToYWMKgeecMVXaPE8a/21179233da6a4bb3e1458d0d583b43f9/brand_employeebenefitnews_logo_color.svg",
      para: "Working parents need more mental health support for their children",
    },

    {
      image:
        "https://www.hellobrightline.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F96gdpqkm7elu%2F5mdAUQG7quJgTl3MJVUIKD%2Fcfd792f2cae9318421f3a026fee073b2%2Fcropped-behavior1-2048x270.webp&w=384&q=75",
      para: "Pediatric Behavioral Health Provider Brightline Launches Virtual Coaching Program to Support Parents",
    },
  ];

  // parent container is get here to append the cards inside itself
  let container = document.getElementById("mainCont");

  cardsArr.map((ele) => {
    let card = document.createElement("div");
    card.setAttribute("class", "slideCard");
    let imageDiv = document.createElement("div");
    let image = document.createElement("img");
    let paraDiv = document.createElement("div");
    let para = document.createElement("p");

    image.setAttribute("src", ele.image);
    imageDiv.append(image);
    para.innerText = ele.para;
    paraDiv.append(para);

    card.append(imageDiv, paraDiv);

    container.append(card);
  });


  // card div getting here to make smooth transition 
  let cardSlider = document.querySelectorAll(".slideCard");
  
  let currentCard = 0;

  // run loop on cards for moving left
  cardSlider.forEach((Cards, index) => {
    Cards.style.left = `${index * 100}%`;
  });

  let prev = () => {
    currentCard--;
    if(currentCard < 0)
    {
      currentCard = cardSlider.length-1
    }
    slide();
  };

  let next = () => {
    currentCard++;
    if(currentCard == cardSlider.length-1)
    {
      currentCard = 0
    }
    slide();
  };

  let slide = () => {
    cardSlider.forEach((slide) => {
      slide.style.transform = `translateX(-${currentCard * 100}%)`;
    });
  };
