import {HTTP_PROVIDERS} from 'angular2/http';
import {TranslateService} from 'ng2-translate/ng2-translate';
import {App, Platform, Config} from 'ionic/ionic';
import {TabsPage} from './pages/tabs/tabs';


@App({
  templateUrl: 'build/app.html',
  // Check out the config API docs for more info
  // http://ionicframework.com/docs/v2/api/config/Config/
  config: {},
  providers: [HTTP_PROVIDERS, TranslateService]
})
export class MyApp {
  constructor(platform: Platform, translate: TranslateService) {
    this.root = TabsPage;

    platform.ready().then(() => {
      // Do any necessary cordova or native calls here now that the platform is ready
    });
  }
}
