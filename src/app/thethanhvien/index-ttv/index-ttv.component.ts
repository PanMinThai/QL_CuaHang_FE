import { Component, OnInit } from '@angular/core';
import { TheThanhVien } from 'src/app/models/thethanhvien.model';
import { SharedService } from 'src/app/shared.service';
import { Router } from '@angular/router'; 
@Component({
  selector: 'app-index-ttv',
  templateUrl: './index-ttv.component.html',
  styleUrls: ['./index-ttv.component.css']
})
export class IndexTTVComponent implements OnInit {
  constructor(private service: SharedService, private router: Router) { }
  list: TheThanhVien[] = [];
  dem: number = 0;
  firstPage :number=1;
  itemsPage: number = 7;
  totalTTV:any;
  ngOnInit(): void {
    this.getTTVList();
    }
  
  getTTVList(){
    this.service.LayDSttv().subscribe(res => {
      this.list = res;
      this.totalTTV = res.length;
    })
  }
}
