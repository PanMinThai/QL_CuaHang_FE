import { Component, OnInit } from '@angular/core';
import { SanPham } from 'src/app/models/sanpham.model';
import { SharedService } from 'src/app/shared.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-addsp',
  templateUrl: './addsp.component.html',
  styleUrls: ['./addsp.component.css']
})
export class AddspComponent implements OnInit {
  sp: SanPham = {
    id:'',
    ten: '',
    giavon: 0,
    giaban: 0,
    soluong: 0,
    donvi: ''
  };
  constructor(private service:SharedService, private route:  ActivatedRoute, private router: Router) { }
  
  success: boolean = false;
  ngOnInit(): void {
  }

  addsp(){
    this.service.AddSanPham(this.sp)
    .subscribe({
      next:(sp) => {
        console.log(sp);

        this.router.navigate(['/sanpham']);
        this.success = true;

        setTimeout(() => {
          this.success = false;
        }, 3000);
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
    this.router.navigate(['/sanpham']);
  }

}