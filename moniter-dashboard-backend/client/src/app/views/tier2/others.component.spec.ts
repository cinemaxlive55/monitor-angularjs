import { OthersComponent } from './others.component';

describe('OthersComponent class only', () => {
  let comp: OthersComponent;

  beforeEach(() => {
    comp = new OthersComponent();
  });

  it('OthersComponent should create', () => {
    expect(comp).toBeTruthy();
  });

});
