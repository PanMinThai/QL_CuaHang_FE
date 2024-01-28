import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'QLCuaHang_FE';
  ngOnInit(): void {
    const btn = document.querySelector<HTMLElement>(".fa-bars");
    const sidebar = document.querySelector<HTMLElement>(".sidebar");

    btn?.addEventListener("click", () => {
      sidebar?.classList.toggle("close");
    });

    const arrows = document.querySelectorAll<HTMLElement>(".arrow");
    arrows.forEach(arrow => {
      arrow.addEventListener("click", (e) => {
        const arrowParent = (e.target as HTMLElement).parentElement?.parentElement;
        arrowParent?.classList.toggle("show");
      });
    });
  }
}

