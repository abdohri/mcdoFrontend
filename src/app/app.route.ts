
import { SearchMcdosComponent } from './search-mcdos/search-mcdos.component';
export const appRoutes = [
    {
      path: '',
      redirectTo: 'mcdos',
      pathMatch: 'full'
    },
      {
        path: 'mcdos',
        component: SearchMcdosComponent
     }   
  ];