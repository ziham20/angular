import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './home/home.component'
import { ContactComponent } from './contact/contact.component'
import { ProfileComponent} from './profile/profile.component'
import { CompanyDetailsComponent } from './company-details/company-details.component'
import { PageNotFoundComponent  } from './page-not-found/page-not-found.component'

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent },
  {
    path: 'contact', component: ContactComponent,
    children:
    [
      {path: '', redirectTo: 'profile', pathMatch: 'full' },
      {path: 'profile', component: ProfileComponent},
      {path: 'company', component: CompanyDetailsComponent},
      {path: '**', redirectTo: 'profile', pathMatch: 'full'  }
    ]

},
  {path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
