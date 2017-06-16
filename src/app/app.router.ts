/**
 * Created by angel on 15/06/2017.
 */
import  {Routes,RouterModule} from '@angular/router' ;
import { ComicComponent } from './components/comic/comic.component';
import { ComicsComponent } from './components/comics/comics.component';

const APP_ROUTES: Routes=[
  {path:'comics', component: ComicsComponent} ,
  {path:'comic/:id', component: ComicComponent},
  {path:'**', pathMatch: 'full',redirectTo: 'comics'}
];

export const APP_ROUTING =RouterModule.forRoot(APP_ROUTES);

