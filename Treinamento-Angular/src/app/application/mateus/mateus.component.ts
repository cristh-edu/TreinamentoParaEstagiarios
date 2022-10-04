import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-mateus",
  templateUrl: "./mateus.component.html",
  styleUrls: ["./mateus.component.scss"],
})
export class MateusComponent implements OnInit {
  dataSource = [
    {
      name: "Arroz",
      description: "Tipo 1",
      status: "Disponível",
    },
    {
      name: "Feijão",
      description: "Carioca",
      status: "Vendido",
    },
  ];

  constructor() {}

  ngOnInit() {}
}
