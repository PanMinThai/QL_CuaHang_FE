import { Component, OnInit } from '@angular/core';
import { NhaCungCap } from 'src/app/models/nhacungcap.model';
import { SharedService } from 'src/app/shared.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-addnhacungcap',
  templateUrl: './addnhacungcap.component.html',
  styleUrls: ['./addnhacungcap.component.css']
})
export class AddnhacungcapComponent implements OnInit {
  a : NhaCungCap = {
    id:'',
    ten: '',
    sdt: '',
    tiennhap: 0,
    tiendathanhtoan: 0
  };
  constructor(private service:SharedService, private route:  ActivatedRoute, private router: Router) { }
  
  success: boolean = false;
  ngOnInit(): void {
    this.a.tiennhap = 0;
    this.a.tiendathanhtoan = 0;
  }

  addncc(){
    this.service.AddNhaCungCap(this.a)
    .subscribe({
      next:(a) => {

        this.router.navigate(['/nhacungcap']);
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
    this.router.navigate(['/nhacungcap']);
  }
}
