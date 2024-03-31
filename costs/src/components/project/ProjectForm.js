import { useEffect, useState } from 'react'
import Input from '../form/Input';
import Select from '../form/Select';
import SubmitButton from '../form/SubmitButton';
import styles from './ProjectForm.module.css';

function ProjectForm({ btnText }) {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // fazendo um request com FETCH API para a minha url categories
    fetch('http://localhost:5000/categories', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      // pegando os dados da resposta e transformando em json
      .then((resp) => resp.json())
      // pegando os dados em json e setando setCategories com os dados 
      .then((data) => {
        setCategories(data);
      })
      // se ocorre algum erro, mostre o erro no console
      .catch((error) => console.log(error));
  }, []);

  return (
    <form className={styles.form}>
      <Input type="text" text="Nome do Projeto" name="name" placeholder="Insira o nome do projeto"></Input>
      <Input type="number" text="Orçamento do Projeto" name="budget" placeholder="Insira o orçamento total"></Input>
      <Select name="category_id" text="Selecione a categoria" options={categories}></Select>
      <SubmitButton text={btnText}></SubmitButton>
    </form>
  );
}

export default ProjectForm;
