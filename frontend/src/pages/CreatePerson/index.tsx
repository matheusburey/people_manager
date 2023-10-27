import { useNavigate } from "react-router-dom";
import { createPersonApi } from "../../api/index";
import { useState } from "react";
import { toast } from "react-toastify";

import "./style.css";

export function CreatePerson() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [rg, setRg] = useState("");
  const [cpf, setCpf] = useState("");
  const [admissionDate, setAdmissionDate] = useState("");
  const [birthDate, setBirthDate] = useState("");

  const addNewPerson = async () => {
    const data = {
      name,
      rg,
      cpf,
      birth_date: birthDate,
      admission_date: admissionDate,
      position: "",
    };
    const res = await createPersonApi(data);
    if (res) {
      toast.success("Usuario inserido com sucesso!");
      setName("");
      setRg("");
      setCpf("");
      setAdmissionDate("");
      setBirthDate("");
    } else [toast.error("Erro ao inserir usuario!")];
  };

  return (
    <div id="form-create-person" className="card">
      <h1>Registro</h1>
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
        <button onClick={() => navigate(`/`)}>Voltar</button>
        <button className="save" onClick={addNewPerson}>
          Salvar
        </button>
      </div>
    </div>
  );
}
