import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Song, allSongGenres } from '../../models/song.model';
import { SongService } from '../../song.service';

@Component({
  selector: 'app-song-form',
  templateUrl: './song-form.component.html',
  styleUrls: ['./song-form.component.css'],
})
export class SongFormComponent implements OnInit {
  songGenre = allSongGenres;
  isEdit: boolean;
  isFiltered: boolean;
  songToEdit: Song;
  songToFilter: string;
  formData: any = {
    songTitle: '',
    songArtist: '',
    songDuration: '',
    songGenre: '',
  };

  constructor(
    public songService: SongService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.isEdit = this.activatedRoute.snapshot.url[0].path == 'edit';
    this.isFiltered = this.activatedRoute.snapshot.url[0].path == 'filter';
    if (this.isEdit) {
      const songId = this.activatedRoute.snapshot.params.id;
      console.log(songId);
      this.songToEdit = this.songService.getSongById(songId);
      console.log(
        `la canzone da modificare è ${JSON.stringify(this.songToEdit)}`
      );
      if (this.songToEdit) {
        this.setEditMode(this.songToEdit);
      }
    }
  }

  setEditMode(song: Song) {
    this.formData = {
      songTitle: song.title,
      songArtist: song.artist,
      songGenre: song.genre,
      songDuration: song.duration,
    };
  }
  submitForm(form: NgForm) {
    console.log(`Form values: ${JSON.stringify(form.value)}`);
    Object.keys(form.controls).forEach((controlKey) =>
      form.controls[controlKey].markAsTouched()
    );
    if (form.valid) {
      const songFromForm = form.value;
      const songToAdd: Song = {
        id: this.isEdit ? this.songToEdit.id : this.songService.generateId(),
        title: songFromForm.songTitle,
        artist: songFromForm.songArtist,
        duration: songFromForm.songDuration,
        genre: songFromForm.songGenre,
        createdDate: new Date(),
        lastModifiedDate: new Date(),
      };
      if (this.isEdit) {
        this.songService.updateSong(songToAdd);
      } else {
        this.songService.addSong(songToAdd);
      }
      this.router.navigate(['/list']);
    } else {
      window.alert('Form has error.');
    }
  }
}
