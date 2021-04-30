import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from '../app/cadastro/cadastro.component';
import { EntrarComponent } from './entrar/entrar.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [

{path:'', redirectTo:'entrar', pathMatch:'full'},

{path:'entrar', component:EntrarComponent},
{path:'cadastrar', component:CadastroComponent},

{path:'inicio', component:InicioComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
