import { NewTask } from "./NewTask"

export const Tasks = () => {
    return (
        <>
            <ul>Lista de tarefas</ul>
            <NewTask description="Estudar react" />
            <NewTask description="Assistir filme" />
        </>
    )
}