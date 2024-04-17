export interface List{
    _id?: string,
    hostId?: string,
    name?: string,
    address?: [string],
    photos?: [string],
    description?: string,
    listIconId?: string,
    extraInfo?: string,
    checkIn?: number,
    checkOut?: number,
    minimum_nights?: number,
    maximum_nights?: number,
    guests_included?: number,
    bedrooms?: number,
    beds?: number,
    bathrooms?: number
};