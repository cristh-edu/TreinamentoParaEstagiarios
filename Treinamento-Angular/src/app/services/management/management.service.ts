import { Management } from "../../models/management";
import { HrService } from "../HR/hr-api.service";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class ManagementService extends HrService<Management> {
  constructor(http: HttpClient) {
    super("management", http);
  }
}
