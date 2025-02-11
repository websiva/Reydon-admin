import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ProjectsComponent } from './projects/projects.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './Guard/auth.guard';
import { HomeComponent } from './home/home.component';
import { AddNewProjectComponent } from './add-new-project/add-new-project.component';
import { LayoutPreviewComponent } from './layout-preview/layout-preview.component';
import { ImageToLinkComponent } from './image-to-link/image-to-link.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [authGuard] },
  { path: 'projects', component: ProjectsComponent, canActivate: [authGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'add-new-project', component: AddNewProjectComponent },
  { path: 'layout-preview', component: LayoutPreviewComponent },
  { path: 'image-to-link', component: ImageToLinkComponent },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
