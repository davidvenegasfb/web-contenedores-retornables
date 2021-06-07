import { Component, HostBinding} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { ContenedoresService } from '../../services/contenedores.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent {

  stocks: any = [];
  final: any = [];

  @HostBinding('class') classes = 'row';

  constructor(private contenedoresService: ContenedoresService, private router: Router, private activatedroute: ActivatedRoute) { 

  }
  ngOnInit() {
    this.contenedoresService.getStock()
    .subscribe(
      res => {
        this.stocks = res;
        this.Parser(this.stocks);
      },
      err => console.error(err)
    )
  }

  Parser(stocks){
    this.final[0]=0;
    this.final[1]=0;
    this.final[2]=0;
    this.final[3]=0;
    this.final[4]=0;
    for(var _i = 0; _i < stocks.length; _i++){
      if(stocks[_i].capacidad==120){
        this.final[0]+=stocks[_i].cantidad;
      }else if(stocks[_i].capacidad==240){
        this.final[1]+=stocks[_i].cantidad;
      }else if(stocks[_i].capacidad==360){
        this.final[2]+=stocks[_i].cantidad;
      }else if(stocks[_i].capacidad==800){
        this.final[3]+=stocks[_i].cantidad;
      }else if(stocks[_i].capacidad==1000){
        this.final[4]+=stocks[_i].cantidad;
      }
    }
  }

}
