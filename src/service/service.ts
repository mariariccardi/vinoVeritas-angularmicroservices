import { Observable } from 'rxjs';


export interface Service<DTO> {
    getAll(): Observable<DTO[]>;
    read(id: number): Observable<DTO>;
    insert(dto:DTO): Observable<any>;
    update(dto:DTO): Observable<any>;
    delete(id:number): Observable<any>;


}
