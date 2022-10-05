import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BeatrizExemplesComponent } from "./application/beatriz/beatriz-exemples/beatriz-exemples.component";
import { BeatrizComponent } from "./application/beatriz/beatriz.component";
import { DashboardComponent } from "./application/dashboard/dashboard.component";
import { MateusExemplesComponent } from "./application/mateus/mateus-exemples/mateus-exemples.component";
import { MateusComponent } from "./application/mateus/mateus.component";
import { NotFoundComponent } from "./application/not-found/not-found.component";

export const appRoutes: Routes = [
  {
    path: "",
    component: DashboardComponent,
  },
  {
    path: "beatriz",
    component: BeatrizComponent,
  },
  {
    path: "beatriz/:id",
    component: BeatrizExemplesComponent,
  },
  {
    path: "mateus",
    component: MateusComponent,
  },
  {
    path: "mateus/:id",
    component: MateusExemplesComponent,
  },
  {
    path: "**",
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
