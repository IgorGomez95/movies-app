import { ApiService } from "./api.service";

describe('ApiService', () => {
  let apiService: ApiService;

  beforeEach(async () => {
    apiService = new ApiService(null, null, null);
  });

  it('Debe de crearce correctamente', () => {
    expect(apiService).toBeTruthy();
  });
});
