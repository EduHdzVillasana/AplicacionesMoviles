import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LicenciaturasComponent } from './licenciaturas.component';

describe('LicenciaturasComponent', () => {
  let component: LicenciaturasComponent;
  let fixture: ComponentFixture<LicenciaturasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LicenciaturasComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LicenciaturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
