import { Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/details/details.component';
import { PollsComponent } from './components/polls/polls.component';

export const routes: Routes = [
    {
        path: '',
        component: LandingPageComponent
    },
    {
        path: 'home',
        component: HomeComponent,
        children:[
            {
                path: 'polls',
                component: PollsComponent
            },
            {
                path: 'details/:id?',
                component: DetailsComponent
            }
        ]
    }
];
