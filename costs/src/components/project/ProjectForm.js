import { useEffect, useState } from 'react'
import Input from '../form/Input';
import Select from '../form/Select';
import SubmitButton from '../form/SubmitButton';
import styles from './ProjectForm.module.css';

function ProjectForm({ btnText, handleSubmit, projectData }) {

  const [categories, setCategories] = useState([]);
  const [project, setProject] = useState(projectData || []);

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
        console.log(data);
      })
      // se ocorre algum erro, mostre o erro no console
      .catch((error) => console.log(error))
  }, []);

  const submit = (event) => {
    event.preventDefault();
    //console.log(project)
    handleSubmit(project);
  }

  function handleChange(event) {
    setProject({ ...project, [event.target.name]: event.target.value });
  }

  function handleCategory(event) {
    setProject({
      ...project,
      category: {
        id: event.target.value,
        name: event.target.options[event.target.selectedIndex].text
      }
    });
  }

  return (
    <form onSubmit={submit} className={styles.form}>
      <Input
        handleOnChange={handleChange}
        type="text"
        text="Nome do Projeto"
        name="name"
        placeholder="Insira o nome do projeto"
        value={project.name ? project.name : ""}
      />
      <Input
        handleOnChange={handleChange}
        type="number"
        text="Orçamento do Projeto"
        name="budget"
        placeholder="Insira o orçamento total"
        value={project.budget ? project.budget : ""}
      />
      <Select
        handleOnChange={handleCategory}
        name="category_id"
        text="Selecione a categoria"
        options={categories}
        value={project.category ? project.category.id : ""}
      />
      <SubmitButton text={btnText} />
    </form>
  );
}

export default ProjectForm;
