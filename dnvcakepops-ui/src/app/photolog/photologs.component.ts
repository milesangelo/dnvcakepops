import { Component, OnInit } from '@angular/core';
import { PhotoLogService } from '../services/photolog/photolog.service';

@Component({
  selector: 'app-photologs',
  templateUrl: './photologs.component.html',
  styleUrls: ['./photologs.component.css']
})
export class PhotoLogsComponent implements OnInit {

  private photologService: PhotoLogService;
  public photologs: PhotoLog[] = [];

  constructor(photologService: PhotoLogService) { 
    this.photologService = photologService;
    this.photologs = this.photologService.getPhotoLogs();

  }

  ngOnInit(): void {
  }

}

export interface PhotoLog {
  id: number;
  name: string;
  dateModified: number;
  dateCreated: number;
  aperture: number;
  shutterSpeed: number;
  iso: number;
  focallength: number;
}
