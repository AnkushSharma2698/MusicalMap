import axios from "axios";


export function retrieveArtistCard(spotifySearchURL, artistName, accessToken ) {
    axios
    .get(
      `${spotifySearchURL}${artistName}&type=artist&access_token=${accessToken}`
    )
    .then(response => {
      console.log(response);
      console.log(response.data.artists.items[0].name);
      return {

     
        imageLink: response.data.artists.items[0].images[0].url,
        artist_Name: response.data.artists.items[0].name,
        followers: response.data.artists.items[0].followers.total
      }
      console.log(this.state.followers);
    })
    .catch(error => {
      console.log(error);
    });
}



