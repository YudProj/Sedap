export default function ContainerArtikel({children}){
    return(
        <div className="card">
            <h1>Tinjauan Terhadap Pengelolaan Sampah </h1>
            <br/>
                {children}
            <br/>
            <footer>
                <p>2025 - Politeknik Caltex Riau</p>
            </footer>
        </div>
    )
}