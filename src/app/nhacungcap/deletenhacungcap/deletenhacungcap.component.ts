import { Component, OnInit } from '@angular/core';
import { NhaCungCap} from 'src/app/models/nhacungcap.model';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-deletenhacungcap',
  templateUrl: './deletenhacungcap.component.html',
  styleUrls: ['./deletenhacungcap.component.css']
})
export class DeletenhacungcapComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private service: SharedService) { }
  a : NhaCungCap = {
    id:'',
    ten: '',
    sdt: '',
    tiennhap: 0,
    tiendathanhtoan: 0
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
          this.service.GetidNhaCungCap(id)
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
  deletencc(){
    this.service.DeleteNhaCungCap(this.a.id).subscribe({
      next:(res) => {
        this.router.navigate(['/nhacungcap']);
      }
    })
  }
  goBack(){
    this.router.navigate(['/nhacungcap']);
  }
}
