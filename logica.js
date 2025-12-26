        const form = document.getElementById('meuFormulario');

        form.addEventListener('submit', async (e) => {
            e.preventDefault(); // Impede a página de recarregar

            // Captura os dados do formulário
            const dados = {
                senioridade: document.querySelector('input[name="senioridade"]:checked')?.value || "Não informado",
                discord: document.getElementById('discord').value,
                email: document.getElementById('email').value,
                idade: Number(document.getElementById('idade').value),
                objetivo: document.getElementById('objetivo').value
            }

                ;

            const URL = window.location.hostname.includes('localhost') ? 'http://localhost:3000/enviar'
                : '/enviar';

            try {
                const response = await fetch(URL, {

                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    }

                    ,
                    body: JSON.stringify(dados)
                });

                if (response.ok) {
                    alert('Respostas enviadas com sucesso!');
                    form.reset(); // Limpa o formulário
                }

                else {
                    alert('Erro ao enviar dados.');
                }
            }

            catch (error) {
                console.error('Erro na requisição:', error);
                alert('Erro ao conectar com o servidor.');
            }
        });

        // script da Animação de Fundo
        document.addEventListener('DOMContentLoaded', () => {
            const container = document.getElementById('background-animation');
            const icons = ['database.png',
                'git.png',
                'github.png',
                'js.png',
                'nodejs.png',
                'render.jpg'
            ];

            // Configurações
            const iconCount = 15; // Quantidade de ícones flutuando

            for (let i = 0; i < iconCount; i++) {
                const img = document.createElement('img');
                const randomIcon = icons[Math.floor(Math.random() * icons.length)];

                img.src = `animation/${randomIcon}`;
                img.classList.add('floating-icon');

                // Posição vertical aleatória
                img.style.top = Math.random() * 100 + 'vh';

                // Tamanho aleatório
                const size = Math.random() * (80 - 30) + 30; // Entre 30px e 80px
                img.style.width = size + 'px';

                // Duração da animação aleatória (velocidade)
                const duration = Math.random() * (20 - 10) + 10; // Entre 10s e 20s
                img.style.animationDuration = duration + 's';

                // Atraso aleatório para não começarem todos juntos
                const delay = Math.random() * 20;
                img.style.animationDelay = '-' + delay + 's'; // Delay negativo para já começar "andando"

                img.style.opacity = Math.random() * (0.6 - 0.2) + 0.2; // Opacidade variável

                container.appendChild(img);
            }
        });