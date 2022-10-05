import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import exemples from "./exemples";

@Component({
  selector: "app-mateus",
  templateUrl: "./mateus.component.html",
  styleUrls: ["./mateus.component.scss"],
})
export class MateusComponent implements OnInit {
  dataSource = exemples;

  constructor(private router: Router) {}

  ngOnInit() {}

  navigateTo(param) {
    this.router.navigate(["/mateus", param]);
  }
}
