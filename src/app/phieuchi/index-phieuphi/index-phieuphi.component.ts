import { Component, OnInit } from '@angular/core';
import { phieuchi } from 'src/app/models/phieuchi.model';
import { SharedService } from 'src/app/shared.service';
import { Router } from '@angular/router'; 
import { NhanVien } from 'src/app/models/nhanvien.model';
@Component({
  selector: 'app-index-phieuphi',
  templateUrl: './index-phieuphi.component.html',
  styleUrls: ['./index-phieuphi.component.css']
})
export class IndexPhieuphiComponent implements OnInit {
  constructor(private service: SharedService, private router: Router) { }
  list: phieuchi[] = [];
  listnv: NhanVien[] = [];
  dem: number = 0;

  ngOnInit(): void {
    this.getPCList();
    }
  
  getPCList(){
    this.service.LayDSPC().subscribe(res => {
      this.list = res;
      console.log('Danh sách phieu chi:', this.list);
    })
  }
  loadNV() {
    // Lấy danh sách tác giả từ service (đã tạo ở DataService)
    this.service.LayDSNV().subscribe(nhanviens => {
      this.listnv = nhanviens;
      console.log(nhanviens);
      // Gọi hàm để kết hợp tên tác giả vào dssach
      this.list.forEach(phieu => {
        const e = this.listnv.find(a => a.id === phieu.idnhanvien);
        if (e) {
          phieu.tennv = e.ten;
          console.log(phieu.tennv);
        }
      });
    });
  }
}
