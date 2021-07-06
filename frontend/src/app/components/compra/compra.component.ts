import { Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { ContenedoresService } from '../../services/contenedores.service';
import { Datos } from '../../models/Datos';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})

export class CompraComponent {

  constructor(private contenedoresService: ContenedoresService, private router: Router, private activatedroute: ActivatedRoute) { 

  }

  datos: Datos = {
  };

  //Guardamos los contenedores comprados
  compraContenedores() {
    this.contenedoresService.comprarContenedores(this.datos.cantidad,this.datos.capacidad)
    .subscribe(
      res => {
        this.router.navigate(['/contenedores/compra']);
        this.router.navigate(['/contenedores/inicio']);
      },
      err => console.log(err)
    )
  }

}
