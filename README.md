# HTTP Codes API

Esta é uma API simples feita com Node.js e Express que cataloga códigos HTTP com descrições e imagens lúdicas. A API fornece dois endpoints: um para listar os códigos HTTP com código, título e imagem, e outro para detalhar um código específico, incluindo uma descrição mais longa.

## Endpoints

### 1. Listagem de Códigos HTTP

**URL**: `https://http-codes-api-64nb.onrender.com`

**Método**: `GET`

**Descrição**: Retorna uma lista de todos os códigos HTTP com código, título e imagem.

**Exemplo de Resposta**:

```json
[
  {
    "code": 200,
    "title": "OK",
    "image": "/images/200.png"
  },
  {
    "code": 404,
    "title": "Not Found",
    "image": "/images/404.png"
  },
  {
    "code": 500,
    "title": "Internal Server Error",
    "image": "/images/500.png"
  }
]
```

### 2. Detalhamento de um Código HTTP

**URL**: `https://http-codes-api-64nb.onrender.com/:code`

**Método**: `GET`

**Descrição**: Retorna os detalhes de um código HTTP específico, incluindo a descrição completa.

**Parâmetro**:

- `:code`: O código HTTP que você quer consultar (ex.: `200`, `404`, etc.)

**Exemplo de Resposta**:

```json
{
  "code": 404,
  "title": "Not Found",
  "description": "The requested resource could not be found on the server. This typically happens when the resource is missing or the URL is incorrect.",
  "image": "/images/404.png"
}
```