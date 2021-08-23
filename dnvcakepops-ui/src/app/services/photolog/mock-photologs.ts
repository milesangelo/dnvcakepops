import { PhotoLog } from "src/app/photolog/photologs.component";

export const PHOTO_LOGS: PhotoLog[]  = [
    { 
        id: 1, 
        name: 'photo 1: portra 400 - waterfall', 
        dateCreated: Date.now(), 
        dateModified: Date.now(),
        focallength: 75, 
        aperture: 2.8, 
        shutterSpeed: 1/200, 
        iso: 400
    },
    { 
        id: 2, 
        name: 'photo 2: portra 400 - mountain cliff over river', 
        dateCreated: Date.now(), 
        dateModified: Date.now(),
        focallength: 75, 
        aperture: 11, 
        shutterSpeed: 1/60, 
        iso: 400
    }
];