import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from '../shared/guards/auth.guard';
import { RegisterEditComponent } from './register-edit/register-edit.component';
import { MovieDashboardComponent } from './movie-dashboard/movie-dashboard.component';
import { MovieEditComponent } from './movie-edit/movie-edit.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'register-edit', component: RegisterEditComponent },
  { path: 'register-edit/:id', component: RegisterEditComponent },
  { path: 'movie-dashboard', component: MovieDashboardComponent},
  {path: 'movie-edit', component:MovieEditComponent},
  {path: 'movie-edit/:id', component:MovieEditComponent}

];




@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudRoutingModule { }
