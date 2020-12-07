const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")

eventHub.addEventListener("click", customEvent => {
    const userChoiceElement = document.querySelector(".rides")
    userChoiceElement.innerHTML += customEvent.detail.selectedTicket
})

export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
            <button id="rideTicket">Ride Ticket</button>
        </div>

    `
}

