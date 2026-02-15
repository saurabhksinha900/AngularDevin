import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { UserRolesComponent } from './user-roles/user-roles.component';

const routes: Routes = [
  { path: '', component: UserListComponent },
  { path: 'detail', component: UserDetailComponent },
  { path: 'profile', component: UserProfileComponent },
  { path: 'settings', component: UserSettingsComponent },
  { path: 'roles', component: UserRolesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
