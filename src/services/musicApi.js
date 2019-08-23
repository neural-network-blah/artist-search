const corsURL = '';

const musicApi = {
  findArtists(search, page){
    return fetch(`${corsURL}http://musicbrainz.org/ws/2/artist?query=${search}&fmt=json&limit=25&offset=${(page - 1) * 25}`)
      .then(res => {
        if(!res.ok) throw 'No artists found';
        return res.json();
      })
      .then(json => json);
  },
  getArtistReleases(artistId){
    return fetch(`${corsURL}http://musicbrainz.org/ws/2/release?artist=${artistId}&fmt=json`)
      .then(res => {
        if(!res.ok) throw 'No releases found';
        return res.json();
      })
      .then(json => json.releases);
  },
  getReleaseCover(releaseId){
    return fetch(`${corsURL}http://coverartarchive.org/release/${releaseId}/front`)
      .then(res => {
        if(!res.ok) throw 'No cover art found';
        const imageUrl = res.url.split('https://cors-anywhere.herokuapp.com/')[1];
        return imageUrl;
      });
  },
  getReleaseRecordings(releaseId){
    return fetch(`${corsURL}http://musicbrainz.org/ws/2/recording?release=${releaseId}&fmt=json`)
      .then(res => {
        if(!res.ok) throw 'No recordings found';
        return res.json();
      })
      .then(json => ({
        recordings: json.recordings
      }));
  },
  getRecordingLyrics(artistId, title){
    const artist = musicApi.findArtists(artistId).artist.name;

    return fetch(`${corsURL}https://api.lyrics.ovh/v1/${artist}/${title}`)
      .then(res => {
        if(!res.ok) throw 'The Lyrics are not to be found!!';
        return res.json();
      })
      .then(json => ({
        lyrics: json.lyrics
      }));
  }
};

export default musicApi;
