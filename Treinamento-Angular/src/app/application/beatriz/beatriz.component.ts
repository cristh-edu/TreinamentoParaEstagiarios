import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import exemples from "./exemples";
@Component({
  selector: "app-beatriz",
  templateUrl: "./beatriz.component.html",
  styleUrls: ["./beatriz.component.scss"],
})
export class BeatrizComponent implements OnInit {
  dataSource = exemples;

  constructor(private router: Router) {}

  ngOnInit() {}

  navigateTo(param) {
    this.router.navigate(["/beatriz", param]);
  }
}
