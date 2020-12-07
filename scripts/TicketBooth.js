const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")

const ticketSelectedEvent = new CustomEvent("ticketSelected", {
    detail: {
        selectedTicket: "Ride"
    }
})
eventHub.dispatchEvent(ticketSelectedEvent)


eventHub.addEventListener("ticketSelected", customEvent => {
    contentTarget.innerHTML = customEvent.detail.selectedTicket
})







// eventHub.addEventListener("click", event => {
//     if(event.target.id === "rideTicket")
//     const rideEvent = new CustomEvent("rideTicketPurchased", {
//         detail: {
//             ticket: event.target.value
//         }
//     })
 
//     eventHub.dispatchEvent(rideEvent)
// })


export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
            <button id="rideTicket">Ride Ticket</button>
        </div>

    `
}

// const userChoiceElement = document.querySelector(".rides")
// userChoiceElement.innerHTML = event.detail.ticket