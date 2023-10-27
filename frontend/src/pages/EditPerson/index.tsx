import { useNavigate, useParams } from "react-router-dom";
import { updatePersonApi, getPersonApi } from "../../api/index";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

import "./style.css";

export function EditPerson() {
  const navigate = useNavigate();
  const { id_person } = useParams();
  const [name, setName] = useState("");
  const [rg, setRg] = useState("");
  const [cpf, setCpf] = useState("");
  const [admissionDate, setAdmissionDate] = useState("");
  const [birthDate, setBirthDate] = useState("");

  const getPerson = async () => {
    const res = await getPersonApi(id_person);
    const data = res["data"];
    setName(data.name);
    setRg(data.rg);
    setCpf(data.cpf);
    setAdmissionDate(data.admission_date);
    setBirthDate(data.birth_date);
  };

  const updatePerson = async () => {
    const data = {
      name,
      rg,
      cpf,
      birth_date: birthDate,
      admission_date: admissionDate,
      position: "",
    };
    const res = await updatePersonApi(id_person, data);
    if (res) {
      toast.success("Registro alterado com sucesso!");
      navigate(`/person/${id_person}`);
    } else {
      toast.error("Erro ao alterar registro!");
    }
    console.log(data);
  };

  useEffect(() => {
    getPerson();
  }, []);

  return (
    <div id="form-edit-person" className="card">
      <h1>Editar Registro</h1>
      <div>
        <label htmlFor="name">Nome:</label>
        <input
          id="name"
          type="text"
          placeholder="Nome"
          value={name}
          onChange={({ target }) => setName(target.value)}
        />
      </div>
      <div>
        <label htmlFor="rg">RG:</label>
        <input
          id="rg"
          type="text"
          placeholder="RG"
          value={rg}
          onChange={({ target }) => setRg(target.value)}
        />
      </div>
      <div>
        <label htmlFor="cpf">CPF:</label>
        <input
          id="cpf"
          type="text"
          placeholder="CPF"
          value={cpf}
          onChange={({ target }) => setCpf(target.value)}
        />
      </div>
      <div>
        <label htmlFor="dateN">Data de nascimento:</label>
        <input
          id="dateN"
          type="date"
          value={birthDate}
          onChange={({ target }) => setBirthDate(target.value)}
        />
      </div>
      <div>
        <label htmlFor="dateAd">Data de admissão:</label>
        <input
          id="dateAd"
          type="date"
          value={admissionDate}
          onChange={({ target }) => setAdmissionDate(target.value)}
        />
      </div>
      <div>
        <button onClick={() => navigate(-1)}>Voltar</button>
        <button className="save" onClick={updatePerson}>
          Salvar
        </button>
      </div>
    </div>
  );
}
