import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SongFilterComponent } from './Components/song-filter/song-filter.component';
import { SongFormComponent } from './Components/song-form/song-form.component';
import { SongListComponent } from './Components/song-list/song-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'add', component: SongFormComponent },
  { path: 'list', component: SongListComponent },
  { path: 'edit/:id', component: SongFormComponent },
  { path: 'filter', component: SongFilterComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
