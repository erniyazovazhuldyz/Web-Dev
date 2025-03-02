import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../../services/albums.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
})
export class AlbumsComponent implements OnInit {
  albums: any[] = [];
  newAlbumTitle: string = '';

  constructor(private albumsService: AlbumsService, private router: Router) {}

  ngOnInit(): void {
    this.loadAlbums();
  }

  loadAlbums(): void {
    this.albumsService.getAlbums().subscribe({
      next: (data) => {
        this.albums = data;
        console.log('Albums loaded:', data); 
      },
      error: (err) => {
        console.error('Error loading albums:', err); 
      },
    });
  }

  addAlbum(): void {
    if (!this.newAlbumTitle.trim()) return; 

    const newAlbum = { title: this.newAlbumTitle };
    this.albumsService.createAlbum(newAlbum).subscribe({
      next: (album) => {
        this.albums.push(album); 
        this.newAlbumTitle = ''; 
      },
      error: (err) => {
        console.error('Error adding album:', err);
      },
    });
  }

  deleteAlbum(id: number): void {
    this.albumsService.deleteAlbum(id).subscribe({
      next: () => {
        this.albums = this.albums.filter((album) => album.id !== id);
      },
      error: (err) => {
        console.error('Error deleting album:', err);
      },
    });
  }

  viewAlbumDetail(id: number): void {
    this.router.navigate(['/albums', id]);
  }
}