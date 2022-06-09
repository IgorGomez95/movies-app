import { MovieruntimePipe } from './movieruntime.pipe';

describe('MovieruntimePipe', () => {
  const pipe = new MovieruntimePipe();

  it('crear una instancia', () => {
    expect(pipe).toBeTruthy();
  });

  it('Deberá enviar la duración de la película en formato de horas y minutos', () => {
    const response = pipe.transform(120);
    expect(response).toEqual('2 h 0 min');
  });

  it('Deberá enviar la duración de la película en minutos', () => {
    const response = pipe.transform(59);
    expect(response).toEqual('59 min');
  });
});
