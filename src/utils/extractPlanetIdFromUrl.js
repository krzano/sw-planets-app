const extractPlanetIdFromUrl = (url) => {
  return url.split("/").slice(-2, -1);
};

export default extractPlanetIdFromUrl;
