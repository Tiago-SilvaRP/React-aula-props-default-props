type TaskProp = {
    description?: string
}

export const DefaultProp = ({ description = "Nenhuma tarefa passada!" }: TaskProp) => {
    return <p>Tarefa: {description}</p>
}


// COMO SERIA COM JS PURO e tipando ela, esta tipagem tbm da certo com tsx
// export const DefaultProp = ({description = "Nenhuma tarefa passada!"}: {description: string}) => {
//     return <p>Tarefa {description}</p>
// }