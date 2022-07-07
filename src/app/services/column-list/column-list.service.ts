import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Column } from 'src/app/interfaces/column';
import { Frame } from 'src/app/interfaces/frame';

@Injectable({
  providedIn: 'root'
})
export class ColumnListService {

  private url = "http://localhost:3000/"

  constructor(private http: HttpClient) { }

  public saveColumn(frameId: number, columnName: string, order: number): Observable<Column> {
    return this.http.post<Column>(`${this.url}columns`, {frame_id: frameId, name: columnName, order: order}).pipe(
      res => res,
      error => error
    );
  }

  public getColumnsByFrame(frame_id: number): Observable<Array<Column>> {
    return this.http.get<Array<Column>>(`${this.url}columns`).pipe(
      map((res: any) => {
        let columns: Array<Column> = [];
        for (let i = 0; i < res.length; i++) {
          if (res[i].frame_id == frame_id) {
            columns.push(res[i]);
          }
        }
        return columns;
      }),
      error => error
    );
  }

  public updateNameColumn(column_id: number, column_id_name: string): Observable<Column> {
    return this.http.patch<Column>(`${this.url}columns/${column_id}`, {name: column_id_name}).pipe(
      res => res,
      error => error
    );
  }
}
