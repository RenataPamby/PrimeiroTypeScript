export type StatusTarefa = "Pendente" | "Concluido";
export type PrioridadeTarefa = "Urgente" | "Prioridade" | "Medio" | "Baixo";

export interface Tarefa {
    id: number,
    titulo: string,
    status: StatusTarefa,
    prioridade?: PrioridadeTarefa
}
export interface CriarTarefaDTO {
    titulo: string,
    status: StatusTarefa,
    prioridade?: PrioridadeTarefa
}