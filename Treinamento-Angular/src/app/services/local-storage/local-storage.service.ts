import { Injectable } from "@angular/core";
import CryptoJS from "crypto-js";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class LocalStorageService {
  constructor() {}

  getItem(key) {
    const data = localStorage.getItem(key);
    return data ? this.decrypt(data) : false;
  }

  setItem(key, data) {
    try {
      localStorage.setItem(key, this.encrypt(data));
    } catch (er) {
      console.log(er);
    }
  }

  encrypt(value) {
    return CryptoJS.AES.encrypt(
      JSON.stringify(value),
      environment.application.cryptoJS.password
    ).toString();
  }

  decrypt(value) {
    const bytes = CryptoJS.AES.decrypt(
      value,
      environment.application.cryptoJS.password
    );
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  }

  removeItem(key) {
    localStorage.removeItem(key);
  }

  clear() {
    localStorage.clear();
  }
}
