import { Component } from '@angular/core';
import { BookService } from './Services/book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bookKartB14A';
  bookList: any = [];
  constructor(public bookService: BookService) {

  }
  ngOnInit(): void {
    this.bookService.bookList.subscribe((res: any) => {
      console.log(res);
      this.bookList = res;
    })
  }
}