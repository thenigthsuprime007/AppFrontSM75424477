import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { MenuComponent } from './menu/menu.component';
import {  ListaPostsComponent } from './menu/post-list/post-list.component';
import { UsersListComponent } from './menu/users-list/users-list.component';


export const routes: Routes = [
   
    {path:"auth",component: AuthComponent},
    {path:"menu",component: MenuComponent},

    {path:"",redirectTo: "auth",pathMatch: "full"},

    {path:"posts",component: ListaPostsComponent},
    {path:"users",component: UsersListComponent}

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }