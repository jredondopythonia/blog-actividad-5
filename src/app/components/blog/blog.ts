import { Component } from '@angular/core';
import { Post } from '../../interafaces/post'
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-blog',
  imports: [FormsModule],
  templateUrl: './blog.html',
  styleUrl: './blog.css',
})
export class Blog {
  posts: Post[] = [
    {
      title: 'Primer noticia',
      imageUrl: 'https://picsum.photos/401',
      body: 'Cuerpo de la primera noticia',
      date: '2026-02-21'
    },
    {
      title: 'Segunda noticia',
      imageUrl: 'https://picsum.photos/402',
      body: 'Cuerpo de la segunda noticia',
      date: '2026-02-20'
    }

  ]

  errorMessage: string = '';

  newPost: Post = {
    title: "",
    imageUrl: "",
    body: "",
    date: "",
  }

  addPost() {

    if (
      !this.newPost.title.trim() ||
      !this.newPost.imageUrl.trim() ||
      !this.newPost.body.trim() ||
      !this.newPost.date.trim()
    ) {
      this.errorMessage = 'Todos los campos son obligatorios';
      return;
    }
    console.log(this.newPost);

    this.posts.unshift({ ...this.newPost });



  }
}
