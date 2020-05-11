import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LstiComponent } from './lsti.component';

describe('LstiComponent', () => {
  let component: LstiComponent;
  let fixture: ComponentFixture<LstiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LstiComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LstiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
