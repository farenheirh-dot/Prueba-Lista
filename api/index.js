const { addonBuilder, serveHTTP } = require("stremio-addon-sdk");

const builder = new addonBuilder({
  id: "com.xperience.top10netflixcolombia",
  version: "1.0.0",
  name: "Top 10 Netflix Colombia",
  description: "Catálogo con las películas del Top 10 de Netflix en Colombia",
  resources: ["catalog"],
  types: ["movie"],
  catalogs: [
    {
      type: "movie",
      id: "top10_netflix_colombia",
      name: "Top 10 Netflix Colombia"
    }
  ],
  idPrefixes: ["tt"]
});

builder.defineCatalogHandler((args) => {
  if (args.type === "movie" && args.id === "top10_netflix_colombia") {
    return Promise.resolve({
      metas: [
        {
          id: "tt30896300",
          type: "movie",
          name: "1. Animales",
          poster: "https://image.tmdb.org/t/p/w500/v9EAn9dM2G8B4gK0P8x0k2m6Z5.jpg",
          description: "Top 1 en Netflix Colombia. Thriller policíaco y suspenso."
        },
        {
          id: "tt22936402",
          type: "movie",
          name: "2. Con todos menos contigo",
          poster: "https://image.tmdb.org/t/p/w500/1XG243S3pP8v9K89Yq4cE5E7gJ6.jpg",
          description: "Top 2 en Netflix Colombia. Comedia romántica."
        },
        {
          id: "tt0121164",
          type: "movie",
          name: "3. El cadáver de la novia",
          poster: "https://image.tmdb.org/t/p/w500/e9C1X1X22p0G8p4d5j9X7w4Z9Y.jpg",
          description: "Top 3 en Netflix Colombia. Animación y fantasía de Tim Burton."
        },
        {
          id: "tt27911306",
          type: "movie",
          name: "4. Las cartas de la vida",
          poster: "https://image.tmdb.org/t/p/w500/m9D8M5N3L2K1J0A9B8C7D6E5F4.jpg",
          description: "Top 4 en Netflix Colombia. Drama original de Netflix."
        },
        {
          id: "tt2772942",
          type: "movie",
          name: "5. La era de hielo: Choque de mundos",
          poster: "https://image.tmdb.org/t/p/w500/9gA1S2D3F4G5H6J7K8L9M0N1P2.jpg",
          description: "Top 5 en Netflix Colombia. Animación familiar."
        },
        {
          id: "tt16492200",
          type: "movie",
          name: "6. Tormenta Ácida",
          poster: "https://image.tmdb.org/t/p/w500/k2L3M4N5P6Q7R8S9T0U1V2W3X4.jpg",
          description: "Top 6 en Netflix Colombia. Thriller de supervivencia."
        },
        {
          id: "tt0989984",
          type: "movie",
          name: "7. La era de hielo 3: El origen de los dinosaurios",
          poster: "https://image.tmdb.org/t/p/w500/x1Y2Z3A4B5C6D7E8F9G0H1I2J3.jpg",
          description: "Top 7 en Netflix Colombia. Animación."
        },
        {
          id: "tt10327030",
          type: "movie",
          name: "8. La Purga Por Siempre",
          poster: "https://image.tmdb.org/t/p/w500/l2M3N4O5P6Q7R8S9T0U1V2W3X4.jpg",
          description: "Top 8 en Netflix Colombia. Acción y terror distópico."
        },
        {
          id: "tt0268380",
          type: "movie",
          name: "9. La era de hielo",
          poster: "https://image.tmdb.org/t/p/w500/m1N2O3P4Q5R6S7T8U9V0W1X2Y3.jpg",
          description: "Top 9 en Netflix Colombia. Clásico de animación."
        },
        {
          id: "tt1542344",
          type: "movie",
          name: "10. La era de hielo 4",
          poster: "https://image.tmdb.org/t/p/w500/p1Q2R3S4T5U6V7W8X9Y0Z1A2B3.jpg",
          description: "Top 10 en Netflix Colombia. Animación familiar."
        }
      ]
    });
  }
  return Promise.resolve({ metas: [] });
});

const addonInterface = builder.getInterface();

// Exportación compatible con funciones serverless de Vercel
module.exports = function (req, res) {
  serveHTTP(addonInterface, { req, res, cache: 0 });
};
