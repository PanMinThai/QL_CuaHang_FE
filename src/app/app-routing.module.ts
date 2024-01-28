import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SanphamComponent } from './sanpham/sanpham.component';
import { AddspComponent } from './sanpham/addsp/addsp.component';
import { DetailspComponent } from './sanpham/detailsp/detailsp.component';
import { IndexspComponent } from './sanpham/indexsp/indexsp.component';
import { DeletespComponent } from './sanpham/deletesp/deletesp.component';
import { NhacungcapComponent } from './nhacungcap/nhacungcap.component';
import { AddnhacungcapComponent } from './nhacungcap/addnhacungcap/addnhacungcap.component';
import { IndexnhacungcapComponent } from './nhacungcap/indexnhacungcap/indexnhacungcap.component';
import { DetailnhacungcapComponent } from './nhacungcap/detailnhacungcap/detailnhacungcap.component';
import { DeletenhacungcapComponent } from './nhacungcap/deletenhacungcap/deletenhacungcap.component';
import { AddTTVComponent } from './thethanhvien/add-ttv/add-ttv.component';
import { IndexTTVComponent } from './thethanhvien/index-ttv/index-ttv.component';
import { DetailTTVComponent } from './thethanhvien/detail-ttv/detail-ttv.component';
import { DeleteTTVComponent } from './thethanhvien/delete-ttv/delete-ttv.component';
import { ThethanhvienComponent } from './thethanhvien/thethanhvien.component';
import { PhieuchiComponent } from './phieuchi/phieuchi.component';
import { AddPhieuphiComponent } from './phieuchi/add-phieuphi/add-phieuphi.component';
import { IndexPhieuphiComponent } from './phieuchi/index-phieuphi/index-phieuphi.component';
import { DetailPhieuphiComponent } from './phieuchi/detail-phieuphi/detail-phieuphi.component';
import { DeletePhieuphiComponent } from './phieuchi/delete-phieuphi/delete-phieuphi.component';
import { LoginComponent } from './login/login.component';
import { AuthenticatedGuard } from './Helpers/authenticated.guard';
const routes:Routes=[
  {path: 'sanpham', component:SanphamComponent},
  { path: 'app-addsp', component: AddspComponent },
  { path: 'app-indexsp', component: IndexspComponent },
  { path: 'app-detailsp/:id', component: DetailspComponent },
  { path: 'app-deletesp/:id', component: DeletespComponent },
  { path: 'nhacungcap', component:NhacungcapComponent },
  { path: 'app-addnhacungcap', component: AddnhacungcapComponent },
  { path: 'app-indexnhacungcap', component: IndexnhacungcapComponent },
  { path: 'app-detailnhacungcap/:id', component: DetailnhacungcapComponent },
  { path: 'app-deletenhacungcap/:id', component: DeletenhacungcapComponent },
  { path: 'thethanhvien', component:ThethanhvienComponent },
  { path: 'app-add-ttv', component: AddTTVComponent },
  { path: 'app-index-ttv', component: IndexTTVComponent },
  { path: 'app-detail-ttv/:id', component: DetailTTVComponent },
  { path: 'app-delete-ttv/:id', component: DeleteTTVComponent },
  { path: 'phieuchi', component:PhieuchiComponent },
  { path: 'app-add-phieuchi', component: AddPhieuphiComponent },
  { path: 'app-index-phieuchi', component: IndexPhieuphiComponent },
  { path: 'app-detail-phieuchi/:id', component: DetailPhieuphiComponent },
  { path: 'app-delete-phieuchi/:id', component: DeletePhieuphiComponent  },
  { path: 'app-login', component: LoginComponent  },
  { path: '', component: SanphamComponent, canActivate: [AuthenticatedGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
