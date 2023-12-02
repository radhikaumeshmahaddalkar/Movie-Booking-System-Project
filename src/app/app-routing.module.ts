import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AddmovieComponent } from './components/addmovie/addmovie.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { BookingComponent } from './components/booking/booking.component';

import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MovieDescriptionComponent } from './components/movie-description/movie-description.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { DashboardComponent } from './crud/dashboard/dashboard.component';
import { MovieDashboardComponent } from './crud/movie-dashboard/movie-dashboard.component';
import { MovieEditComponent } from './crud/movie-edit/movie-edit.component';
import { RegisterEditComponent } from './crud/register-edit/register-edit.component';
import { AuthGuard } from './shared/guards/auth.guard';


const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "about-us", component: AboutUsComponent },
  { path: "contact", component: ContactComponent },
  {path: "MovieDescription", component: MovieDescriptionComponent, canActivate: [AuthGuard]},
  {path: "booking", component:BookingComponent},
  {path: "booking/:id", component: BookingComponent},
  { path: "login", component: LoginComponent },
  { path: "registration", component: RegistrationComponent },
  { path: "admin-dashboard", component: AdminDashboardComponent },
  { path: "addmovie", component: AddmovieComponent, canActivate: [AuthGuard]},
  { path: "crud", loadChildren: () => import("./crud/crud.module").then((m) => m.CrudModule) },
  { path: "**", component: PageNotFoundComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
