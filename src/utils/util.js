function genresWords(details) {
  let genWords = "";
  if (details.genres) {
    for (const genr of details.genres) {
      // console.log(genr.name);
      genWords += `${genr.name} `;
    }
    return genWords;
  }
}
 
export default genresWords;