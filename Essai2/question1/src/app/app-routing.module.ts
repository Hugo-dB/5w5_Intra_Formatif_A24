import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CatComponent } from './cat/cat.component';
import { DogComponent } from './dog/dog.component';
import { connectedGuard } from './guards/connected.guard';
import { catLoverGuard } from './guards/cat-lover.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'cat', component: CatComponent, canActivate: [connectedGuard, catLoverGuard] },
  { path: 'dog', component: DogComponent, canActivate: [connectedGuard] },
  { path: 'home', component: HomeComponent, canActivate: [connectedGuard] },
  { path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
