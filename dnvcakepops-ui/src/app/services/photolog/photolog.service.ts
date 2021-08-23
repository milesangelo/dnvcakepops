import { Injectable } from '@angular/core';
import { PhotoLog } from 'src/app/photolog/photologs.component';
import { PHOTO_LOGS } from './mock-photologs';

@Injectable({
  providedIn: 'root'
})
export class PhotoLogService {

  constructor() { }

  getPhotoLogs(): PhotoLog[] {
    return PHOTO_LOGS;
  }
}
