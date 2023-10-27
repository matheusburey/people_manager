export interface IPerson {
  id_person: number
  name: string
  rg: string
  cpf: string
  birth_date: string
  admission_date: string
  position: string
}

export interface ICreateNewPerson {
  name: string
  rg: string
  cpf: string
  birth_date: string
  admission_date: string
  position: null
}