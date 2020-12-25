# apiProgramacaoGuiadeTv
Api em NodeJs que retorna um Json com a programação dos canais consultados.

essa simples api usa a api da net combo de uma forma mais simplificada retornando um json com todos os canais
consultados.

usando o endpoint /programação (get);
no corpo da requisição usar
# Usage


```js
{
    {
	"ids": ["1270","832"],
	"hours": 5
    }
}
```
os numeros dentro do array são os códigos dos canais que serão consultados.
Você pode consultar quantos canais quiser de uma só vez.

No atributo "hours", você especifica qntas horas a partir de agora vc quer fazer a pesquisa.
No exemplo acima, retornará programação dos canais especificados em "ids" de agora até 5 horas pra frente.
Você pode expecificar quantas horas quiser, mas o retorno será conforme o limite da net combo.
