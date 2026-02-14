import { Observable, tap } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { environment } from '@environments/environment';

@Injectable()
export class TimerInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const start = performance.now();
    return next.handle(req).pipe(
      tap(() => {
        if (!environment.production) {
          const time: number = performance.now() - start;

          let url = req.url;

          [8000, 8001, 8002, 8003, 8004, 8005, 8006, 8007, 8008, 8009, 8010].forEach((port) => {
            url = url.replace(`https://eklipse.grupoclinicamedicos.com:${port}/`, '/');
            url = url.replace(`http://localhost:${port}/`, '/');
          });

          if (time > 10) console.log(url, time.toFixed() + 'ms');
        }
      }),
    );
  }
}
