import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HomeComponent} from './home/home.component';
import {Routes, RouterModule} from '@angular/router';
import {
    MdTabsModule,
    MdGridListModule,
    MdProgressBarModule,
    MdCardModule,
    MdListModule,
    MdIconModule,
    MdChipsModule,
    MdButtonModule,
    MdMenuModule,
    MdDialogModule,
    MdInputModule,
    MdSidenavModule,
    MdTooltipModule,
    MdSnackBarModule,
    MdProgressSpinnerModule
} from '@angular/material';
import {ProgressionComponent} from './presentation/progression/progression.component';
import {StatusComponent} from './presentation/progression/status/status.component';
import {PresentationComponent} from './presentation/presentation.component';
import {NewsComponent} from './news/news.component';
import {ForumComponent} from './forum/forum.component';
import {JoinUsComponent} from './join-us/join-us.component';
import {MembersComponent} from './presentation/members/members.component';
import {DiscordWidgetComponent} from './discord-widget/discord-widget.component';
import {LoginComponent} from './login/login.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {XivdbService} from './service/xivdb.service';
import {JobIconComponent} from './sidebar/job-icon/job-icon.component';
import {AuthService} from './service/auth.service';
import {ApiService} from './service/api.service';
import {RegisterComponent} from './register/register.component';

const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'presentation', component: PresentationComponent},
    {path: 'news', component: NewsComponent},
    {path: 'forum', component: ForumComponent},
    {path: 'join-us', component: JoinUsComponent},
];

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ProgressionComponent,
        StatusComponent,
        PresentationComponent,
        NewsComponent,
        ForumComponent,
        JoinUsComponent,
        MembersComponent,
        DiscordWidgetComponent,
        LoginComponent,
        SidebarComponent,
        JobIconComponent,
        RegisterComponent,
    ],
    imports: [
        // Routing.
        RouterModule.forRoot(routes, {useHash: true}),

        // Animations for material.
        BrowserAnimationsModule,

        // Material modules.
        MdTabsModule,
        MdGridListModule,
        MdProgressBarModule,
        MdCardModule,
        MdListModule,
        MdIconModule,
        MdChipsModule,
        MdButtonModule,
        MdMenuModule,
        MdDialogModule,
        MdInputModule,
        MdSidenavModule,
        MdTooltipModule,
        MdSnackBarModule,
        MdProgressSpinnerModule,

        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [
        XivdbService,
        AuthService,
        ApiService
    ],
    entryComponents: [
        RegisterComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
