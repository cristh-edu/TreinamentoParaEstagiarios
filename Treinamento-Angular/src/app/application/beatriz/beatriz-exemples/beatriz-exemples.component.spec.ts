import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { BeatrizExemplesComponent } from "./beatriz-exemples.component";

describe("BeatrizExemplesComponent", () => {
  let component: BeatrizExemplesComponent;
  let fixture: ComponentFixture<BeatrizExemplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BeatrizExemplesComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeatrizExemplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
