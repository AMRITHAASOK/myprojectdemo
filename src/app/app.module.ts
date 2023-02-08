import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';

//

//decorators - Its a function to hold component data...attach meta data..
//  meta data- class declarations,methods,properties start with @
@NgModule({
  declarations: [
    //To hold components,directives of particular modules..
    AppComponent,
    TestComponent,
   
  ],
//it contains 3rd party libraries
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],//it provides services
  bootstrap: [AppComponent] //To identify the root component
})
export class AppModule { }
//Specifies the declarations and modules which 
//is available for a component in another module