import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountListComponent } from './account-list/account-list.component';
import { AccountDetailComponent } from './account-detail/account-detail.component';
import { AccountCreateComponent } from './account-create/account-create.component';
import { AccountEditComponent } from './account-edit/account-edit.component';
import { AccountSummaryComponent } from './account-summary/account-summary.component';

const routes: Routes = [
  { path: '', component: AccountListComponent },
  { path: 'detail', component: AccountDetailComponent },
  { path: 'create', component: AccountCreateComponent },
  { path: 'edit', component: AccountEditComponent },
  { path: 'summary', component: AccountSummaryComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule { }
