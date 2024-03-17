import Item from "./Item";

function List() {
    return (
        // criando um componente sem elemento pai
        // react fragments -> sintaxe: <> ... </>
    <>
    <h1>Marcas: </h1>
    <ul>
        <Item marca="Ferrari" anoDeLancamento={1947}></Item>
        <Item marca="Fiat" anoDeLancamento={1899}></Item>
        <Item marca="BMW" anoDeLancamento={1916}></Item>
        {/* como eu não informei nenhum valor, o props do componente será preenchido pelo defaultProps */}
        <Item></Item>
        <Item anoDeLancamento={1999}></Item>
        <Item marca={"Audi"}></Item>
    </ul>
    </>       
    );
}

export default List;