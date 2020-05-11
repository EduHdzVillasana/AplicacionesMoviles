import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LAComponent } from './la.component';

describe('LAComponent', () => {
  let component: LAComponent;
  let fixture: ComponentFixture<LAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LAComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
