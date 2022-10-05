import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { MateusExemplesComponent } from "./mateus-exemples.component";

describe("MateusExemplesComponent", () => {
  let component: MateusExemplesComponent;
  let fixture: ComponentFixture<MateusExemplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MateusExemplesComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MateusExemplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
