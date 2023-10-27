# People Manager

### Visão Geral

#### Frontend
O frontend desta aplicação foi desenvolvido utilizando as tecnologias modernas React, Vite e TypeScript. 


Rota Padrão

A rota padrão para acessar a página inicial da aplicação é: http://127.0.0.1:5173

Instale as Dependências:

```sh
npm install
```
Inicie o Servidor de Desenvolvimento:


```sh
npm run dev
```

#### backend
Projeto realizado para teste tecnico esta API permite o gerenciamento de informações sobre pessoas. Ela oferece operações CRUD (Create, Read, Update, Delete) para manipular os dados das pessoas no sistema.

Instale as Dependências (e necessário ter o poetry):

```sh
poetry install
```
Inicie o Servidor de Desenvolvimento:


```sh
uvicorn app.main:app
```
### Formato de Resposta

As respostas da API estão no formato JSON.

Base URL: http://127.0.0.1:8000/api/v1/

Endpoints
1. Obter todas as Pessoas
Request

    >Método: GET
    
    >Endpoint: /person
    
    Descrição: Obtém todas as pessoas cadastradas no sistema.

Response

    Status: 200 OK
    Exemplo de Resposta:

    
``` json
{
  "data": [
    {
      "name": "Alberto Vieira",
      "cpf": "168.637.122-53",
      "id_person": 1,
      "admission_date": "2020-09-28",
      "rg": "25.507.105-2",
      "birth_date": "1997-07-01",
      "position": null
    },
    {
      "name": "Alexandre Teixeira",
      "cpf": "877.733.889-89",
      "id_person": 2,
      "admission_date": "2020-05-15",
      "rg": "79.474.888-8",
      "birth_date": "1982-08-16",
      "position": null
    }
  ]
}
```

2. Obter uma Pessoa por ID
Request

    >Método: GET
    
    >Endpoint: /person/{person_id}
    
    Descrição: Obtém informações de uma pessoa específica pelo seu ID.

Response

    Status: 200 OK se encontrado, 404 Not Found se não encontrado
    Exemplo de Resposta:

  
  ```json
  {
    "data": {
      "name": "Alberto Vieira",
      "cpf": "168.637.122-53",
      "id_person": 1,
      "admission_date": "2020-09-28",
      "rg": "25.507.105-2",
      "birth_date": "1997-07-01",
      "position": null
    }
  }
```


3. Adicionar uma Nova Pessoa
Request

    >Método: POST
    
    >Endpoint: /person
    
    Descrição: Adiciona uma nova pessoa ao sistema.
    Corpo da Requisição (JSON):

    ```json
    {
      "name": "Alberto Vieira",
      "cpf": "168.637.122-53",
      "id_person": 1,
      "admission_date": "2020-09-28",
      "rg": "25.507.105-2",
      "birth_date": "1997-07-01",
      "position": null
    }
    ```

Response

    Status: 201 Created
    Sem Resposta:

4. Atualizar uma Pessoa Existente
Request

    >Método: PUT
    
    >Endpoint: /person/{person_id}
    
    Descrição: Atualiza informações de uma pessoa existente pelo seu ID.
    Corpo da Requisição (JSON):

   ```json
    {
      "name": "Alberto Vieira",
      "cpf": "168.637.122-53",
      "id_person": 1,
      "admission_date": "2020-09-28",
      "rg": "25.507.105-2",
      "birth_date": "1997-07-01",
      "position": null
    }
    ```

Response

    Status: 200 OK se atualizado, 404 Not Found se não encontrado


5. Remover uma Pessoa
Request

    >Método: DELETE
    
    >Endpoint: /person/{person_id}
    
    Descrição: Remove uma pessoa do sistema pelo seu ID.

Response

    Status: 204 No Content se removido com sucesso, 404 Not Found se não encontrado
