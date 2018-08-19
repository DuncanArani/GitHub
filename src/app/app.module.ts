import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClients, HttpHeaders} from '@angular/http';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileServices } from './prof/profile.services';
import { DataSearchPipe } from './data-search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ProfileServices,
    DataSearchPipe,
    HttpClients,
    HttpHeaders
  ],

  imports: [
    BrowserModule,
   HttpClients,
   HttpHeaders,
  ],
  providers: [ProfileServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
