type TaskProps = {
    description: string,
}
//COMO É SPO UMA LINHA O RETURN POSSO OMITIR O ()
export const NewTask = ({ description }: TaskProps) => {
    return <li>Tarefa: {description}</li>;
};

// COM EM JS SEM TIPAGEM
// export const NewTask = ({ description }) => {
//     return  <li>Tarefa: {description}</li>
// }