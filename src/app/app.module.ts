import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HomeComponent} from './home/home.component';
import {Routes, RouterModule} from '@angular/router';
import {MdTabsModule, MdGridListModule, MdProgressBarModule} from '@angular/material';
import {ProgressionComponent} from './progression/progression.component';
import { StatusComponent } from './progression/status/status.component';

const routes: Routes = [
    {path: '', component: HomeComponent}
];

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ProgressionComponent,
        StatusComponent
    ],
    imports: [
        // Routing.
        RouterModule.forRoot(routes),

        // Animations for material.
        BrowserAnimationsModule,

        // Material modules.
        MdTabsModule,
        MdGridListModule,
        MdProgressBarModule,

        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
