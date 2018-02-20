import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { CadastroDeUsuarioPage } from '../pages/cadastro-de-usuario/cadastro-de-usuario';
import { CarrinhoDeComprasPage } from '../pages/carrinho-de-compras/carrinho-de-compras';
import { ContatoPage } from '../pages/contato/contato';
import { FeedbackPage } from '../pages/feedback/feedback';
import { FormasDePagamentoPage } from '../pages/formas-de-pagamento/formas-de-pagamento';
import { PerfilPage } from '../pages/perfil/perfil';
import { SobreNosPage } from '../pages/sobre-nos/sobre-nos';
import { TimelinePage } from '../pages/timeline/timeline';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    CadastroDeUsuarioPage,
    CarrinhoDeComprasPage,
    ContatoPage,
    FeedbackPage,
    FormasDePagamentoPage,
    PerfilPage,
    SobreNosPage,
    TimelinePage
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
