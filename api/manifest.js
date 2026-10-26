module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json; charset=utf-8');

  const manifest = {
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
  };
  return res.status(200).json(manifest);
};