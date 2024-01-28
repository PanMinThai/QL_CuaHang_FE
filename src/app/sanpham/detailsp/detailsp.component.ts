import { Component, OnInit } from '@angular/core';
import { SanPham } from 'src/app/models/sanpham.model';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-detailsp',
  templateUrl: './detailsp.component.html',
  styleUrls: ['./detailsp.component.css']
})
export class DetailspComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private service: SharedService) { }
  EditDeleteSP:SanPham = {
    id:'',
    ten: '',
    giavon: 0,
    giaban: 0,
    soluong: 0,
    donvi: ''
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
          this.service.GetidSanPham(id)
          .subscribe({
            next: (res) => {
              console.log(res);
              this.EditDeleteSP = res;
            }
          })
        }
      }
    })
  }

  suaSP(){
    this.service.UpdateSanPham(this.EditDeleteSP.id, this.EditDeleteSP).subscribe({
      next:(res) => {
        this.router.navigate(['/sanpham']);
      }
    })
  }

  xoaSP(){
    this.service.DeleteSanPham(this.EditDeleteSP.id).subscribe({
      next:(res) => {
        this.router.navigate(['/sanpham']);
      }
    })
  }

  goBack(){
    this.router.navigate(['/sanpham']);
  }
}
