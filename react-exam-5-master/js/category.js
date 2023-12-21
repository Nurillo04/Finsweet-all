const posts = [
    {
      id: 1,
      title: "Exploring the Wilderness",
      description: "A journey into the heart of untouched nature.",
      author: "Adventure Enthusiast",
      date: "2023-01-10",
      category: "Travel",
      image: "/images/posts/post-1.png",
    },
    {
      id: 2,
      title: "The Art of Cooking",
      description: "Delicious recipes and culinary adventures.",
      author: "Gourmet Chef",
      date: "2023-02-15",
      category: "Food",
      image: "/images/posts/post-2.png",
    },
    {
      id: 3,
      title: "Tech Trends 2023",
      description: "The latest in technology and innovation.",
      author: "Tech Geek",
      date: "2023-12-20",
      category: "Technology",
      image: "/images/posts/post-3.png",
    },
    {
      id: 4,
      title: "The Mysterious World of Deep Sea Creatures",
      description:
        "Dive into the depths and discover the bizarre and fascinating creatures that call the ocean floor home.",
      author: "Dr. Ocean Explorer",
      date: "2023-12-18",
      category: "Science & Nature",
      image: "/images/posts/post-4.png",
    },
    {
      id: 5,
      title: "5 Must-Try Local Dishes in Thailand",
      description:
        "Embark on a culinary adventure through Thailand's vibrant streets and indulge in the unique flavors of its delicious cuisine.",
      author: "Foodie Traveler",
      date: "2023-12-17",
      category: "Travel & Food",
      image: "/images/posts/post-5.png",
    },
    {
      id: 6,
      title: "Winter Wonderland: The Magic of Skiing in the Alps",
      description:
        "Hit the slopes and experience the breathtaking scenery and exhilarating adventures of skiing in the majestic Alps.",
      author: "Snow Sport Enthusiast",
      date: "2023-12-16",
      category: "Travel & Sports",
      image: "/images/posts/post-6.png",
    },
    {
      id: 7,
      title: "Unlocking the Power of Mindfulness: A Beginner's Guide",
      description:
        "Find inner peace and reduce stress through the practice of mindfulness, learning simple techniques to focus on the present moment.",
      author: "Meditation Teacher",
      date: "2023-12-15",
      category: "Health & Wellness",
      image: "/images/posts/post-7.png",
    },
    {
      id: 8,
      title: "Coding 101: Build Your First Website from Scratch",
      description:
        "Take your first steps into the world of coding and learn the basics of building a website with simple, beginner-friendly instructions.",
      author: "Tech Guru",
      date: "2023-12-14",
      category: "Technology & Education",
      image: "/images/posts/post-8.png",
    },
    {
      id: 9,
      title: "Stargazing for Beginners: Exploring the Wonders of the Night Sky",
      description:
        "Learn to identify constellations, planets, and other celestial objects, and discover the awe-inspiring beauty of the universe.",
      author: "Amateur Astronomer",
      date: "2023-12-13",
      category: "Science & Education",
      image: "/images/posts/post-9.png",
    },
    {
      id: 10,
      title: "Sustainable Living: Simple Tips for a Greener Lifestyle",
      description:
        "Make small changes in your daily life to reduce your environmental impact and contribute to a more sustainable future.",
      author: "Eco-Conscious Advocate",
      date: "2023-12-12",
      category: "Environment & Lifestyle",
      image: "/images/posts/post-10.png",
    },
    {
      id: 11,
      title: "The Art of Storytelling: Captivate Your Audience with Your Words",
      description:
        "Learn the secrets of effective storytelling, from crafting compelling narratives to engaging your audience and leaving a lasting impression.",
      author: "Writing Expert",
      date: "2023-12-11",
      category: "Arts & Literature",
      image: "/images/posts/post-11.png",
    },
  ];
  
  const cards = document.querySelector(".category__resaults");
  
  const input = document.querySelector(".category__search");
  const form = document.querySelector(".category__form");
  const pagenation = document.querySelector(".category__pagination");
  const resultsContainer = document.querySelector(".category__resaults");
  const heading = document.getElementById("heading");
  
  displayPosts(posts);
  function displayPosts(posts) {
    let str = "";
  
    posts.map((post) => {
      console.log(post);
      str += `
          <div class="card">
          <div class="card__img-wrapper">
          <img class="card__imgs1" src="..${post.image}" alt="Response Image">
          </div>                       
                  <div class="card__text">
                      <span class="card__theme">${post.category}</span>
                      <h6 class="card__title">${post.id}</h6>
                      <h3 class="card__title">${post.title}</h3>
                      <p class="card__info">${post.description}</p>
                  </div>
          </div>
            `;
    });
    cards.innerHTML = str;
  }
  
  //  shu
  let page = 1;
  
  let forMaxPage = 0;
  
  let minPage = 1;
  let middlePage = 2;
  let maxPage = 10;
  
  function getPage() {
    const prevBtn = document.createElement("span");
    const minBtn = document.createElement("button");
    const middleBtn = document.createElement("button");
    const dots = document.createElement("span");
    const maxBtn = document.createElement("button");
    const nextBtn = document.createElement("span");
    prevBtn.textContent = "< Prev";
    minBtn.textContent = minPage;
    middleBtn.textContent = middlePage;
    dots.textContent = "...";
    maxBtn.textContent = maxPage;
    nextBtn.textContent = "Next >";
  
    prevBtn.addEventListener("click", () => {
      pagenation.innerHTML = "";
      if (middlePage == forMaxPage) {
        maxPage -= 10;
      }
      if (minPage == 1) {
        prevBtn.style.opacity = "0.5";
      } else if (minPage > 1) {
        minPage -= 1;
        middlePage -= 1;
      }
  
      getPage();
    });
  
    minBtn.addEventListener("click", () => {
      pagenation.innerHTML = "";
      page = minPage;
  
      minBtn.classList.add("active");
      middleBtn.classList.remove("active");
      maxBtn.classList.remove("active");
  
      getData();
      getPage();
    });
  
    middleBtn.addEventListener("click", () => {
      pagenation.innerHTML = "";
      page = middlePage;
  
      middleBtn.classList.add("active");
      minBtn.classList.remove("active");
      maxBtn.classList.remove("active");
  
      getData();
      getPage();
    });
  
    maxBtn.addEventListener("click", () => {
      pagenation.innerHTML = "";
      page = maxPage;
  
      maxBtn.classList.add("active");
      minBtn.classList.remove("active");
      middleBtn.classList.remove("active");
  
      getData();
      getPage();
    });
  
    nextBtn.addEventListener("click", () => {
      pagenation.innerHTML = "";
      minPage += 1;
      middlePage += 1;
      if (middlePage == maxPage) {
        maxPage += 10;
        forMaxPage += 10;
      }
      getPage();
    });
  
    pagenation.append(prevBtn, minBtn, middleBtn, dots, maxBtn, nextBtn);
  }
  