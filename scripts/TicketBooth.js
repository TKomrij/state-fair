const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")


eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "rideTicket") {
        const customEvent = new CustomEvent("rideTicketPurchased", {
            detail: {
                ticket: `<div class="person rider"></div>`
            }
        })
        eventHub.dispatchEvent(customEvent)
        } 
    })

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "foodTicket") {
        const customEvent = new CustomEvent("foodTicketPurchased", {
            detail: {
                ticket: `<div class="person eater"></div>`
            }
        })
        eventHub.dispatchEvent(customEvent)
    } 
})

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "gameTicket") {
        const customEvent = new CustomEvent("gameTicketPurchased", {
            detail: {
                ticket: `<div class="person player"></div>`
            }
        })
        eventHub.dispatchEvent(customEvent)
    } 
})

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "sideshowTicket") {
        const customEvent = new CustomEvent("sideshowTicketPurchased", {
            detail: {
                ticket: `<div class="person gawker"></div>`
            }
        })
        eventHub.dispatchEvent(customEvent)
    } 
})

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "fullPackageTicket") {
        const customEvent = new CustomEvent("fullPackageTicketPurchased", {
            detail: {
                ticket: `<div class="person bigSpender"></div>`
            }
        })
        eventHub.dispatchEvent(customEvent)
    } 
})

export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
            <button id="rideTicket">Ride Ticket</button>
            <button id="foodTicket">Food Ticket</button>
            <button id="gameTicket">Game Ticket</button>
            <button id="sideshowTicket">Sideshow Ticket</button>
            <button id="fullPackageTicket">Full Package Ticket</button>
        </div>

    `
}




