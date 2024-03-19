const COHORT = "2402-FTB-ET-WEB-FT";
const API_URL = `https://fsa-crud-2aa9294fe819.herokuapp.com/api/${COHORT}/events`;

const state = {
  events: [],
};

const eventList = document.querySelector("#events");

async function render() {
  await getEvents();
  renderEvents();
}

async function getEvents() {
  try {
    const response = await fetch(API_URL);
    const json = await response.json();
    state.events = json.data;
  } catch (error) {
    console.error(error);
  }
}


function renderEvents() {
  const eventCards = state.events.map((event) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <h2>Event Name: ${event.name.toUpperCase()}</h2>
      <p>Event Description:${event.description}</p>
      <p>Event Date/Time:${event.date}</p>
      <p>Event Location:${event.location}</p>
    `;
    return li;
  });

  eventList.replaceChildren(...eventCards);
}

render();