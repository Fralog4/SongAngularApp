import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SongListComponent } from './Components/song-list/song-list.component';
import { SongService } from '../app/song.service';

import { SongComponent } from './Components/song/song.component';
import { FormsModule } from '@angular/forms';
import { SongFormComponent } from './Components/song-form/song-form.component';
import { SongFilterComponent } from './Components/song-filter/song-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    SongComponent,
    SongListComponent,
    SongFormComponent,
    SongFilterComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [SongService],
  bootstrap: [AppComponent],
})
export class AppModule {}
