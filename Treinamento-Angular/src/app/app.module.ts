import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";
import { HttpInterceptorsService } from "./services/http-interceptor/http-interceptor.service";
import { DashboardComponent } from "./application/dashboard/dashboard.component";
import { NotFoundComponent } from "./application/not-found/not-found.component";
import { NavbarComponent } from "./layout/navbar/navbar.component";
import { BeatrizComponent } from "./application/beatriz/beatriz.component";
import { MateusComponent } from "./application/mateus/mateus.component";
import { FooterComponent } from "./layout/footer/footer.component";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NotFoundComponent,
    NavbarComponent,
    BeatrizComponent,
    MateusComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorsService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
