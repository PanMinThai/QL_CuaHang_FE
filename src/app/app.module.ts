import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SanphamComponent } from './sanpham/sanpham.component';
import { AddspComponent } from './sanpham/addsp/addsp.component';
import { DetailspComponent } from './sanpham/detailsp/detailsp.component';
import { IndexspComponent } from './sanpham/indexsp/indexsp.component';
import { DeletespComponent } from './sanpham/deletesp/deletesp.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NhacungcapComponent } from './nhacungcap/nhacungcap.component';
import { IndexnhacungcapComponent } from './nhacungcap/indexnhacungcap/indexnhacungcap.component';
import { DetailnhacungcapComponent } from './nhacungcap/detailnhacungcap/detailnhacungcap.component';
import { DeletenhacungcapComponent } from './nhacungcap/deletenhacungcap/deletenhacungcap.component';
import { AddnhacungcapComponent } from './nhacungcap/addnhacungcap/addnhacungcap.component';
import { ThethanhvienComponent } from './thethanhvien/thethanhvien.component';
import { IndexTTVComponent } from './thethanhvien/index-ttv/index-ttv.component';
import { DeleteTTVComponent } from './thethanhvien/delete-ttv/delete-ttv.component';
import { DetailTTVComponent } from './thethanhvien/detail-ttv/detail-ttv.component';
import { AddTTVComponent } from './thethanhvien/add-ttv/add-ttv.component';
import { PhieuchiComponent } from './phieuchi/phieuchi.component';
import { AddPhieuphiComponent } from './phieuchi/add-phieuphi/add-phieuphi.component';
import { IndexPhieuphiComponent } from './phieuchi/index-phieuphi/index-phieuphi.component';
import { DeletePhieuphiComponent } from './phieuchi/delete-phieuphi/delete-phieuphi.component';
import { DetailPhieuphiComponent } from './phieuchi/detail-phieuphi/detail-phieuphi.component';
import { LoginComponent } from './login/login.component';
import {NgxPaginationModule} from 'ngx-pagination';
@NgModule({
  declarations: [
    AppComponent,
    SanphamComponent,
    AddspComponent,
    DetailspComponent,
    IndexspComponent,
    DeletespComponent,
    DeletespComponent,
    NhacungcapComponent,
    IndexnhacungcapComponent,
    DetailnhacungcapComponent,
    DeletenhacungcapComponent,
    AddnhacungcapComponent,
    ThethanhvienComponent,
    IndexTTVComponent,
    DeleteTTVComponent,
    DetailTTVComponent,
    AddTTVComponent,
    PhieuchiComponent,
    AddPhieuphiComponent,
    IndexPhieuphiComponent,
    DeletePhieuphiComponent,
    DetailPhieuphiComponent,
    LoginComponent,
  ],
  imports: [
    
    NgxPaginationModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
