import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { MateusComponent } from "./mateus.component";

describe("MateusComponent", () => {
  let component: MateusComponent;
  let fixture: ComponentFixture<MateusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MateusComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MateusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
