const winners = [
    {
        nome: 'Equipe Maravilinda',
        pais: 'Canadá',
    },

    {
        nome: 'Liga da Justiça',
        pais: 'Brasil',
    },

    {
        nome: 'Mega Group',
        pais: 'EUA',
    }
];

const vencedores = winners.map((equipe) => {
    return equipe.nome
});

console.log(vencedores);