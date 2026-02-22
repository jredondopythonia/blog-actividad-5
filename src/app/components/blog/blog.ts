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
      title: 'La inteligencia artificial redefine el mercado laboral en 2026',
      imageUrl: "https://elordenmundial.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2023/04/que-es-inteligencia-artificial.jpg.webp",
      body: 'La adopción masiva de herramientas basadas en inteligencia artificial está transformando múltiples sectores, desde la educación hasta la industria tecnológica. Las empresas están invirtiendo cada vez más en automatización y análisis predictivo, lo que está generando nuevas oportunidades laborales pero también exigiendo una rápida adaptación por parte de los profesionales. La formación continua y el desarrollo de habilidades digitales se han convertido en factores clave para mantenerse competitivo en el mercado actual.',
      date: '2026-02-10'
    },
    {
      title: 'El teletrabajo híbrido se consolida como modelo dominante',
      imageUrl: 'https://i.blogs.es/54fe17/kristin-wilson-z3htkdhuh5w-unsplash/1366_2000.jpg',
      body: 'Después de varios años de transformación en los modelos laborales, el trabajo híbrido se ha establecido como la opción preferida por muchas organizaciones. Este sistema combina la flexibilidad del trabajo remoto con la colaboración presencial, mejorando la productividad y el bienestar de los empleados. Expertos en recursos humanos destacan que las empresas que adoptan políticas flexibles suelen experimentar mayor retención de talento y mejores resultados a largo plazo.',
      date: '2026-02-05'
    }
  ];



  newPost: Post = {
    title: "",
    imageUrl: "",
    body: "",
    date: "",
  }

  resetnewPost() {
    this.newPost = {
      title: "",
      imageUrl: "",
      body: "",
      date: "",
    }
  }




  addPost(): void {

    /**Validacion  */
    if (
      !this.newPost.title.trim() ||
      !this.newPost.imageUrl.trim() ||
      !this.newPost.body.trim() ||
      !this.newPost.date.trim()
    ) {


      alert('Todos los campos son obligatorios')

      return;
    }
    console.log(this.newPost);

    this.posts.unshift({ ...this.newPost });


    this.resetnewPost()


  }

}
