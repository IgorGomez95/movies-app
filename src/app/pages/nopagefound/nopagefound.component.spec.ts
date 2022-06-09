import { NopagefoundComponent } from './nopagefound.component';

describe('ApiService', () => {
  let noPageFoundComponent: NopagefoundComponent;

  beforeEach(async () => {
    noPageFoundComponent = new NopagefoundComponent();
  });

  it('Debe de crearce correctamente', () => {
    expect(noPageFoundComponent).toBeTruthy();
  });
});
