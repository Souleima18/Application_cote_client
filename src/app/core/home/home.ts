import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  siteName: string = 'conferance site';
  color: string = 'blue';
  imgSrc: string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxBQd8GDqouyhoG9lnI-crO-zrlTtxblKuTNJyupPwyg&s=10';
  alt='no image';
  clickMe() {
    return alert('vous avez cliqué !');
  }
  inputItem: string = '';
}
