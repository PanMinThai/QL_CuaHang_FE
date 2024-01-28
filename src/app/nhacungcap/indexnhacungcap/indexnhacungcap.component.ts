import { Component, OnInit } from '@angular/core';
import { NhaCungCap } from 'src/app/models/nhacungcap.model';
import { SharedService } from 'src/app/shared.service';
import { Router } from '@angular/router'; 
@Component({
  selector: 'app-indexnhacungcap',
  templateUrl: './indexnhacungcap.component.html',
  styleUrls: ['./indexnhacungcap.component.css']
})
export class IndexnhacungcapComponent implements OnInit {
  constructor(private service: SharedService, private router: Router) { }
  list: NhaCungCap[] = [];
  dem: number = 0;
  firstPage :number=1;
  itemsPage: number = 7;
  totalTTV:any;
  ngOnInit(): void {
    this.getNCCList();
    }
  
  getNCCList(){
    this.service.LayDSncc().subscribe(res => {
      this.list = res;
      this.totalTTV = res.length; 
    })
  }
}
