import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';

const routes: Routes = [
  {
    path: "", component: HomeComponent, pathMatch: 'full'
  },
  {
    path: "login", component: LoginComponent, pathMatch: 'full'
  },
  {
    path: "graduate",
    loadChildren: "./Components/graduate/graduate-routing.module#GraduateLazyModule"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
