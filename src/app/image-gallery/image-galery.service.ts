import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageGaleryService {

  httpOptions = {
    headers: new HttpHeaders
  };

  httpOptionsImage = {
    headers: new HttpHeaders
  };

  constructor(private http: HttpClient) {
    const header = {
      'content-type': 'application/json',
    };
    this.httpOptions = {
      headers: new HttpHeaders(header)
    };

    const headerImage = {
      // 'Content-Type': 'multipart/form-data',
    };
    this.httpOptionsImage = {
      headers: new HttpHeaders(headerImage)
    };
  }

  setHeader(header: any): void {
    this.httpOptions = header;
  }

  getImage(file : FormData): Observable<any> {
    console.log(file);
    return this.http.post<Response>('http://localhost:8080/upload',file, this.httpOptionsImage).pipe(
      catchError(this.handleError('create corcustomer', file))
    );
  }

  private handleError<T>(operation = 'operation', result?: T): any {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  private log(message: string): void {
    // console.log(`Customer Service: ${message}`);
  }

}
