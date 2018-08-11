import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewDesignComponent } from './view-design/view-design.component';
import { CreateDesignComponent } from './create-design/create-design.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'create', pathMatch: 'full' },
  { path: 'create', component: CreateDesignComponent },
  { path: 'view', component: ViewDesignComponent },
];

@NgModule({
  imports: [
    // RouterModule.forRoot(appRoutes, {useHash: true})
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
