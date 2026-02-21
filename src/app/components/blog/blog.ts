import { Component } from '@angular/core';
import {Post} from '../../interafaces/post'

@Component({
  selector: 'app-blog',
  imports: [],
  templateUrl: './blog.html',
  styleUrl: './blog.css',
})
export class Blog {
  posts: Post[] = [
    {
      title:'Primer noticia',
      imageUrl: 'https://picsum.photos/401',
      body: 'Cuerpo de la primera noticia',
      date: '2026-02-21'
    },
    {
      title:'Segunda noticia',
      imageUrl: 'https://picsum.photos/402',
      body: 'Cuerpo de la segunda noticia',
      date: '2026-02-20'
    }

  ]
}
