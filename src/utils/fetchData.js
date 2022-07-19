export const exerciseOptions ={
  
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
  headers: {
    'X-RapidAPI-Key': '4e7885de2bmshc552beca0189659p17a341jsna3f914ada1f7',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }

}

export const youtubeOptions = {
  method: 'GET',
  
 
  headers: {
    'X-RapidAPI-Key': '4e7885de2bmshc552beca0189659p17a341jsna3f914ada1f7',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};


export const fetchData = async ( url, options) =>{
    const response = await fetch(url , options);
    const data = await response.json();

    return data;
}