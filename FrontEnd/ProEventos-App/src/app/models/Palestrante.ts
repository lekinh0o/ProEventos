import { RedeSocial } from './RedeSocial';

export interface Palestrante {


         id: number ;
         nome: string ;
         miniCurriculo: string ;
         imagemURL: string ;
         email: string ;
         redesSociais: RedeSocial[];
         palestrantesEventos: Palestrante[] ;


}
