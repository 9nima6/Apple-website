class FetchAll {
  async fetchMenu(url) {
    let data = await fetch(url);
    let res = await data.json();
    let menu = res.map((elem) => {
      return `<li class="group slidedown">
            <a class="menua" href="#">${elem.title}</a>
            <div class="submenu">
            <div class="white">
              <nav>
                <ul class="menuul">
                  ${elem.submenu.ulfirst
                    .map((elem1) => {
                      return `<li><a class="submenua font-bold text-2xl" href="#">${elem1.title}</a></li>`;
                    })
                    .join("")}
                </ul>
              </nav>
              <nav>
                <ul class="menuul gap-0">
                ${elem.submenu.ulsecond
                  .map((elem1) => {
                    return `<li><a class="submenua font-bold text-xs" href="#">${elem1.title}</a></li>`;
                  })
                  .join("")}
                </ul>
              </nav>
              <nav>
                <ul class="menuul gap-0">
                ${elem.submenu.ulthird
                  .map((elem1) => {
                    return `<li><a class="submenua font-bold text-xs" href="#">${elem1.title}</a></li>`;
                  })
                  .join("")}
                </ul>
              </nav>
            </div>
            <div class="empty"></div>
          </div>
          </li>`;
    });
    document.querySelector("#menu").innerHTML += menu.join("");
  }
  async fetchMenuMd(url) {
    let data = await fetch(url);
    let res = await data.json();
    let submenumd = res.map((elem) => {
      return `<li class="group flex justify-between items-center"><a class="menua font-bold text-2xl py-1" href="#">${elem.title}</a></li>`;
    });
    document.querySelector("#submenumd").innerHTML += submenumd.join("");
  }
  async firstProducts(url) {
    let data = await fetch(url);
    let res = await data.json();
    let firstproducts = res.map((elem) => {
      return `<div class="relative flex justify-center items-center cursor-pointer mb-3">
      <img class="object-cover w-full h-[620px]" src="${elem.image}" alt="${elem.alt}">
      <div class="absolute flex flex-col items-center justify-start gap-1 -mt-[300px] tracking-[-.01em]">
        <h1 class="text-headlinewhite font-bold text-3xl sm:text-5xl">${elem.h1}</h1>
        <p class="text-headlinewhite font-semiBoldold text-xl sm:text-3xl">${elem.p}</p>
        <div class="flex justify-center items-center gap-8 font-regular text-bluelink text-xl mt-4">
          <a class="hover:underline" href="#">${elem.a1}</a><a class="hover:underline" href="#">${elem.a2}</a>
        </div>
      </div>
    </div>`;
    });
    document.querySelector("#firstproducts").innerHTML +=
      firstproducts.join("");
  }
  async gridImages(url) {
    let data = await fetch(url);
    let res = await data.json();
    let gridimages = res.map((elem) => {
      return `<div class="relative flex justify-center items-center cursor-pointer">
      <img class="object-cover w-full sm:max-w-[740px] h-[580px]" src="${elem.image}" alt="${elem.alt}">
      <div class="absolute flex flex-col items-center justify-start -mt-[400px] tracking-[-.01em]">
        <h1 class="text-headlineblack font-bold text-3xl sm:text-4xl">${elem.h1}</h1>
        <p class="text-headlineblack font-semiBoldold text-lg sm:text-xl">${elem.p1}</p>
        <p class="text-headlineblack font-semiBoldold text-lg sm:text-xl">${elem.p2}</p>
        <div class="flex justify-center items-center gap-8 font-regular text-bluelink text-xl mt-4">
          <a class="hover:underline" href="#">${elem.a1}</a><a class="hover:underline" href="#">${elem.a2}</a>
        </div>
      </div>
    </div>`;
    });
    document.querySelector("#gridimages").innerHTML += gridimages.join("");
  }
  async Slider(url) {
    let data = await fetch(url);
    let res = await data.json();
    let slider = res.map((elem) => {
      return `<div class="swiper-slide">
      <div class="image">
        <img src="${elem.image}" alt="${elem.alt}" />
      </div>

      <div class="overlay">
        <div class="text-wrap">
          <div class="name">
            <button class="text-sliderbut bg-white opacity-90 whitespace-nowrap text-center px-[21px] py-[11px] min-w-[28px] text-sm leading-normal tarcking-[-.016em] font-semiBold font-bold cursor-pointer rounded-full hover:bg-buthov">${elem.butt}</button>
          </div>
          <div class="caption flex">
            <h1 class="text-xl text-white font-bold">${elem.h1}</h1>
            <p class="text-xl text-white  font-regular">${elem.p}</p>
          </div>
        </div>
      </div>
    </div>`;
    });
    document.querySelector("#slider").innerHTML += slider.join("");
  }
  async Footertext(url) {
    let data = await fetch(url);
    let res = await data.json();
    let footertext = res.map((elem) => {
      return `<p class="text-footertext font-regular text-xs font-normal mb-2">${elem.p}</p>`;
    });
    document.querySelector("#footertext").innerHTML += footertext.join("");
  }
  async Footernav(url) {
    let data = await fetch(url);
    let res = await data.json();
    let footernav = res.map((elem) => {
      return `<nav>
      <ul class="flex flex-col justify-start items-start gap-2">
        <li>
          <a href="#" class="text-xs text-footernavtitle font-bold font-regular">${elem.h3}</a>
        </li>
        <li>
          <a href="#" class="text-xs font-normal font-regular text-footertext hover:underline">${elem.link1}</a>
        </li>
        <li>
          <a href="#" class="text-xs font-normal font-regular text-footertext hover:underline">${elem.link2}</a>
        </li>
        <li>
          <a href="#" class="text-xs font-normal font-regular text-footertext hover:underline">${elem.link3}</a>
        </li>
        <li>
          <a href="#" class="text-xs font-normal font-regular text-footertext hover:underline">${elem.link4}</a>
        </li>
        <li>
          <a href="#" class="text-xs font-normal font-regular text-footertext hover:underline">${elem.link5}</a>
        </li>
        <li>
          <a href="#" class="text-xs font-normal font-regular text-footertext hover:underline">${elem.link6}</a>
        </li>
        <li>
          <a href="#" class="text-xs font-normal font-regular text-footertext hover:underline">${elem.link7}</a>
        </li>
        <li>
          <a href="#" class="text-xs font-normal font-regular text-footertext hover:underline">${elem.link8}</a>
        </li>
        <li>
          <a href="#" class="text-xs font-normal font-regular text-footertext hover:underline">${elem.link9}</a>
        </li>
        <li>
          <a href="#" class="text-xs font-normal font-regular text-footertext hover:underline">${elem.link10}</a>
        </li>
        <li>
          <a href="#" class="text-xs font-normal font-regular text-footertext hover:underline">${elem.link11}</a>
        </li>
      </ul>
    </nav>`;
    });
    document.querySelector("#footernav").innerHTML += footernav.join("");
  }
  async Footernavmd(url) {
    let data = await fetch(url);
    let res = await data.json();
    let footernavmd = res.map((elem) => {
      return `<div class="accordion-content">
      <header>
          <span class="title">${elem.h3}</span>
          <i class="fa-solid fa-plus"></i>
      </header>

      <p class="description">
        <a href="#">${elem.link1}</a>
        <a href="#">${elem.link2}</a>
        <a href="#">${elem.link3}</a>
        <a href="#">${elem.link4}</a>
        <a href="#">${elem.link5}</a>
        <a href="#">${elem.link6}</a>
        <a href="#">${elem.link7}</a>
        <a href="#">${elem.link8}</a>
        <a href="#">${elem.link9}</a>
        <a href="#">${elem.link10}</a>
        <a href="#">${elem.link11}</a>
      </p>
  </div>`;
    });
    document.querySelector("#footernavmd").innerHTML += footernavmd.join("");
  }
}

let menu = new FetchAll();
menu.fetchMenu("https://my-json-server.typicode.com/9nima6/Apple-DB1/menu");

let submenumd = new FetchAll();
submenumd.fetchMenuMd("https://my-json-server.typicode.com/9nima6/Apple-DB1/menu");

let firstproducts = new FetchAll();
firstproducts.firstProducts("https://my-json-server.typicode.com/9nima6/Apple-DB1/firstproducts");

let gridimages = new FetchAll();
gridimages.gridImages("https://my-json-server.typicode.com/9nima6/Apple-DB1/gridproducts");

let slider = new FetchAll();
slider.Slider("https://my-json-server.typicode.com/9nima6/Apple-DB2/slider");

let footertext = new FetchAll();
footertext.Footertext("https://my-json-server.typicode.com/9nima6/Apple-DB2/footertext");

let footernav = new FetchAll();
footernav.Footernav("https://my-json-server.typicode.com/9nima6/Apple-DB2/footernav");

let footernavmd = new FetchAll();
footernavmd.Footernavmd("https://my-json-server.typicode.com/9nima6/Apple-DB2/footernav");
