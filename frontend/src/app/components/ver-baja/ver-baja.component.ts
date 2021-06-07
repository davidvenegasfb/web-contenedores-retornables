import { Component, OnInit } from '@angular/core';
import { Baja } from '../../models/Baja';
import { ActivatedRoute, Router } from '@angular/router'
import { ContenedoresService } from '../../services/contenedores.service';

@Component({
  selector: 'app-ver-baja',
  templateUrl: './ver-baja.component.html',
  styleUrls: ['./ver-baja.component.css']
})
export class VerBajaComponent implements OnInit {

  constructor(private contenedoresService: ContenedoresService, private router: Router, private activatedroute: ActivatedRoute) { 
  
  }

  baja: Baja = {
  };

  ngOnInit() {
    const params = this.activatedroute.snapshot.params;
    if(params.matricula){
      this.contenedoresService.getBaja(params.matricula)
      .subscribe(
        res => {
          this.baja=res[0];
          this.Parser(this.baja);
        },
        err => console.log(err)
      )
    }
  }

  
  Parser(baja){
    var str = baja.fechabaja;
    var Fecha_correcta1 = str.replace('T23:00:00.000Z','');
    var Fecha_correcta2 = Fecha_correcta1.substring(0,9);
    var Fecha_correcta3 = Fecha_correcta1.substring(9,10);
    var Fecha_correcta4 = +Fecha_correcta3 + 1;
    var Fecha_correcta = Fecha_correcta2 + Fecha_correcta4;

    var dia = Fecha_correcta.substring(8,10);
    var mes = Fecha_correcta.substring(5,7);
    var ano = Fecha_correcta.substring(0,4);
    baja.fechabaja = dia + '-' + mes + '-' + ano;
  }

}
