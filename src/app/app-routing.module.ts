import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DebounceHttpRequestComponent } from './components/debounce-http-request/debounce-http-request.component';
import { InputRxjsComponent } from './components/input-rxjs/input-rxjs.component';

const routes: Routes = [
  { path: 'input', component: InputRxjsComponent },
  { path: 'debounce-http', component: DebounceHttpRequestComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}
