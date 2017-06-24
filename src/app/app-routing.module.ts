import { NgModule } from '@angular/core';
import { TabsPage } from './../../../AssetInfo/src/pages/tabs/tabs';
import { Landing2Page } from './../pages/landing2/landing2';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes = [
    {path: 'landing', component : Landing2Page},
    {path: 'app', component:TabsPage}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule{}