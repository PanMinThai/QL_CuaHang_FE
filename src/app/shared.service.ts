import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, map } from 'rxjs';
import { SanPham } from './models/sanpham.model';
import { NhaCungCap } from './models/nhacungcap.model';
import { TheThanhVien } from './models/thethanhvien.model';
import { phieuchi } from './models/phieuchi.model';
import { NhanVien } from './models/nhanvien.model';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = "https://localhost:44316/api";
  readonly PhotoUrl = "https://localhost:44316/Photos";
  
  private selectedProductSource = new BehaviorSubject<SanPham | null>(null);
  selectedProduct$ = this.selectedProductSource.asObservable();
  private isAuthenticatedValue:boolean = false;
  isAuthenticated(): boolean {
    return this.isAuthenticatedValue;
  }
  constructor(private http: HttpClient) { }


  LayDSSP(): Observable<SanPham[]> {
    return this.http.get<SanPham[]>(this.APIUrl + '/SanPham');
  }
  AddSanPham(sp:SanPham): Observable<SanPham> {
    sp.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<SanPham>(this.APIUrl + "/SanPham/", sp);
  }

  UpdateSanPham(id:string, editNXB:SanPham):Observable<SanPham>{
    return this.http.put<SanPham>(this.APIUrl + "/SanPham/" + id, editNXB);
  }

  DeleteSanPham(id:string):Observable<SanPham>{
    return this.http.delete<SanPham>(this.APIUrl + "/SanPham/" + id);
  }

  GetidSanPham(id: string):Observable<SanPham>{
    return this.http.get<SanPham>(this.APIUrl + "/SanPham/" + id);
  }

  LayDSncc(): Observable<NhaCungCap[]> {
    return this.http.get<NhaCungCap[]>(this.APIUrl + '/NhaCungCap');
  }
  AddNhaCungCap(a:NhaCungCap): Observable<NhaCungCap> {
    a.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<NhaCungCap>(this.APIUrl + "/NhaCungCap/", a);
  }

  UpdateNhaCungCap(id:string, edit:NhaCungCap):Observable<NhaCungCap>{
    return this.http.put<NhaCungCap>(this.APIUrl + "/NhaCungCap/" + id, edit);
  }

  DeleteNhaCungCap(id:string):Observable<NhaCungCap>{
    return this.http.delete<NhaCungCap>(this.APIUrl + "/NhaCungCap/" + id);
  }

  GetidNhaCungCap(id: string):Observable<NhaCungCap>{
    return this.http.get<NhaCungCap>(this.APIUrl + "/NhaCungCap/" + id);
  }

  LayDSttv(): Observable<TheThanhVien[]> {
    return this.http.get<TheThanhVien[]>(this.APIUrl + '/TheThanhVien');
  }
  AddTTV(a:TheThanhVien): Observable<TheThanhVien> {
    a.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<TheThanhVien>(this.APIUrl + "/TheThanhVien/", a);
  }

  UpdateTTV(id:string, edit:TheThanhVien):Observable<TheThanhVien>{
    return this.http.put<TheThanhVien>(this.APIUrl + "/TheThanhVien/" + id, edit);
  }

  DeleteTTV(id:string):Observable<TheThanhVien>{
    return this.http.delete<TheThanhVien>(this.APIUrl + "/TheThanhVien/" + id);
  }

  GetidTTV(id: string):Observable<TheThanhVien>{
    return this.http.get<TheThanhVien>(this.APIUrl + "/TheThanhVien/" + id);
  }

  LayDSPC(): Observable<phieuchi[]> {
    return this.http.get<phieuchi[]>(this.APIUrl + '/PhieuChi');
  }
  AddPC(a:phieuchi): Observable<phieuchi> {
    a.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<phieuchi>(this.APIUrl + "/PhieuChi/", a);
  }

  UpdatePC(id:string, edit:phieuchi):Observable<phieuchi>{
    return this.http.put<phieuchi>(this.APIUrl + "/PhieuChi/" + id, edit);
  }

  DeletePC(id:string):Observable<phieuchi>{
    return this.http.delete<phieuchi>(this.APIUrl + "/PhieuChi/" + id);
  }

  GetidPC(id: string):Observable<phieuchi>{
    return this.http.get<phieuchi>(this.APIUrl + "/PhieuChi/" + id);
  }


  LayDSNV(): Observable<NhanVien[]> {
    return this.http.get<NhanVien[]>(this.APIUrl + '/NhanVien');
  }
  AddNV(a:NhanVien): Observable<NhanVien> {
    a.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<NhanVien>(this.APIUrl + "/NhanVien/", a);
  }

  UpdateNV(id:string, edit:NhanVien):Observable<NhanVien>{
    return this.http.put<NhanVien>(this.APIUrl + "/NhanVien/" + id, edit);
  }

  DeleteNV(id:string):Observable<NhanVien>{
    return this.http.delete<NhanVien>(this.APIUrl + "/NhanVien/" + id);
  }

  GetidNV(id: string):Observable<NhanVien>{
    return this.http.get<NhanVien>(this.APIUrl + "/NhanVien/" + id);
  }
  login(userObj: any) {
    // Gọi API để xác thực người dùng
    return this.http.post<any>(this.APIUrl + "/User/authenticate", userObj)
      .pipe(
        map(response => {
          // Kiểm tra response từ API và cập nhật isAuthenticatedValue nếu đăng nhập thành công
          if (response && response.token) {
            this.isAuthenticatedValue = true;
          }
          return response;
        })
      );}
  signUp(userObj: any): Observable<any> {
    return this.http.post<any>(this.APIUrl + "/User/Register", userObj);
  }
}
