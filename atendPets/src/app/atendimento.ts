export interface Atendimento {
    id: string;
    data: Date; 
    tutor: string;
    nome: string;
    tipo: string;
    raca: string;
    obs: string;
    exibirDetalhes: boolean;
}