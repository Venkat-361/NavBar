import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/Services/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  constructor(private bookservice: BookService) { }

  ngOnInit(): void {
  
  }

}
