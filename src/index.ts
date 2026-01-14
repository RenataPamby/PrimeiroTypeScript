import { criarTarefa, excluirTarefa, exibirTarefas } from './functions.js';

//É obrigatorio preencher o titulo e o status, mas opicional preencher a prioridade
criarTarefa({ titulo: 'Estudar TypeScript', status: "Concluido", });
criarTarefa({ titulo: 'Estudar React', status: "Pendente", prioridade: "Prioridade"});

exibirTarefas();

excluirTarefa(2);
exibirTarefas();

