import Item from "./Item";

function List() {
    return (
        // criando um componente sem elemento pai
        // react fragments -> sintaxe: <> ... </>
    <>
    <h1>Marcas: </h1>
    <ul>
        <Item marca="Ferrari"></Item>
        <Item marca="Fiat"></Item>
        <Item marca="BMW"></Item>
        <Item marca="Audi"></Item>
    </ul>
    </>       
    );
}

export default List;