import { WatchlistComponent } from './watchlist.component';

describe('ApiService', () => {
  let watchlistComponent: WatchlistComponent;

  beforeEach(async () => {
    watchlistComponent = new WatchlistComponent(null);
  });

  it('Debe de crearce correctamente', () => {
    expect(watchlistComponent).toBeTruthy();
  });
});
