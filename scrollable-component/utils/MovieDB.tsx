export interface Movie {
    id: number;
    title: string;
    subtitle: string;
    rating: number;
    genre: string;
    image: number;
}

export const movies: Movie[] = [
    {
        id: 1,
        title: "Avengers",
        subtitle: "Earth's Mightiest Heroes",
        rating: 8.5,
        genre: "Action",
        image: require("../assets/avengers.jpg")
    },
    {
        id: 2,
        title: "Iron Man",
        subtitle: "The Armored Avenger",
        rating: 8.2,
        genre: "Sci-Fi",
        image: require("../assets/ironman.jpg")
    },
    {
        id: 3,
        title: "Thor",
        subtitle: "The God of Thunder",
        rating: 7.9,
        genre: "Fantasy",
        image: require("../assets/thor.jpg")
    },
    {
        id: 4,
        title: "Captain America",
        subtitle: "The First Avenger",
        rating: 8.0,
        genre: "Action",
        image: require("../assets/captainamerica.jpg")
    },
    {
        id: 5,
        title: "Captain Marvel",
        subtitle: "Higher, Further, Faster",
        rating: 6.9,
        genre: "Adventure",
        image: require("../assets/captainmarvel.jpg")
    },
    {
        id: 6,
        title: "Dr. Strange",
        subtitle: "Master of the Mystic Arts",
        rating: 7.6,
        genre: "Fantasy",
        image: require("../assets/drstrange.jpg")
    },
    {
        id: 7,
        title: "Spiderman",
        subtitle: "The Friendly Neighborhood Hero",
        rating: 8.1,
        genre: "Action",
        image: require("../assets/spiderman.jpeg")
    }
];