import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { map, Observable } from 'rxjs';

@Injectable()
export class UndefinedToNullInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    // before controller에 들어오기 전

    // after controller에 들어오고 난 후 데이터를 리턴할 때
    return next
      .handle()
      .pipe(map((data) => (data === undefined ? null : data)));
  }
}
