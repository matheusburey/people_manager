import { useEffect, useState } from "react";
import { IPerson } from "../../types/IPerson.ts";
import { getPeopleApi, deletePersonApi } from "../../api/index";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import "./style.css";

export function Home() {
  const navigate = useNavigate();
  const [people, setPeople] = useState<IPerson[]>([]);

  const getPeople = async () => {
    const resp = await getPeopleApi();
    setPeople(resp["data"]);
  };

  const deletePerson = async (id_person: number) => {
    const res = await deletePersonApi(id_person);
    if (res) {
      toast.success("Usuario deletado com sucesso!");
      const newPeople = people.filter(
        (person) => person.id_person !== id_person
      );
      setPeople(newPeople);
    } else {
      toast.error("Erro ao deletar usuario!");
    }
  };

  useEffect(() => {
    getPeople();
  }, []);

  return (
    <div id="home">
      <header>
        <h1>Lista de pessoas</h1>
        <button onClick={() => navigate(`/create-person`)}>
          Adicionar Pessoa
        </button>
      </header>
      <main>
        <table>
          <thead>
            <tr>
              <th>NOME</th>
              <th>DATA DE ADMISSÃO</th>
              <th>MAIS OPÇÕES</th>
            </tr>
          </thead>
          <tbody>
            {people.map((person) => {
              return (
                <tr key={person.id_person}>
                  <td>{person.name.split(" ")[0]}</td>
                  <td>{person.admission_date}</td>
                  <td>
                    <button
                      onClick={() => navigate(`person/${person.id_person}`)}
                    >
                      Ver mais
                    </button>
                    <button
                      onClick={() =>
                        navigate(`edit-person/${person.id_person}`)
                      }
                    >
                      Editar
                    </button>
                    <button
                      className="button-delete"
                      onClick={() => deletePerson(person.id_person)}
                    >
                      Deletar
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </main>
    </div>
  );
}
