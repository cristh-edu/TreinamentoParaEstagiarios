import { TestBed } from "@angular/core/testing";

import { ManagementService } from "./management.service";
import {
  beforeEach,
  describe,
  it,
  expect,
} from "@angular/core/testing/src/testing_internal";

describe("ManagementService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: ManagementService = TestBed.get(ManagementService);
    expect(service).toBeTruthy();
  });
});
