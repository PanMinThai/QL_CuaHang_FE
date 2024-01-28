import { Component, OnInit } from '@angular/core';
import { TheThanhVien} from 'src/app/models/thethanhvien.model';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-add-ttv',
  templateUrl: './add-ttv.component.html',
  styleUrls: ['./add-ttv.component.css']
})
export class AddTTVComponent implements OnInit {
  a : TheThanhVien = {
    id:'',
    sdt: '',
    diemtichluy: 0,
    diemdadung: 0
  };
  constructor(private service:SharedService, private route:  ActivatedRoute, private router: Router) { }
  
  success: boolean = false;
  ngOnInit(): void {
    this.a.diemtichluy = 0;
    this.a.diemdadung = 0;
  }

  addTTV(){
    this.service.AddTTV(this.a)
    .subscribe({
      next:(a) => {
        this.router.navigate(['/thethanhvien']);
        this.success = true;

        setTimeout(() => {
          this.success = false;
        }, 3000);
      },
      error: (error) => {
        console.error('Error:', error);
        // Thêm xử lý lỗi ở đây
      }
    })
  }

  onlyNumber(event: any): void {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (!(charCode >= 48 && charCode <= 57)) {
      event.preventDefault();
    }
  }

  goBack(){
    this.router.navigate(['/thethanhvien']);
  }
}
