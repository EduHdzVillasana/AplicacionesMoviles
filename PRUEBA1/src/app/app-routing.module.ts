import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';




const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'la', loadChildren: () => import('./la/la.module').then( m => m.LAModule)},
  { path: 'fcfm', loadChildren: () => import('./fcfm/fcfm.module').then( m => m.FCFMCModule)},
  { path: 'licenciaturas', loadChildren: () => import('./licenciaturas/licenciaturas.module').then( m => m.LicenciaturasModule)},
  { path: 'lcc', loadChildren: () => import('./lcc/lcc.module').then( m => m.LccModule)},
  { path: 'lf', loadChildren: () => import('./lf/lf.module').then( m => m.LfModule)},
  { path: 'lm', loadChildren: () => import('./lm/lm.module').then( m => m.LmModule)},
  { path: 'lmya', loadChildren: () => import('./lmya/lmya.module').then( m => m.LmyaModule)},
  { path: 'lsti', loadChildren: () => import('./lsti/lsti.module').then( m => m.LstiModule)},
  { path: 'concurso-in', loadChildren: () => import('./concurso-in/concurso-in.module').then( m => m.ConcursoInModule)},
  { path: 'solicitar-inf', loadChildren: () => import('./solicitar-inf/solicitar-inf.module').then( m => m.SolicitarInfModule)},
  { path: 'modal-actuaria', loadChildren: () => import('./modal-actuaria/modal-actuaria.module').then( m => m.ModalActuariaModule)},
  { path: 'contacto', loadChildren: () => import('./contacto/contacto.module').then( m => m.ContactoModule)}
  


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
