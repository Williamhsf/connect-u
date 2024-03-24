const companyMembers = [
  {
    image: "https://randomuser.me/api/portraits/women/91.jpg",
    name: "Olivia Rhye",
    profession: "Fundador & CEO",
    about: "Ex-cofundador da Opendoor. Equipe inicial do Spotify e Clearbit."
},
{
  image: "https://randomuser.me/api/portraits/men/91.jpg",
  name: "Phoenix Baker",
  profession: "Engineering Manager",
  about: "ELiderar equipes de engenharia nos laboratórios Figma, Pitch e Protocol."
},

{
  image: "https://randomuser.me/api/portraits/women/62.jpg",
  name: "Lana Steiner",
  profession: "Product Manager",
  about: "Ex-PM da Linear, Lambda School e On Deck."
},

{
  image: "https://randomuser.me/api/portraits/women/69.jpg",
  name: "Demi Wilkinson",
  profession: "Frontend Developer",
  about: "Ex-desenvolvedor frontend para Linear, Coinbase e Postscript."
},

{
  image: "https://randomuser.me/api/portraits/women/80.jpg",
  name: "Candice Wu",
  profession: "Backend Developer",
  about: "Líder de desenvolvimento de back-end na Clearbit. Ex-Clearbit e Loom."
},

{
  image: "https://randomuser.me/api/portraits/women/34.jpg",
  name: "Natali Craig",
  profession: "Product Designer",
  about: "Fundadora da equipe de design da Figma. Ex-Pleo, Stripe e Tile."
},

{
  image: "https://randomuser.me/api/portraits/men/62.jpg",
  name: "Drew Cano",
  profession: "UX Researcher",
  about: "Lidera pesquisas de usuários para o Slack. Contratante da Netflix e Udacity."
},

{
  image: "https://randomuser.me/api/portraits/men/35.jpg",
  name: "Orlando Diggs",
  profession: "Customer Success",
  about: "Lidera CX na Wealthsimple. Ex-PagerDuty e Sqreen."
}
]

function showPeople() {
  // criar um container
  const container = document.getElementById("teamContainer");

  // criar um for para chamar nosso grupo de pessoas
  companyMembers.forEach(member => {
    // criamos card
    const card = document.createElement("div");
    card.classList.add("card");

    // adicionamos imagem
    const image = document.createElement("img");
    image.src = member.image;
    image.alt = `${member.nome} - imagem`;

    // adicionamos nome
    const nameSpan = document.createElement("span");
    nameSpan.classList.add("name");
    nameSpan.textContent = member.name;

    // adicionamos profissão
    const professionSpan = document.createElement("span");
    professionSpan.classList.add("profession");
    professionSpan.textContent = member.profession;

    // adicionamos sobre
    const aboutSpan = document.createElement("span");
    aboutSpan.classList.add("about");
    aboutSpan.textContent = member.about;

    card.appendChild(image);
    card.appendChild(nameSpan);
    card.appendChild(professionSpan);
    card.appendChild(aboutSpan);

    container.appendChild(card);
  });
}

showPeople();