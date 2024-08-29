import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../angular-material/material/material.module';

export interface Post {
  id: number;
  title: string;
  body: string;
}
@Component({
  selector: 'app-lista-posts',
  standalone: true,
  imports:[MaterialModule],
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})

export class ListaPostsComponent implements OnInit {
  posts: Post[] = []; // Define el tipo de posts
  displayedColumns: string[] = ['id', 'title', 'body'];

  constructor(private postService: PostService) { }

 ngOnInit(): void {
    this.postService.getPosts().subscribe({
      next: (data: Post[]) => {
        this.posts = data;
      },
      error: (err) => {
        console.error('Error fetching posts', err);
      }
    });
  }
}
