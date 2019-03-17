let restaurant  = {
    name:"Flute",
    guestCapacity :100,
    guestCount :0,
    checkAvailability:function(partySize){
        let seatsLeft = this.guestCapacity - this.guestCount;
        return partySize<=seatsLeft
    },
    seatParty:function(partySize){
        this.guestCount=this.guestCount + partySize;
    },
    removeParty:function(partySize){
        this.guestCount = this.guestCount - partySize;
    }
}
