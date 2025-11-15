//Cainã Sandes Batista; RM: 568571.

var perfis = [
	{
		nome: "Ana Clara Oliveira Porto",
		cargo: "Psicóloga",
		foto: "src/assets/imgs/p1.png",
		skills: ["Resolução de problemas, aprendizado contínuo, pensamento crítico."],
		formacao: "Psicologia (Centro Universitário Braz Cubas)",
		experiencia: "Ministração de palestras",
		soft: ["Escuta ativa, comunicação."],
		hobbies: ["Leitura"],
		ods: "ODS4"
	},
	{
		nome: "Geovanne da Silva Amorim",
		cargo: "Programador",
		foto: "src/assets/imgs/p2.png",
		skills: ["..., ..., ...."],
		formacao: "Ciências da computação (Universidade Federal do ABC)",
		experiencia: "Venda em varejo",
		soft: ["..., ...."],
		hobbies: ["Futebol"],
		ods: "ODS?"
	},
	{
		nome: "Rian Fernandes Belchior",
		cargo: "Engenheiro",
		foto: "src/assets/imgs/p3.png",
		skills: ["..., ..., ...."],
		formacao: "Engenharia de computação (Centro Universitário das Faculdades Metropolitanas Unidas)",
		experiencia: "...",
		soft: ["..., ...."],
		hobbies: ["Videogame"],
		ods: "ODS?"
	}
];

var perguntas = [
    {
        perg: "Qual habilidade é mais associada a UX?",
        opts: ["SQL", "Prototipagem", "Redes"],
        correta: 1
    },
    {
        perg: "O que é essencial para requalificação profissional?",
        opts: ["Aprendizado contínuo", "Estabilidade única", "Evitar mudanças"],
        correta: 0
    },
    {
        perg: "Qual ODS está ligado à educação?",
        opts: ["ODS4", "ODS2", "ODS14"],
        correta: 0
    },
    {
        perg: "Qual é a porcentagem estimada de tarefas humanas que podem ser automatizadas nos próximos 5 anos devido à IA?",
        opts: ["40%", "25%", "60%"],
        correta: 0
    },
    {
        perg: "Qual dos temas abaixo é um avanço tecnológico que está transformando profissões e negócios?",
        opts: ["Regulamentação trabalhista", "Transições verdes", "Inteligência artificial"],
        correta: 2
    },
    {
        perg: "Além de personalizar o aprendizado, a tecnologia pode otimizar qual processo humano no trabalho?",
        opts: ["Automatizar tarefas repetitivas.", "Criar modelos de renda mínima.", "Fortalecer redes tripartites."],
        correta: 0
    },
    {
        perg: "Qual habilidade humana é citada como cada vez mais valorizada junto com pensamento crítico e empatia?",
        opts: ["Análise de dados", "Criatividade", "Segurança cibernética"],
        correta: 1
    },
    {
        perg: "Qual é o termo usado para a aquisição de novas competências para permanecer relevante?",
        opts: ["Upskilling", "Reskilling", "Gig Economy"],
        correta: 1
    },
    {
        perg: "Qual o risco mais imediato para populações vulneráveis diante das rápidas transições tecnológicas?",
        opts: ["Maior exclusão profissional.", "Aumento na demanda por soft skills.", "Diminuição das desigualdades sociais."],
        correta: 0
    },
    {
        perg: "Qual a principal preocupação da ONU e OIT em relação ao futuro do trabalho, que pode exacerbar desigualdades?",
        opts: ["Adoção de IA como parceira.", "Concentração das vantagens tecnológicas.", "Transições justas e sustentabilidade."],
        correta: 1
    },
    {
        perg: "Qual regime de trabalho, que oferece flexibilidade, tende a se consolidar como padrão em muitas áreas?",
        opts: ["Remoto integral", "Presencial exclusivo", "Híbrido"],
        correta: 2
    },
    {
        perg: "O que a OIT enfatiza ser necessário fortalecer para que o trabalho do futuro seja digno?",
        opts: ["Soft skills e hobbies.", "Regulação trabalhista e proteção social.", "Inovação e prototipagem."],
        correta: 1
    },
    {
        perg: "Qual ODS está alinhado à redução das desigualdades e à garantia de oportunidades para todos?",
        opts: ["ODS 10", "ODS 9", "ODS 4"],
        correta: 0
    },
    {
        perg: "Qual ODS que trata de trabalho decente e crescimento econômico?",
        opts: ["ODS 9", "ODS 10", "ODS 8"],
        correta: 2
    },
    {
        perg: "Além da utilidade econômica, qual é o enfoque essencial para modelos de trabalho promissores?",
        opts: ["Propósito e impacto social", "Estabilidade única", "Exclusão de vulneráveis"],
        correta: 0
    }
];