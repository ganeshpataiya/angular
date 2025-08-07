<<<<<<< HEAD
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Home } from './features/home/home';
import { About } from './features/about/about';
import { Contact } from './features/contact/contact';
import { NotFound } from './features/not-found/not-found';


export const routes: Routes = [
    {
        path: '',
        component: Home,
        title: 'Home',
    },
    {
        path: 'about',
        component: About,
        title: 'About',
    },
    {
        path: 'contact',
        component: Contact,
        title: 'Conact',
    },
    {
        path: '**',
        component: NotFound
    }
];



@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
=======
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Home } from './features/home/home';
import { About } from './features/about/about';
import { Contact } from './features/contact/contact';
import { NotFound } from './features/not-found/not-found';


export const routes: Routes = [
    {
        path: '',
        component: Home,
        title: 'Home',
    },
    {
        path: 'about',
        component: About,
        title: 'About',
    },
    {
        path: 'contact',
        component: Contact,
        title: 'Conact',
    },
    {
        path: '**',
        component: NotFound
    }
];



@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
>>>>>>> 7013c006dfc7704393f517a3689a3bcb8794558d
export class AppRoutingModule { }