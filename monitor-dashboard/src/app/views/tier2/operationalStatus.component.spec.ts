import { OperationalStatusComponent } from './operationalStatus.component';

describe('OperationalStatusComponent class only', () => {
  let comp: OperationalStatusComponent;

  beforeEach(() => {
    comp = new OperationalStatusComponent();
  });

  it('OperationalStatusComponent should create', () => {
    expect(comp).toBeTruthy();
  });

});
