import { AppPage } from './app.po';
import { browser, logging,by, element} from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('Deberia mostrar el titulo', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Bienvenido al parqueadero ADN');
  });

  it('la tabla deberia tener 20 registros',()=>{
    page.insertarCarros(20);
    expect(page.getCantidadRegistrosTabla()).toEqual(20);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
