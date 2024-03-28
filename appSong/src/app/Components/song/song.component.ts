import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Song } from '../../models/song.model';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css'],
})
export class SongComponent implements OnInit {
  @Input() song: Song;
  @Output() Like: EventEmitter<Song> = new EventEmitter<Song>();
  @Output() deleteSong: EventEmitter<Song> = new EventEmitter<Song>();
  @Output() editSong: EventEmitter<Song> = new EventEmitter<Song>();
  @Output() filterSong: EventEmitter<string> = new EventEmitter<string>();
  constructor() {}

  ngOnInit() {}

  onLike() {
    this.Like.emit(this.song);
  }

  onDeleteSong() {
    this.deleteSong.emit(this.song);
  }
  onEditSong() {
    this.editSong.emit(this.song);
  }
  onFilterSong() {
    this.filterSong.emit(this.song.genre);
  }
}
