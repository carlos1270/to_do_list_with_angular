import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Frame } from 'src/app/interfaces/frame';

@Injectable({
  providedIn: 'root'
})
export class FrameListService {

  private url = "http://localhost:3000/"

  constructor(private http: HttpClient) { }

  public getFrames(): Observable<Array<Frame>> {
    return this.http.get<Array<Frame>>(`${this.url}frames`).pipe(
      res => res,
      error => error
    )
  }
}
