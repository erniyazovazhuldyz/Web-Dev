import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumsService } from '../../services/albums.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css'],
})
export class AlbumDetailComponent implements OnInit {
  album: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumsService: AlbumsService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log('Album ID:', id);

    this.albumsService.getAlbum(id).subscribe({
      next: (data) => {
        this.album = data;
        console.log('Album loaded:', data); 
      },
      error: (err) => {
        console.error('Error loading album details:', err);
      },
    });
  }
  save(): void {
    console.log('Saving album:', this.album); 
    this.albumsService.updateAlbum(this.album.id, this.album).subscribe({
      next: () => {
        console.log('Album updated successfully');
        this.router.navigate(['/albums']);
      },
      error: (err) => {
        console.error('Error updating album:', err);
      },
    });
  }

  goBack(): void {
    this.router.navigate(['/albums']);
  }

  viewPhotos(): void {
    this.router.navigate(['/albums', this.album.id, 'photos']);
  }
}