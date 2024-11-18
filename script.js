/* Reset e fontes */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Roboto', sans-serif;
    background-color: #121212;
    color: #FFF;
    padding-top: 100px;
}

a {
    text-decoration: none;
    color: inherit;
}

/* Navbar */
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.9);
    padding: 20px;
    z-index: 1000;
}

.navbar .logo {
    font-size: 2.5rem;
    font-weight: bold;
    color: #FFD700;
    letter-spacing: 3px;
}

.nav-links {
    display: flex;
    justify-content: flex-end;
    list-style-type: none;
}

.nav-links li {
    margin: 0 20px;
}

.nav-links li a {
    font-size: 1.2rem;
    color: white;
    transition: all 0.3s ease;
}

.nav-links li a:hover {
    color: #FFD700;
}

/* Hero Section */
.hero {
    background: url('assets/hero-background.jpg') no-repeat center center/cover;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
    padding: 0 20px;
}

.hero-content h1 {
    font-size: 4rem;
    font-weight: bold;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
}

.hero-content p {
    font-size: 1.8rem;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
}

/* Seções */
.section {
    padding: 80px 20px;
    text-align: center;
    background: #1e1e1e;
}

/* Animação de Carros 3D */
#carro-3d-container {
    width: 100%;
    height: 500px;
    margin: 50px auto;
}

/* Botão de Quiz */
.quiz-button {
    padding: 20px 40px;
    background-color: #FFD700;
    color: #121212;
    font-size: 1.5rem;
    border: none;
    cursor: pointer;
    border-radius: 10px;
    transition: all 0.3s ease;
}

.quiz-button:hover {
    background-color: #FFC107;
}

/* Rodapé */
footer {
    text-align: center;
    padding: 20px;
    background-color: #000;
    color: #FFD700;
}

/* Efeitos de Confete */
.confetti {
    position: absolute;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 9999;
}
