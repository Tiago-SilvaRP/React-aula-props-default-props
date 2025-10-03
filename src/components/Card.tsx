type CardProps = {
    title: string,
    description: string
}

export const Card = ({ description, title }: CardProps) => {
    return (
        <>
            <div style={{backgroundColor:"beige", textAlign:"center", padding:"10px", border:"solid 1px", maxWidth:"300px", margin:"20px", borderRadius: "8px"}}>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </>
    )
}