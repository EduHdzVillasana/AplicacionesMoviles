import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ComoLlegarComponent } from './como-llegar.component';

describe('ComoLlegarComponent', () => {
  let component: ComoLlegarComponent;
  let fixture: ComponentFixture<ComoLlegarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComoLlegarComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ComoLlegarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
