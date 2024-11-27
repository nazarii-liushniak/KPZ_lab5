export interface Booking {
    id: number,
    guestId: number,
    hotelId: number,
    checkInDate: string,
    checkOutDate: string,
    totalPrice: number
}