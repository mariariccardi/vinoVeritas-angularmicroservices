import { Service } from './service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export abstract class AbstractService<DTO> implements Service<DTO> {
    type: string;
    port: string = '8080';

    constructor(protected http: HttpClient){
    }

    getAll(): Observable<DTO[]> {
        return this.http.get<DTO[]>('http://localhost:'+ this.port + '/' + this.type + '/getAll');
    }

    read(id:number): Observable<DTO>{
        return this.http.get<DTO>('http://localhost:' + this.port + '/' + this.type + '/read?id=' + id);
    }

    insert(dto:DTO): Observable<any>{
        return this.http.post('http://localhost:' + this.port + '/' + this.type + '/insert', dto);
    }

    update(dto:DTO): Observable<any>{
        return this.http.put('http://localhost:' + this.port + '/' + this.type + '/update', dto);
    }

    delete(id:number): Observable<any>{
        return this.http.delete('http://localhost:' + this.port + '/' + this.type + '/delete?id=' + id);
    }

}
