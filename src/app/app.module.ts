import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreModule } from './core/core.module';
import { PacienteModule } from './views/paciente/paciente.module';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { MedicoModule } from './views/medico/medico.module';
import { ConsultaModule } from './views/consulta/consulta.module';
import { CirurgiaModule } from './views/cirurgia/cirurgia.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,

    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-bottom-center',
      preventDuplicates: true,
    }),

    HttpClientModule,
    CoreModule,
    PacienteModule,
    MedicoModule,
    ConsultaModule,
    CirurgiaModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
