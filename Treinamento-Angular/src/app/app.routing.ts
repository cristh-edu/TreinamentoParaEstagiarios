import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BeatrizComponent } from "./application/beatriz/beatriz.component";
import { DashboardComponent } from "./application/dashboard/dashboard.component";
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
    path: "mateus",
    component: MateusComponent,
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
