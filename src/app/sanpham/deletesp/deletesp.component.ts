import { Component, OnInit } from '@angular/core';
import { SanPham } from 'src/app/models/sanpham.model';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-deletesp',
  templateUrl: './deletesp.component.html',
  styleUrls: ['./deletesp.component.css']
})
export class DeletespComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private service: SharedService) { }
  sp:SanPham = {
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
              this.sp = res;
            }
          })
        }
      }
    })
  }
  deletesp(){
    this.service.DeleteSanPham(this.sp.id).subscribe({
      next:(res) => {
        this.router.navigate(['/sanpham']);
      }
    })
  }
  goBack(){
    this.router.navigate(['/sanpham']);
  }
}
