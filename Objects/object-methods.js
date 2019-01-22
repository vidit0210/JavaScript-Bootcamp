//this -Access property inside the fuunction
let restaurant = {
    name: 'McD',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailabilty(partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount
        return partySize <= seatsLeft
    },
    SeatedParty(partySize) {
        this.guestCount += partySize
    },
    RemoveParty(partySize) {
        this.guestCount -= partySize
    }
}
//SeatedParty
//RemoveParty
console.log(restaurant.SeatedParty(75))
console.log(restaurant.RemoveParty(20))
console.log(restaurant.checkAvailabilty(10))