import { Injectable } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { Song } from '../app/models/song.model';

@Injectable({
  providedIn: 'root',
})
export class SongService {
  songs: Song[] = songsData;
  songFiltered:Song[]=songsData;

  constructor() {}
  deleteSong(idSong: number) {
    this.songs = this.songs.filter((song) => song.id != idSong);
  }
  generateId() {
    const maxId = Math.max(...this.songs.map((song) => song.id));
    return maxId + 1;
  }

  addSong(song: Song) {
    this.songs.unshift(song);
  }
  getSongById(idSong: number) {
    return this.songs.find((song) => song.id == idSong)!;
  }
  updateSong(songToUpdate: Song) {
    this.songs = this.songs.map((song) =>
      song.id == songToUpdate.id ? songToUpdate : song
    );
  }
  filteredSongByGenre(songFiltered: string) {
    return this.songs.filter((song) => song.genre == songFiltered);
  }
}
const songsData: Song[] = [
  {
    id: 1,
    title: 'We Are the Champions',
    artist: 'Queen',
    duration: 180,
    genre: 'POP',
    createdDate: new Date('07-10-1977 07:34:39'),
    lastModifiedDate: new Date('13-12-2022 07:34:39'),
  },
  {
    id: 2,
    title: 'Back in Black',
    artist: 'AC/DC',
    duration: 255,
    genre: 'ROCK',
    createdDate: new Date('07-10-1977 07:34:39'),
    lastModifiedDate: new Date('15-09-2022 16:42:12'),
  },
  {
    id: 3,
    title: 'Gente di mare',
    artist: 'Umberto Tozzi & Raf',
    duration: 219,
    genre: 'POP',
    createdDate: new Date('07-10-1977 07:34:39'),
    lastModifiedDate: new Date('08-11-2021 18:03:27'),
  },
  {
    id: 4,
    title: 'Lose Yourself',
    artist: 'Eminem',
    duration: 321,
    genre: 'HIP-HOP',
    createdDate: new Date('07-10-1977 07:34:39'),
    lastModifiedDate: new Date('05-03-2023 09:48:05'),
  },
  {
    id: 5,
    title: 'Friends in Low Places',
    artist: 'Garth Brooks',
    duration: 284,
    genre: 'COUNTRY',
    createdDate: new Date('07-10-1977 07:34:39'),
    lastModifiedDate: new Date('29-01-2022 11:20:34'),
  },
  {
    id: 6,
    title: 'Take Five',
    artist: 'Dave Brubeck Quartet',
    duration: 324,
    genre: 'JAZZ',
    createdDate: new Date('07-10-1977 07:34:39'),
    lastModifiedDate: new Date('18-07-2021 08:15:59'),
  },
];
