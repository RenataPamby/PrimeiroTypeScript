import { Tarefa, CriarTarefaDTO } from './model.js';

let proximoId: number = 0;
let tarefas: Tarefa[] = [];

export function criarTarefa(dados: CriarTarefaDTO): Tarefa {
    const novaTarefa: Tarefa = {
    id: proximoId+1,
    titulo: dados.titulo,
    status: dados.status,
    prioridade: dados.prioridade
    }
    
    proximoId++;
    tarefas.push(novaTarefa);
    return novaTarefa;
}

export function exibirTarefas(): void{
    console.log(tarefas);
}

export function excluirTarefa(id: number): boolean {
    console.log("Qual tarefa voce quer excluir?");
    console.log(tarefas);
    console.log("voce escolheu excluir o", id);
    const tamanhoInicial = tarefas.length;
    
    //Para cada elemento do array (tarefa), ele verifica se a condição tarefa.id !== id é verdadeira.
    //Se a condição for verdadeira, o elemento é mantido no novo array.
    //Se for falsa, o elemento é descartado.
    tarefas = tarefas.filter(tarefa => tarefa.id !== id);
    return tarefas.length < tamanhoInicial;
}
  

