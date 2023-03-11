

export const Qoute = ({data}) => {
        return (
        
            <blockquote className="blockquote text-end">
                <img src={data.image} className="img-fluid" alt="..."></img>
                <p className="mb-1">{data.location.name}</p>
                <p className="mb-1">{data.status}</p>
                <footer className="blockquote-footer">{data.name}</footer>
            </blockquote>
        )
}
