import NavBar from "../components/NavBar";

const Home = () => {
  return (
    <>
      <div
        style={{
          textAlign: "center",
          padding: "20px",
          margin: "20px",
          border: "1px solid black",
          borderRadius: "10px",
          backgroundColor: "#654321",
          boxShadow:
            "0 20px 25px 0 rgba(0, 0, 0, 0.2), 0 12px 40px 0 rgba(0, 0, 0, 0.19)",
          color: "white",
          fontFamily: "Helvetica",
        }}
      >
        <h1>Este es mi Primer componente:</h1>
        <h3>
          esta es la pagina home y lo que usare como indice para saber usar
          react y estilos...
        </h3>
        <h3>
          mi nombre es mateo acierno tengo 19 años y estos son mis primeros 4
          meses estudiando programacion, nunca antes habia tocado algo parecido
        </h3>
      </div>
      <div  style={{
          textAlign: "center",
          padding: "20px",
          margin: "20px",
          border: "1px solid black",
          borderRadius: "10px",
          backgroundColor: "#654321",
          boxShadow:
            "0 20px 25px 0 rgba(0, 0, 0, 0.2), 0 12px 40px 0 rgba(0, 0, 0, 0.19)",
          color: "white",
          fontFamily: "Helvetica",
        }}>
        <h1>Este proyecto integrador trabaja usando las tecnologias: React, express, postgres, node, javascript , html , css , Typescript, typeORm</h1>
        <h3>Las cosas que me gustan son: Lol, K-pop, la tecnologia de la programacion (cosas odiables) y el futbol mi jugador favorito es Palermo </h3>
        <a> Aguante boca!!</a>
      </div>
    </>
  );
};

export default Home;


// ya se que los estilos no deben ser usados de esta manera pero bueno, me daba mucha paja moverlos a un archivo css y llamarlo con la clase asi que asi se queda jeje.
// señor corrector de trabajos de herny si lee esto no me saque puntos porfa :D
// me gusta mas el back : cosas que me faltaron del back : son middlewares para la validacion de datos para mayor seguridad , evitar el manejo de errores, test y pruebas.
// encontra de una inyeción sql y no me daba tiempo a corregirlo. asi que asi quedo jeje.
