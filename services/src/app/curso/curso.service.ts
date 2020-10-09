import { Injectable } from '@angular/core';
import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';

@Injectable()
export class CursosService {
    
    getCursos(){
        return ['javaScript', 'bootstrap', 'HTML','ANGULAR']
    }
}