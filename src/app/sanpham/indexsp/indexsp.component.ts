import { Component, OnInit} from '@angular/core';
import { SanPham } from 'src/app/models/sanpham.model';
import { SharedService } from 'src/app/shared.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-indexsp',
  templateUrl: './indexsp.component.html',
  styleUrls: ['./indexsp.component.css']
})

export class IndexspComponent implements OnInit {
  constructor(private service: SharedService, private router: Router) { }
  list: SanPham[] = [];
  dem: number = 0;
  firstPage :number=1;
  itemsPage: number = 7;
  totalTTV:any;
  ngOnInit(): void {
    this.getSPList();
    }
  
  getSPList(){
    this.service.LayDSSP().subscribe(res => {
      this.list = res;
      this.totalTTV = res.length; 
    })
  }
}
