const episodes = [
    {
      ep: 1,
      img: "../assets/images/episodes/episode1.svg",
      title: "When You're Lost in the Darkness",
      description:
        " In 2003, a mass fungal infection of mutated Cordyceps sparks a global pandemic. Joel flees with his daughter, Sarah, and brother, Tommy, from their Texas home; Sarah is killed by asoldier.",
    },
  
    {
      ep: 2,
      img: "../assets/images/episodes/episode2.svg",
      title: "Infected",
      description:
        " Two days before the worldwide outbreak, in Jakarta, Indonesia, the government shows an infected corpse to a mycologist, who tells them there is no cure or vaccine.",
    },
    {
      ep: 3,
      img: "../assets/images/episodes/episode3.svg",
      title: "Long, Long Time",
      description:
        " Joel and Ellie begin the hike to meet with Bill and Frank. Ellie sees evidence of the government's execution of innocents during the early days of the pandemic.",
    },
    {
      ep: 4,
      img: "../assets/images/episodes/episode4.svg",
      title: "Please Hold to My Hand",
      description:
        " Traveling through Missouri, Joel and Ellie are forced to take a detour through Kansas City, where they are ambushed.",
    },
    {
      ep: 5,
      img: "../assets/images/episodes/episode5.jpg",
      title: "Endure and Survive",
      description:
        "Henry and Sam make a tentative truce with Joel and Ellie. Joel wants to part ways, but Henry proposes they escape the city together using underground tunnel routes that only Henry knows; Joel hesitantly agrees.",
    },
    {
      ep: 6,
      img: "../assets/images/episodes/episode6.jpg",
      title: "Kin",
      description:
        "Three months after Henry and Sam's deaths, Joel and Ellie reach a small, thriving community in Jackson, Wyoming, where Joel is reunited with Tommy, whose wife Maria is pregnant. Ellie learns about Sarah's fate from Maria.",
    },
    {
      ep: 7,
      img: "../assets/images/episodes/episode7.jpg",
      title: "Left Behind",
      description:
        "Ellie and an injured Joel shelter in an abandoned house. As Joel approaches death, he urges Ellie to leave him. Ellie remembers her time in FEDRA military school, which she attended with her best friend Riley.",
    },
    {
      ep: 8,
      img: "../assets/images/episodes/episode8.jpg",
      title: "When We Are in Need",
      description:
        "Ellie leaves Joel, who is still recovering, to hunt for food. After shooting a deer, she tracks the wounded animal and encounters a preacher, David, and his fellow hunter James.",
    },
    {
      ep: 9,
      img: "../assets/images/episodes/episode9.jpg",
      title: "Look fot the Light",
      description:
        "In a flashback, Ellie's mother Anna is bitten by an infected as she gives birth to Ellie. She is found by Marlene, who hesitantly takes Ellie and kills Anna, at the latter's request.",
    },
  ];
  
  //1. acessar a lista de produtos através do DOM
  const list = document.querySelector(".episodes-list");
  
  //2. Criar uma função para percorrer todo os meus episódios que estão listadas na variável episodes
  
  function addCard(episodes) {
    for (let i = 0; i < episodes.length; i++) {
      //3. Criar uma função que renderize epidio a episodia
  
      renderCard(episodes[i]);
    }
  }
  
  addCard(episodes);
  
  function renderCard(episodio) {
    const listItem = document.createElement("li");
    listItem.classList.add("card");
  
    listItem.innerHTML = `
    <img
    src=${episodio.img}
    alt=${episodio.title}
  />
  <div class="card-text">
    <h4>${episodio.title}</h4>
    <p>
    ${episodio.description}
    </p>
  </div>
    `;
  
    list.appendChild(listItem);
  }
  