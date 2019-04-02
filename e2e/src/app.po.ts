import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText() as Promise<string>;
  }

  getCantidadRegistrosTabla() {
    let cantidadRegistros = element.all(by.css(".registro"));
    return cantidadRegistros.count();
  }

  seleccionarOpcion ( numeroOpcion ) {
    if (numeroOpcion){
      var options = element.all(by.tagName('option'))   
        .then(function(options){
          options[numeroOpcion].click();
        });
    }
  };

  insertarCarros (cantidad) {
    for (var index = 0; index < cantidad; index++) {
      element(by.name('placa')).sendKeys(`CAR${index}`);
      element(by.name('cilindraje')).sendKeys(1000+index);
      this.seleccionarOpcion(1);
      element(by.id('registrar')).click();
      element(by.css('.swal2-confirm')).click();
    }
  };

  // retirarMotos(cantidad){
  //   for (var index = 0; index < cantidad; index++) {
  //     element(by.name('placa')).sendKeys(`CAR${index}`);
  //     element(by.id('retirar')).click();
  //     element(by.css('.swal2-confirm')).click();
  //     browser.wait(() => element(by.css('.swal2-confirm')).isPresent(), 10000, 'timeout');
  //     element(by.css('.swal2-confirm')).click();
  //   }
  // }
    
}
