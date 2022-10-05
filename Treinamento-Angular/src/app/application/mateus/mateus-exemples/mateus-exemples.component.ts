import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ManagementService } from "src/app/services/management/management.service";
import exemples from "../exemples";

@Component({
  selector: "app-mateus-exemples",
  templateUrl: "./mateus-exemples.component.html",
  styleUrls: ["./mateus-exemples.component.scss"],
})
export class MateusExemplesComponent implements OnInit {
  page;
  table = {
    thead: [],
    tbody: [],
  };

  constructor(
    private _managementService: ManagementService,
    private route: ActivatedRoute
  ) {}

  async ngOnInit() {
    this.page = exemples.find(
      (i) => i.id === parseInt(this.route.snapshot.paramMap.get("id"))
    ) || {
      id: this.route.snapshot.paramMap.get("id"),
      name: "Não encontrado",
      description: "Não encontrado",
    };

    await this.setTable();
  }

  private async setTable() {
    this.page.id;
    this.table.thead = [{ label: "Sigla" }, { label: "Nome", colspan: "2" }];
    this.table.tbody = [
      [{ label: "GGI" }, { label: "Gerencia", colspan: "2" }],
      [{ label: "IAC" }, { label: "Isso aqui", colspan: "2" }],
    ];
    let managements = await this._managementService.get().toPromise();
    console.log(managements);
  }
}
