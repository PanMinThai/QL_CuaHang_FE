import { Component, OnInit } from '@angular/core';
import { TheThanhVien} from 'src/app/models/thethanhvien.model';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-delete-ttv',
  templateUrl: './delete-ttv.component.html',
  styleUrls: ['./delete-ttv.component.css']
})
export class DeleteTTVComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute, private service: SharedService) { }
  a : TheThanhVien = {
    id:'',
    sdt: '',
    diemtichluy: 0,
    diemdadung: 0
  };
  ngOnInit(): void {
    this.getID();
  }
  getID(){
    this.route.paramMap.subscribe({
      next: (param) => {
        const id = param.get('id');
        console.log('id:'+id);
        if(id){
          this.service.GetidTTV(id)
          .subscribe({
            next: (res) => {
              console.log(res);
              this.a = res;
            }
          })
        }
      }
    })
  }
  deleteTTV(){
    this.service.DeleteTTV(this.a.id).subscribe({
      next:(res) => {
        this.router.navigate(['/thethanhvien']);
      }
    })
  }
  goBack(){
    this.router.navigate(['/thethanhvien']);
  }

}
