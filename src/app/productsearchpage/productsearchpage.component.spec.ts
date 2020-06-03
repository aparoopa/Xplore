import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsearchpageComponent } from './productsearchpage.component';

describe('ProductsearchpageComponent', () => {
  let component: ProductsearchpageComponent;
  let fixture: ComponentFixture<ProductsearchpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsearchpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsearchpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
