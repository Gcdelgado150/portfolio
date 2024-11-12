document.addEventListener('DOMContentLoaded', function() {
    const skillBars = document.querySelectorAll('.skill-bar');

    skillBars.forEach(bar => {
        const percentage = bar.getAttribute('data-percentage');
        bar.style.setProperty('--bar-width', percentage + '%');
    });

    // Smooth scrolling for navigation
    const anchors = document.querySelectorAll('nav a');
    
    anchors.forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            // Ensure the target ID is valid
            if (targetId && targetId.startsWith('#')) {
                e.preventDefault();
                
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                } else {
                    console.warn(`No element found for ID ${targetId}`);
                }
            }
        });
    });
});

const skills = document.querySelectorAll('.skill');

skills.forEach(skill => {
    // Get the tooltip text and score
    const tooltipText = skill.querySelector('.skill-image').dataset.tooltip;
    const scoreText = skill.querySelector('.skill-image').dataset.score;

    // Create tooltip element
    const tooltip = document.createElement('div');
    tooltip.className = 'custom-tooltip'; // Updated class name
    tooltip.innerHTML = `${tooltipText}<br>Proficiencia: ${scoreText}`; // Use <br> for line break
    skill.appendChild(tooltip); // Append tooltip to the skill box

    skill.addEventListener('mouseover', () => {
        const randomRotation = Math.random() * 10 - 5; // Random number between -5 and 5
        skill.style.transform = `translateY(-5px) rotate(${randomRotation}deg)`;
    });

    skill.addEventListener('mouseout', () => {
        skill.style.transform = 'translateY(0) rotate(0)';
    });
});


/*Project list*/
let currentIndex = 0;

function navigate(direction) {
    const projects = document.querySelectorAll('.project');
    const totalProjects = projects.length;

    // Update current index
    currentIndex += direction;

    // Loop around if out of bounds
    if (currentIndex < 0) {
        currentIndex = totalProjects - 1; // Go to last project
    } else if (currentIndex >= totalProjects) {
        currentIndex = 0; // Go to first project
    }

    // Update transform property to show the current project
    const container = document.querySelector('.project-container');
    const offset = currentIndex * -100; // Move left by 100% for each index
    container.style.transform = `translateX(${offset}%)`;
}

// Content in English
const contentEN = `
<p>
    I started my journey working with <span>Machine Learning</span> in 2014 at the lab of 
    <a href="https://www.yonsei.ac.kr/en_sc/index.jsp">Yonsei University</a>, developing and modifying models 
    for various industrial tasks (in the automotive sector).
    <br><br>
    Later, I worked as an <span class='span_occupation'>Intern</span> in the <span>Computer Vision</span> field, 
    applying the knowledge I had previously acquired in machine learning and applying it to computer vision 
    tasks for large companies, achieving great results. For example, I worked with <span>Python</span>, <span>AWS</span>, 
    <span>JavaScript</span>, and <span>OpenCV</span>. 
    (<a href="https://enacom.com.br/cases/isklera">Project Isklera</a>, for example).
    <br><br>
    After this successful phase, I transitioned to a <span class='span_occupation'>Data Analyst</span> role, 
    which was highly demanded at the time, and I stayed in this position for about 3 years. By applying Python and 
    its data analysis and visualization libraries, we were able to build robust predictive models integrated with 
    our clients' applications.
    <br>
    During this period, I had more exposure to <span>PySpark</span> and large-scale processing techniques. I also 
    learned other technologies such as <span>SQL</span>, <span>RESTful APIs</span>, <span>KAFKA</span>, and <span>OpenShift</span>.
    <br>
    This experience was essential for working with data and technologies that are now common in Data Science.
    <br><br>
    I worked as a <span class='span_occupation'>Technical Data Lead</span>, which provided me with valuable leadership 
    experience, coordinating and instructing the data team on creating <span>ETL</span> processes for complex projects 
    for clients in the industrial sector, like Gerdau and VLi. 
    <br><br>
    Currently, I'm discovering new skills and studying tools that I had not explored before.
    I've studied a lot and worked on some projects with <span>Django</span>, building <span>RESTful APIs</span> for end-to-end solutions. 
    I find <span>Streamlit</span> to be fascinating in terms of its simplicity and practicality.
    This portfolio was entirely built with <span>HTML</span> and <span>CSS</span>.
    <br><br>
    I am currently studying and implementing <span>AI</span> projects using the powerful <span>LangChain</span>, 
    and I look forward to sharing some projects soon.
    <br><br>
    In the future, I hope to apply all the knowledge I’ve gained throughout my journey to make a real difference in the world.
</p>
`;

