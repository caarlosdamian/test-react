import {
  ChangeEvent,
  FormEvent,
  useState,
} from 'react';
import { Select } from '../../components/select/Select';
import { TextBox } from '../../components/textBox/TextBox';
import { priorityOptions, statusOptions, tasks } from '../../utils';
import './Home.css';
import { Prueba } from '../../components/Prueba';

export const Home = () => {
  const [mostrar, setmostrar] = useState(false);

  const [form, setForm] = useState({
    name: '',
    priority: '',
    state: '',
  });

  const handleChange = (
    event: ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    setForm((prev) => {
      return { ...prev, [event.target.name]: event.target.value };
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="home">
      <form action="" onSubmit={handleSubmit}>
        <TextBox
          label="Name"
          id="name"
          name="name"
          onChange={(e) => handleChange(e)}
          placeholder="Escribe el nombre"
        />
        <Select
          options={priorityOptions}
          id="priority"
          name="priority"
          label="Priority"
          onChange={(e) => handleChange(e)}
        />
        <Select
          options={statusOptions}
          id="state"
          name="state"
          label="State"
          onChange={(e) => handleChange(e)}
        />

        <button type="submit">Search</button>
      </form>
      {
        // mostrar  ? <Prueba/> : null
        mostrar && <Prueba name={form.name}/>
      }
      <button onClick={() => setmostrar((prev) => !prev)}>Mostrar</button>
      <div className="">
        {tasks.map((item) => (
          <p key={item.uid}>{item.name}</p>
        ))}
      </div>
    </div>
  );
};
