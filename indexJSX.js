// Aplicacao utilizada em um projeto ReactJS, utizando ReactDOM com o Babel como tradutor. Ou seja, o resultato é o mesmo do index.html
import './styles.css';


const App = () => {
    return (
        <div style={{
            margin: 'auto', width: 768, backgroundColor: '#EEE', padding:
                12, borderRadius: 8
        }}>
            <label className="rotulo" htmlFor="nome" style={{
                display: 'block', marginBottom:
                    4
            }}>Nome:</label>
            <input type="text" id="nome" style={{
                paddingTop: 8, paddingBottom: 8,
                borderStyle: 'hidden', width: '100%', borderRadius: 8, outline: 'none', boxSizing:
                    'border-box'
            }} />
            <button style={{
                marginTop: 12, paddingTop: 8, paddingBottom: 8,
                backgroundColor: 'blueviolet', color: 'white', border: 'none', width: '100%',
                borderRadius: 8
            }}>Enviar</button>
        </div>
    )
}