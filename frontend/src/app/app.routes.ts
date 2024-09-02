import { Routes } from '@angular/router';
import { UserTypeFormComponent } from './user-type-form/user-type-form.component';
import { UserTypeListComponent } from './user-type-list/user-type-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserListComponent } from './user-list/user-list.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'user-types', component: UserTypeListComponent },
  { path: 'user-types/form', component: UserTypeFormComponent },
  { path: 'user/form', component: UserFormComponent },
  { path: 'users', component: UserListComponent },
];