// Content in Portuguese
const contentPT = `
<p>
    Iniciei minha trajetória trabalhando com <span>Machine Learning</span> em 2014 no laboratório 
    da <a href="https://www.yonsei.ac.kr/en_sc/index.jsp">Yonsei University</a> criando e 
    modificando modelos para diversas tarefas industriais (no setor automobilistico).
    <br><br>
    Posteriormente trabalhei como <span class='span_occupation'>Estagiário</span> no setor de <span>Visão computacional</span>, 
    aplicando os conhecimentos que havia adquirido anteriormente com machine learning e aplicando 
    em Visão computacional para grandes empresas e com ótimos resultados. Aqui trabalhei por exemplo, com <span>Python</span>, <span>AWS</span>, <span>JavaScript</span>, <span>OpenCV</span>.
    (<a href="https://enacom.com.br/cases/isklera">Projecto Isklera</a> por exemplo).
    <br><br>
    Após essa etapa de sucesso comecei uma migração para <span class='span_occupation'>Analista de Dados</span>, que estava em alta na 
    época, no qual fiquei por 3 anos aproximadamente. Aplicando Python e suas bibliotecas de análises e visualizações podíamos construir modelos
    de previsões robustos e integrados às aplicações dos clientes.
    <br>
    Nesta época já tive um maior contato com <span>PySpark</span> e técnicas de processamento em larga escala. Tive contato e aprendi 
    também várias outras tecnologias como <span>SQL</span>, <span>API RESTful</span>, <span>KAFKA</span>, <span>OpenShift</span>.
    <br>
    Dessa forma obtive uma experiência relevante e indispensável para trabalhar com dados e com as 
    tecnologias que hoje são comuns em Data Science. Passando por vários percausos, aprendi bastante, 
    tanto na área de tecnologia e suas ferramentas como também no relacionamento com o cliente, 
    com a equipe e gestores.
    <br><br>
    Atuei como <span class='span_occupation'>Líder Técnico de Dados</span> o que me trouxe uma bagagem interessante de liderança, coordenando e 
    instruindo a equipe de dados na construção de processos <span>ETL</span> para projetos complexos para
    clientes do setor da indústria como Gerdau e VLi. 
    <br><br>
    Hoje me encontro descobrindo novos talentos e aproveitando a oportunidade de estudar outras ferramentas
    que não tinha conhecimento suficientes sobre.
    Estudei bastante e fiz alguns projetos com <span>Django</span> aplicando <span>API RESTful</span> para construir soluções completas de ponta a ponta, 
    achei interessantissimo o conceito e a praticidade do <span>Streamlit</span>, 
    esse portfolio foi construido inteiramente em <span>HTML</span> e <span>CSS</span>.
    <br><br>
    Estou estudando e implementando projetos de <span>AI</span> utilizando o fortíssimo <span>LangChain</span> e espero divulgar projetos em breve.
    <br><br>
    Para o futuro, espero aplicar todo o conhecimento que adquiri ao longo dessa trajetória para realmente fazer a diferença no mundo.
</p>
`;

// Change content based on selected language
document.getElementById('pt-btn').addEventListener('click', function() {
    document.getElementById('about-content').innerHTML = contentPT;
});

document.getElementById('en-btn').addEventListener('click', function() {
    document.getElementById('about-content').innerHTML = contentEN;
});
