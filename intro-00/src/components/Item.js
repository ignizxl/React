// podemos definir tipos para as prop utilizando o PropTypes
import PropTypes from 'prop-types';

function Item({marca, anoDeLancamento}){
    return(
        <>
        <li>{marca} - {anoDeLancamento}</li>
        </>
    );
}

Item.propTypes = {
    // definindo o tipo string para a 'marca' e o tipo number para o anoDeLancamento
    //e ambos são obrigatórios
    marca: PropTypes.string.isRequired,
    anoDeLancamento: PropTypes.number.isRequired
}

Item.defaultProps = {
    // Quando o props não for preenchido com nenhum valor, ele será preechido com o
    //defaultProps
    marca: "Marca não informada!",
    anoDeLancamento: 0
}

export default Item;