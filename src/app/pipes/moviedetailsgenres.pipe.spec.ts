import { MoviedetailsgenresPipe } from './moviedetailsgenres.pipe';

describe('MoviedetailsgenresPipe', () => {
  const pipe = new MoviedetailsgenresPipe();

  it('crear una instancia', () => {
    expect(pipe).toBeTruthy();
  });

  it('Crear array de generos', () => {
    const response = pipe.transform([{ id: 1, name: 'Acción' }, { id: 2, name: 'Drama' }]);
    expect(response).toEqual(['Acción', 'Drama']);
  });

  it('Deberá de enviar un array vacío', () => {
    const response = pipe.transform([]);
    expect(response).toEqual([]);
  });
});
