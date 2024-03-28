import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Song, allSongGenres } from '../../models/song.model';
import { SongService } from '../../song.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-song-filter',
  templateUrl: './song-filter.component.html',
  styleUrls: ['./song-filter.component.css'],
})
export class SongFilterComponent implements OnInit {
  // isFiltered: boolean;
  // songToFilter: string;
  // song: Song;

  // songGenre: string;
  filterByThisGenre: string = 'POP';
  songsFiltered: Song[];
  // @Output() filterSong: EventEmitter<string> = new EventEmitter<string>();
  constructor(
    public songService: SongService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.songsFiltered = this.songService.filteredSongByGenre(
      this.filterByThisGenre
    );
    console.log(JSON.stringify(this.songsFiltered));
    /* if (this.isFiltered) {
      this.songService.filteredSongByGenre(this.songToFilter);
    } */
  }
  /*  onFilterSongByGenre() {
    this.filterSong.emit(this.song.genre);
  } */
}
