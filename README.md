# apiProgramacaoGuiadeTv
Api em NodeJs que retorna um Json com a programação dos canais consultados.

essa simples api usa a api da net combo de uma forma mais simplificada retornando um json com todos os canais
consultados.

usando o endpoint /programação (get);
no corpo da requisição usar
# Usage


```js
    {
        "ids": ["1270","832"],
        "hours": 5
    }
```
os numeros dentro do array são os códigos dos canais que serão consultados.
Você pode consultar quantos canais quiser de uma só vez.

No atributo "hours", você especifica qntas horas a partir de agora vc quer fazer a pesquisa.
No exemplo acima, retornará programação dos canais especificados em "ids" de agora até 5 horas pra frente.
Você pode expecificar quantas horas quiser, mas o retorno será conforme o limite da net combo.

# Retorno da Api

A api retorna algo como:

```js
{
  "response": {
    "docs": [
      {
        "id_canal": "832",
        "dh_inicio": "2020-12-25T13:00Z",
        "dh_fim": "2020-12-25T13:30Z",
        "titulo": "Top Wing"
      },
      {
        "id_canal": "832",
        "dh_inicio": "2020-12-25T13:30Z",
        "dh_fim": "2020-12-25T14:00Z",
        "titulo": "Baby Shark"
      },
      {
        "id_canal": "832",
        "dh_inicio": "2020-12-25T14:00Z",
        "dh_fim": "2020-12-25T14:30Z",
        "titulo": "Dora, a Aventureira"
      },
      {
        "id_canal": "832",
        "dh_inicio": "2020-12-25T14:30Z",
        "dh_fim": "2020-12-25T15:00Z",
        "titulo": "Dora, a Aventureira"
      },
      {
        "id_canal": "832",
        "dh_inicio": "2020-12-25T15:00Z",
        "dh_fim": "2020-12-25T15:30Z",
        "titulo": "Rusty Rivets"
      },
      {
        "id_canal": "832",
        "dh_inicio": "2020-12-25T15:30Z",
        "dh_fim": "2020-12-25T16:00Z",
        "titulo": "Blaze e Os Monster Machine"
      },
      {
        "id_canal": "832",
        "dh_inicio": "2020-12-25T16:00Z",
        "dh_fim": "2020-12-25T16:30Z",
        "titulo": "Butterbean's Cafe"
      },
      {
        "id_canal": "832",
        "dh_inicio": "2020-12-25T16:30Z",
        "dh_fim": "2020-12-25T17:00Z",
        "titulo": "Abby Hatcher"
      }
    ],
    "numFound": 8,
    "start": 0
  },
  "responseHeader": {
    "QTime": 9,
    "params": {
      "q": "id_revel:1_832 ",
      "fl": "dh_fim dh_inicio titulo id_canal",
      "sort": "id_canal asc,dh_inicio asc",
      "fq": "dh_inicio:[2020-12-25T12:39:01Z TO 2020-12-25T16:39:01Z]",
      "rows": "100000",
      "wt": "json"
    },
    "status": 0
  }
}
```

# Id dos Canais
Aqui listo alguns ids de cannais, mais ids vc pode procurar no site do netcombo 
neste link - https://www.net.com.br/tv-por-assinatura/programacao/guia-de-canais
Normalmente o id é o numero do link para descrição de um canal.

DOCUMENTÁRIOS

Futura - 430
National Geographic - 472
Discovery Channel - 421
Animal Planet - 407
The History Channel - 2257
Discovery Turbo - 419
Discovery Science - 423
Natgeo Wild - 933
Discovery HD - 1066
Discovery Theater HD - 877

FILMES HD

Canal Brasil HD - 1131
TNT HD - 875
Megapix HD - 878
Space HD - 876
Cinemax HD - 1098
Prime Box Brazil HD - 1641
Studio Universal HD - 2062
Paramount Network HD - 1025
