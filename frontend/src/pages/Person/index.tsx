import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { IPerson } from "../../types/IPerson.ts";
import { getPersonApi, deletePersonApi } from "../../api/index";
import { toast } from "react-toastify";

import "./style.css";

export function Person() {
  const { id_person } = useParams();
  const navigate = useNavigate();
  const [person, setPerson] = useState<IPerson>({});

  const getPerson = async () => {
    const res = await getPersonApi(id_person);
    setPerson(res["data"]);
  };

  const deletePerson = async (id_person: number) => {
    const res = await deletePersonApi(id_person);
    if (res) {
      toast.success("Usuario deletado com sucesso!");
      navigate("/");
    } else {
      toast.error("Erro ao deletar usuario!");
    }
  };

  useEffect(() => {
    getPerson();
  }, []);

  return (
    <div id="show-person" className="card">
      <h1>Editar Registro</h1>
      <div>
        <h2>Nome:</h2>
        <h2>{person.name}</h2>
      </div>
      <div>
        <h2>RG:</h2>
        <h2>{person.rg}</h2>
      </div>
      <div>
        <h2>CPF:</h2>
        <h2>{person.cpf}</h2>
      </div>
      <div>
        <h2>Data de nascimento:</h2>
        <h2>{person.birth_date}</h2>
      </div>
      <div>
        <h2>Data de admissão:</h2>
        <h2>{person.admission_date}</h2>
      </div>
      <div>
        <button onClick={() => navigate(-1)}>Voltar</button>
        <button onClick={() => navigate(`/edit-person/${person.id_person}`)}>
          Editar
        </button>
        <button
          className="button-delete"
          onClick={() => deletePerson(person.id_person)}
        >
          Deletar
        </button>
      </div>
    </div>
  );
}
