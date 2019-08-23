const corsURL = 'https://cors-anywhere.herokuapp.com/';

const musicApi = {
  findArtists(search){
    return fetch(`${corsURL}http://musicbrainz.org/ws/2/artist?query=${search}&fmt=json&limit=25`, {
      headers: {
        origins: null
      }
    })
      .then(res => {
        if(!res.ok) throw 'No artists found';
        return res.json();
      })
      .then(json => json.artists);
  },
  getArtistReleases(artistId){
    return fetch(`${corsURL}http://musicbrainz.org/ws/2/release?artist=${artistId}&fmt=json`, {
      headers: {
        origins: null
      }
    })
      .then(res => {
        if(!res.ok) throw 'No releases found';
        return res.json();
      })
      .then(json => json.releases);
  },
  getReleaseCover(releaseId){
    return fetch(`${corsURL}http://coverartarchive.org/release/${releaseId}/front`, {
      headers: {
        origins: null
      }
    })
      .then(res => {
        if(!res.ok) throw 'No cover art found';
        const imageUrl = res.url.split('https://cors-anywhere.herokuapp.com/')[1];
        return imageUrl;
      });
  },
  getReleaseRecordings(releaseId){
    return fetch(`${corsURL}http://musicbrainz.org/ws/2/recording?release=${releaseId}&fmt=json`, {
      headers: {
        origins: null
      }
    })
      .then(res => {
        if(!res.ok) throw 'No recordings found';
        return res.json();
      })
      .then(json => json.recordings);
  },
  getRecordingLyrics(artist, title){
    return fetch(`${corsURL}https://api.lyrics.ovh/v1/${artist}/${title}`, {
      headers: {
        origins: null
      }
    })
      .then(res => {
        if(!res.ok) throw 'The Lyrics are not to be found!!';
        return res.json();
      })
      .then(json => json.lyrics);
  }
};

export default musicApi;
