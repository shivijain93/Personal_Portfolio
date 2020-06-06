import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';

import { ContactComponent } from './contact/contact.component';
import { ReferencesComponent } from './references/references.component';


const routes: Routes = [
  {
    path : '',
    component: HomeComponent
  },
  {
    path : 'about',
    component: AboutComponent
  },
  {
    path : 'experience',
    component: ExperienceComponent
  },
  {
    path : 'education',
    component: EducationComponent
  },
  {
    path : 'references',
    component: ReferencesComponent
  },
  {
    path : 'projects',
    component: ProjectsComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'skills',
    component: SkillsComponent
  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
