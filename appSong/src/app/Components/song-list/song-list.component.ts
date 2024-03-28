import { Component, OnInit } from '@angular/core';
import { SongService } from '../../song.service';
import { NgForm } from '@angular/forms';
import { Song } from '../../models/song.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css'],
})
export class SongListComponent implements OnInit {
  constructor(public songService: SongService, private router: Router) {}

  ngOnInit() {}

  onLikeSongReceived(song: Song) {
    //console.log(`hai ricevuto `);
    alert(`‘A Francesco piace la canzone <nome-della-canzone>’ ${song.title}`);
  }

  onDeleteReceived(song: Song) {
    this.songService.deleteSong(song.id);
  }
  onEditReceived(song: Song) {
    console.log(`voglio modificare la canzone ${song.title}`);
    this.router.navigate(['/edit', song.id]);
  }
}
