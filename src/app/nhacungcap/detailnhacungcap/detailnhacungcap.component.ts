import { Component, OnInit } from '@angular/core';
import { NhaCungCap } from 'src/app/models/nhacungcap.model';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-detailnhacungcap',
  templateUrl: './detailnhacungcap.component.html',
  styleUrls: ['./detailnhacungcap.component.css']
})
export class DetailnhacungcapComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private service: SharedService) { }
  EditDeletencc :NhaCungCap = {
      id:'',
      ten: '',
      sdt: '',
      tiennhap: 0,
      tiendathanhtoan: 0
  }
  ngOnInit(): void {
    this.getID();
  }
  getID(){
    this.route.paramMap.subscribe({
      next: (param) => {
        const id = param.get('id');
        console.log('id:'+id);
        if(id){
          this.service.GetidNhaCungCap(id)
          .subscribe({
            next: (res) => {
              console.log(res);
              this.EditDeletencc = res;
            }
          })
        }
      }
    })
  }

  detailncc(){
    this.service.UpdateNhaCungCap(this.EditDeletencc.id, this.EditDeletencc).subscribe({
      next:(res) => {
        this.router.navigate(['/nhacungcap']);
      }
    })
  }

  deletencc(){
    this.service.DeleteSanPham(this.EditDeletencc.id).subscribe({
      next:(res) => {
        this.router.navigate(['/sanpham']);
      }
    })
  }

  goBack(){
    this.router.navigate(['/sanpham']);
  }

}
