export default function ContainerQnA({children}){
    return(
        <div className="card">
            <h5> Pertanyaan</h5>
            <br/>
                {children}
            <br/>
            <footer>
                <p>2025 - Politeknik Caltex Riau</p>
            </footer>
        </div>
    )
}