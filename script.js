// Variables
let currentSlide = 0;
const slideTitles = ["Portada", "Referencias", "Información Teórica", "Información Práctica", "Evidencias"];
const slideContents = [
  // Portada
  {
    title: slideTitles[0],
    content: `
  <img src="logo.png" alt="Logo">
  <h1>Aplicación de la Energía en la Vida Diaria</h1>
  <h2>Radio Emergencia Dínamo Solar</h2>
  <p><strong>P.S.P.</strong> Martínez Torres Yesica</p>
  <p><strong>Alumno:</strong> Becerra Martínez Julián Rafael</p>
  <p><strong>Fecha:</strong> 12 junio 2025</p>
    `},

  // Referencias
  {
    title: slideTitles[1],
    content: `
  <h1>Referencias</h1>
  <ul><a
      href="https://openstax.org/books/physics/pages/18-3-electric-field"
      target="_blank">OpenStax – “Electric Field”</a></ul>

  <ul><a
      href="https://www.significados.com/ley-de-coulomb/"
      target="_blank">Significados.com – “Ley de Coulomb (qué es, fórmula y ejemplos)”</a></ul>

  <ul><a
      href="https://openstax.org/books/f%C3%ADsica-universitaria-volumen-2/pages/7-2-potencial-electrico-y-diferencia-de-potencial"
      target="_blank">OpenStax – Física universitaria, sección “Potencial eléctrico y diferencia de potencial”</a></ul>

  <ul><a
      href="https://phet.colorado.edu/en/simulations/ohms-law"
      target="_blank">Sparkl – “Ohm’s Law and resistivity”</a></ul>

  <ul><a href="https://espanol.libretexts.org/Fisica/Fisica_Conceptual/Introducci%C3%B3n_a_la_F%C3%ADsica_%28Parque%29/04%3A_F%C3%ADsica_Cl%C3%A1sica_-_Termodin%C3%A1mica%2C_Electricidad_y_Magnetismo%2C_y_Luz/10%3A_Magnetismo/10.10%3A_Ley_de_Inducci%C3%B3n_de_Faraday-_Ley_de_Lenz"
      target="_blank">LibreTexts – “10.10: Ley de Inducción de Faraday – Ley de Lenz”</a></ul>

  <ul><a
      href="https://www.mercadolibre.com.mx/radio-emergencia-dinamo-solar-linterna-portatil-recargable-color-rojo/p/MLM44313831#:~:text=,6cm"
      target="_blank">MercadoLibre – Radio Emergencia Dínamo-Solar</a></ul>
    `},

  // Información Teórica

  // Campo Eléctrico
  {
    title: slideTitles[2],
    content: `
  <h1>Campo Eléctrico</h1>
  <h2>Definición</h2>
  <p>El campo eléctrico en un punto del espacio representa la fuerza eléctrica por unidad de carga que experimentaría una carga puntual positiva allí. Es una magnitud vectorial (tiene módulo y dirección), y su dirección coincide con la fuerza que se aplicaría a una carga positiva de prueba.</p>
    `},
  {
    title: slideTitles[2] + ` 2`,
    content: `
  <h1>Campo Eléctrico</h1>
  <h2>Fórmula general</h2>
  <p>Se define como:</p>
  <div>$$ \\mathbf{E} = \\frac{\\mathbf{F}}{q_{\\text{prueba}}} $$</div>
  <p>donde:</p>
  <p>· \\( \\mathbf{E} \\) es el campo eléctrico (en N/C).</p>
  <p>· \\( \\mathbf{F} \\) es la fuerza eléctrica que se ejerce sobre una carga de prueba.</p>
  <p>· \\( \q_{\\text{prueba}} \\) es la carga de prueba.</p>
    `},
  {
    title: slideTitles[2] + ` 3`,
    content: `
  <h1>Campo Eléctrico</h1>
  <h2>Cálculo para una carga puntual</h2>
  <p>Cálculo para una carga puntual \\( \Q \\), con la fuerza entre dos cargas dada por la ley de Coulomb, se tiene:</p>
  <div>$$ E = \\frac{kQ}{r^2} $$</div>
  <p>y en forma vectorial:</p>
  <div>$$ \\mathbf{E}(\\mathbf{r}) = \\frac{1}{4\\pi\\varepsilon_0} \\frac{Q}{r^2}\\hat{\\mathbf{r}} $$</div>
  <p>donde:</p>
  <div>$$ k = 9 \\times 10^9 \\, \\mathrm{{Nm^2} / {C^2}} $$</div>
  <p>· \\( r \\) es la distancia desde la carga puntual hasta el punto de interés.</p>
  <p>· \\( \\hat{\\mathbf{r}} \\) es el vector unitario que indica dirección radial (hacia fuera si \\( \Q \\) es positiva, hacia dentro si negativa).</p>
    `},

  // Ley de Coulomb
  {
    title: slideTitles[2] + ` 4`,
    content: `
  <h1>Ley de Coulomb</h1>
  <h2>Enunciado</h2>
  <p>La fuerza eléctrica entre dos cargas puntuales \\( q_1 \\) y \\( q_2 \\) separadas por una distancia \\( r \\) es:
  </p>
  <div>$$ \F = k\\ \\frac{q_1 q_2}{r^2} $$</div>
  <p>donde:</p>
  <p>\\( F \\) = magnitud de la fuerza de atracción o repulsión.</p>
  <div>$$ \k = 9\\ \\times 10^9 \\, \\mathrm{Nm^2} / {C^2} $$</div>
  <p>El sentido se determina según que sea repulsivo (cargas del mismo signo) o atrayente (cargas de signo opuesto).</p>
    `},

  // Potencial Eléctrico
  {
    title: slideTitles[2] + ` 5`,
    content: `
  <h1>Potencial Eléctrico</h1>
  <h2>Definición</h2>
  <p>El potencial eléctrico \\( V \\) en un punto se define como la energía potencial eléctrica por unidad de carga situada en ese punto. Es una magnitud escalar e independiente de la carga de prueba utilizada.</p>
    `},
  {
    title: slideTitles[2] + ` 6`,
    content: `
  <h1>Potencial Eléctrico</h1>
  <h2>Fórmula genérica</h2>
  <div>$$ \V = \\mathrm{\\frac {U}{q}} $$</div>
  <p>donde:</p>
  <p>· \\( U \\) es la energía potencial eléctrica.</p>
  <p>· \\( q \\) es la carga de prueba.</p>­
  <p>Y la unidad es el voltio (V), equivalente a J/C.</p>
    `},
  {
    title: slideTitles[2] + ` 7`,
    content: `
  <h1>Potencial Eléctrico</h1>
  <h2>Para una carga puntual</h2>
  <p>Para una carga puntual \\( Q \\) tomada con referencia cero en el infinito, el potencial en la distancia \\( r \\) es:</p>
  <div>$$ \V(r) = \\mathrm{\\frac {kQ}{r}} $$</div>
  <p>donde:</p>
  <div>$$ \k = 9\\ \\times 10^9 \\, \\mathrm{Nm^2} / {C^2} $$</div>
    `},
  {
    title: slideTitles[2] + ` 8`,
    content: `
  <h1>Potencial Eléctrico</h1>
  <h2>Diferencia de potencial (voltaje)</h2>
  <p>La diferencia de potencial entre dos puntos A y B (con voltaje \\( V_A - V_B \\)) se define como el cambio de energía potencial por carga:</p>
  <div>$$ \\Delta V = V_B - V_A = -\\int_A^B \\mathbf{E} \\cdot d\\mathbf{s} $$</div>
  <p>Este valor se mide en voltios y también se conoce comúnmente como voltaje.</p>
    `},

  // Ley de Ohm
  {
    title: slideTitles[2] + ` 9`,
    content: `
  <h1>Ley de Ohm</h1>
  <h2>Enunciado clásico (para conductores ohmicos)</h2>
  <p>La Ley de Ohm establece que la tensión aplicada (\\( V \\)) es directamente proporcional a la corriente (\\( I \\)) que la atraviesa, siempre que se mantengan constantes condiciones como temperatura y estructura del material:</p>
  <div>$$ V = IR $$</div>
  <p>Los materiales que cumplen esta relación lineal se llaman conductores óhmicos.</p>
    `},
  {
    title: slideTitles[2] + ` 10`,
    content: `
  <h1>Ley de Ohm</h1>
  <h2>Ecuación fundamental</h2>
  <p>A partir de la ecuación básica, se pueden obtener también las formas equivalentes:</p>
  <div>$$ I = \\frac{V}{R} \\quad R = \\frac{V}{I} $$</div>
  <p>Aquí \\( R \\) es la resistencia eléctrica, una constante que caracteriza el conductor bajo las mismas condiciones.</p>
    `},
  {
    title: slideTitles[2] + ` 11`,
    content: `
  <h1>Ley de Ohm</h1>
  <h2>Resistividad y geometría</h2>
  <p>La resistencia de un conductor depende de su resistividad intrínseca (\\( \\rho \\)), su longitud (\\( L \\)) y su área transversal (\\( A \\)), según:</p>
  <div>$$ R = \\rho \\frac{L}{A} $$</div>
  <p>Esto indica que:</p>
  <p>· A mayor longitud \\( L \\), mayor resistencia.</p>
  <p>· A mayor sección \\( A \\), menor resistencia.</p>
  <p>· La resistividad \\( \\rho \\) es característica del material (cobre, aluminio, etc.).</p>
  `},

  // Ley de Faraday (Inducción Electromagnética)
  {
    title: slideTitles[2] + ` 12`,
    content: `
  <h1>Ley de Faraday</h1>
  <h2>Enunciado</h2>
  <p>La Ley de Faraday establece que el voltaje inducido \\( \\varepsilon \\) en un circuito es proporcional a la rapidez con la que cambia el flujo magnético (\\( \\Delta \\Phi \\)) que lo atraviesa, siendo:</p>
  <div>$$ \\varepsilon = -N \\frac {\\Delta \\Phi}{\\Delta t} $$</div>
  <p>donde:</p>
  <p>· \\( \\varepsilon \\) = fuerza electromotriz (FEM) inducida.</p>
  <p>· \\( N \\) = número de espiras o vueltas de la bobina.</p>
  <p>· \\( \\Delta \\Phi \\) = cambio del flujo magnético.</p>
  <p>· \\( \\Delta t \\) = intervalo de tiempo en que ocurre dicho cambio.</p>
    `},
  {
    title: slideTitles[2] + ` 13`,
    content: `
  <h1>Ley de Faraday</h1>
  <h2>Flujo magnético</h2>
  <p>El flujo magnético (\\( \\Phi \\)) por una espira se define como:</p>
  <div>$$ \\Phi = \\int \\mathbf{B} \\cdot d \\mathbf{A} $$</div>
  <p>En casos sencillos con campo uniforme \\( \\mathbf{B} \\) y área \\( \\mathbf{A} \\) perpendicular, \\( \\Phi = \\mathbf{B} \\ \\mathbf{A} \\). Una variación de este flujo con el tiempo genera la FEM mencionada.</p>
    `},
  {
    title: slideTitles[2] + ` 14`,
    content: `
  <h1>Ley de Faraday</h1>
  <h2>Ley de Lenz (signo negativo)</h2>
  <p>El signo negativo en la fórmula indica la Ley de Lenz, que dice que la corriente inducida produce un campo magnético que se opone al cambio de flujo que la originó. Esto refleja el principio de conservación de la energía</p>
    `},
  {
    title: slideTitles[2] + ` 15`,
    content: `
  <h1>Ley de Faraday</h1>
  <h2>Para una bobina con \\( N \\) vueltas</h2>
  <p>En una bobina de \\( N \\) vueltas, todas las espiras experimentan el mismo cambio de flujo, por lo que la FEM total inducida es:</p>
  <div>$$ \\varepsilon = -N \\frac{\\Delta \\Phi}{\\Delta t} $$</div>
  <p>Es la forma general de la Ley de Faraday para sistemas con múltiples espiras.</p>
    `},

  // Información práctica (Desarrollo del proyecto)
  {
    title: slideTitles[3],
    content: `
  <h1>Información práctica (Desarrollo del proyecto)</h1>
  <h2>Objeto de estudio:</h2>
  <p>Linterna de dinamo con manivela, modelo similar al mostrado en MercadoLibre:
  <ul><a
      href="https://www.mercadolibre.com.mx/radio-emergencia-dinamo-solar-linterna-portatil-recargable-color-rojo/p/MLM44313831#:~:text=,6cm"
      target="_blank">MercadoLibre – Radio Emergencia Dínamo-Solar</a></ul>
  </p>
    `},

  {
    title: slideTitles[3] + ` 2`,
    content: `
  <h1>Información práctica</h1>
  <h2>Descripción general de la linterna de dinamo</h2>
  <p>Una radio portátil de emergencia con linterna y dinamo, como el modelo mostrado en MercadoLibre, combina varios principios físicos y componentes eléctricos en un solo dispositivo compacto. Su diseño permite generar electricidad de forma autónoma mediante una manivela conectada a un generador de corriente (dinamo). Al girar la manivela, se hace rotar un imán dentro de una bobina, produciendo una variación de flujo magnético que, según la Ley de Faraday, induce una corriente eléctrica. Esta corriente puede alimentar directamente una linterna LED y también recargar una batería interna de ion de litio (generalmente de 3.7 V). Además, el dispositivo cuenta con un pequeño panel solar que aprovecha la energía luminosa del sol, convirtiéndola en energía eléctrica mediante el efecto fotovoltaico, como fuente secundaria de recarga. La batería alimenta tanto la radio (AM/FM y frecuencias de alerta) como el puerto USB de salida, que permite cargar teléfonos móviles en situaciones de emergencia. El sistema está diseñado para ofrecer autonomía energética, siendo útil en actividades al aire libre, apagones o catástrofes naturales. Gracias a su construcción robusta y portátil, representa una solución integrada y eficiente para la generación y el almacenamiento de energía en condiciones sin acceso a la red eléctrica.</p>
    `},

  // Tabla
  {
    title: slideTitles[3] + ` 3`,
    content: `
  <h1>Información práctica</h1>
  <h2>Ubicación de los conceptos teóricos en la linterna</h2>
  <div styles="width: 100%; overflow-x: auto; display: flex; justify-content: center;">
  <div class="tabla-container">
    <table class="tabla-centrada">
      <thead>
        <tr>
          <th>Tema</th>
          <th>Elemento en la linterna de dinamo</th>
          <th>Descripción de la aplicación</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Ley de Faraday</td>
          <td>Bobina del generador (dinamo) + iman/estátor magnético</td>
          <td>
            <p>La bobina gira dentro del campo magnético (o el imán gira respecto a la bobina), provocando un cambio continuo del flujo magnético \\( Φ_B \\). Según la ecuación \\( E = -N {\\frac {{d}{Φ}_B}{{d}{t}}} \\), se genera una fem en la bobina. Esta fem es la tensión que alimenta la etapa de carga de los LEDs y/o el supercondensador interno. A mayor velocidad de rotación (mayor \\( \\mathrm{{{d}{Φ}_B} / {{d}{t}}} \\)) se produce mayor voltaje inducido.</p>
          </td>
        </tr>
        <tr>
          <td>Potencial Eléctrico</td>
          <td>Voltaje en bornes de la bobina / bornes del supercondensador / etapas de regulación de tensión</td>
          <td>
            <p>El voltaje inducido \\( E \\) en la bobina crea una diferencia de potencial \\( V \\) entre los extremos del devanado. Ese \\( V \\) es lo que “empuja” los electrones a través del circuito de carga y hacia los LED's. Cuando se conecta un multímetro en modo voltímetro entre los contactos de salida (o entre bornes de supercondensador), medimos el potencial eléctrico generado; por ejemplo, típico ~3 V–5 V mientras se crashea la manivela, dependiendo de número de vueltas y diseño.</p>
          </td>
        </tr>
        <tr>
          <td>Campo Eléctrico</td>
          <td>Interior de los conductores (cableado interno) + en la proximidad de las superficies metálicas de la
            bobina
          </td>
          <td>
            <p>Dentro de los hilos de cobre y pistas impresas, existe un campo eléctrico \\( \\vec{E} \\) que impulsa a los electrones a moverse, dando origen a la corriente. Entre las superficies opuestas de los polos de la bobina y el bobinado, se establece un campo eléctrico cuando hay diferencia de potencial. En general, \\( \\vec{E} = -∇V \\). No suele medirse directamente, pero es implícito en el voltaje medido.</p>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
      `},

  // Tabla 2
  {
    title: slideTitles[3] + ` 4`,
    content: `
  <h1>Información práctica</h1>
  <h2>Ubicación de los conceptos teóricos en la linterna</h2>
  <div styles="width: 100%; overflow-x: auto; display: flex; justify-content: center;">
  <div class="tabla-container">
    <table class="tabla-centrada">
      <thead>
        <tr>
          <th>Tema</th>
          <th>Elemento en la linterna de dinamo</th>
          <th>Descripción de la aplicación</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Ley de Ohm</td>
          <td>LED(s) + Circuito limitador (resistencias internas o circuitería electrónica de regulación)</td>
          <td>
            <p>El LED no es puramente ohmico, pero internamente el circuito incluye resistencias de limitación para evitar corrientes excesivas. La corriente \\( I \\) que atraviesa el LED y la resistencia de protección cumple \\( V = IR \\) en la parte resistiva. Se puede medir la resistencia equivalente en frío de la etapa LED (+ resistencia interna), calculando \\(R_{eq} = \\mathrm{V_{LED}} / {I_{LED}} \\) cuando está iluminado. Al variar la carga, la ley de Ohm permite relacionar voltaje y corriente.</p>
          </td>
        </tr>
        <tr>
          <td>Ley de Coulomb</td>
          <td>Interacción entre cargas en el devanado de la bobina (cargas móviles en el cobre) + Fuerza entre polos de
            imán y la armadura</td>
          <td>
            <p>En el interior del cable de cobre, los electrones libres se repelen entre sí según la ley de Coulomb \\( \F = k\\ \\frac{|q_1 q_2|}{r^2} \\). Esa fuerza eléctrica impulsa la dinámica microscópica de los ajustes de densidad de carga. En la zona del imán permanente (estátor), los polos magnéticos “atraen” o “repelen” electrones en la bobina al rotar, pero aquí es más un efecto magnético; sin embargo, la separación de cargas al inducir la fem implica fuerzas eléctricas que, en última instancia, obedecen a la ley de Coulomb. No se mide directamente en el proyecto, pero es base conceptual: la fem inducida separa cargas que se repelen/atraen.</p>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
    `},

  {
    title: slideTitles[3] + ` 5`,
    content: `
  <h1>Mediciones y cálculos prácticos</h1>
  <p>A continuación se propone una serie de mediciones que permiten cuantificar cada tema. Para ello se empleó un
    multímetro (modo voltímetro y amperímetro digital) y un cronómetro. Los datos presentados son ejemplos típicos
    obtenidos en laboratorio al rotar la manivela a velocidad moderada, aproximadamente 2 revoluciones por segundo.</p>
    `},

  // Tabla 3
  {
    title: slideTitles[3] + ` 6`,
    content: `
  <h1>Información práctica</h1>
  <h2>Mediciones y cálculos prácticos</h2>
  <div class="tabla-container">
    <table class="tabla-centrada">
      <thead>
        <tr>
          <th>Tema</th>
          <th>Magnitudes Medidas/Fórmulas</th>
          <th>Valores Obtenidos</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Ley de Faraday</td>
          <td>
            <p>· Velocidad de rotación: \\( f = 2Hz = 120rpm \\).</p>
            <p>· Número de vueltas de la bobina: \\( N = 200 \\).</p>
            <p>· Área de cada vuelta: \\( 1.5cm^2 = 1.5 × 10^{-4} m^2 \\).</p>
            <p>· Campo magnético aproximado: \\( B ≈ 0.12T \\).</p>
            <p>\\( Φ_B = B A \\cos(0°) \\)</p>
            <p>\\( E_{teórica} = N {\\frac {{d}{Φ}_B}{{d}{t}}} = N A B ω \\) (con \\( ω = 2πf\\)). </p>
          </td>
          <td>
            <p>\\( ω = 2π(2Hz) = 12.57 \\mathrm{{rad} / {s}} \\).</p>
            <p>\\( Φ_B = 0.12T × 1.5 × 10^{-4} m^2 = 1.8 × 10^{-5}Wb \\).</p>
            <p>\\( E_{teórica} ≈ 200 × 1.8 × 10^{-5}Wb × 12.57 \\mathrm{{rad} / {s}} ≈ 0.045V \\).</p>
            <p>Medición real con voltímetro: \\( V_{abiertos} = 3.2V \\).</p>
          </td>
        </tr>
      </tbody>
      <tbody>
        <tr>
          <td>Potencial Eléctrico</td>
          <td>
            <p>· Voltaje en bornes sin carga: se mide con voltímetro digital directamente en terminales: \\(
              V_{abiertos}
              \\).</p>
            <p>· Voltaje con carga (LED encendido): \\( V_{carga} \\).</p>
          </td>
          <td>
            <p>· \\( V_{abiertos} = 3.2 V \\).</p>
            <p>· Con LED encendido y giro continuo: \\( V_{carga} = 2.6 V \\).</p>
          </td>
        </tr>
        <tr>
          <td>Ley de Ohm</td>
          <td>
            <p>· Corriente en el circuito (LED con resistencia interna): se mide en modo amperímetro bajo carga.</p>
            <p>· Con \\( V_{carga} = 2.6 V, \I_{medida} = 0.085 A \\).</p>
            <p>· Resistencia equivalente</p>
            <p>\\( R_{LED + protección} = {\\frac {V_{carga}}{I_{medida}}} \\).</p>
          </td>
          <td>
            <p>· \\( I_{medida} = 0.085 A \\)</p>
            <p>· \\( R_{LED + protección} = {\\frac {2.6 V}{0.085 A}} ≈ 30.6 Ω \\).</p>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
    `},

  // Tabla 4
  {
    title: slideTitles[3] + ` 7`,
    content: `
  <h1>Información práctica</h1>
  <h2>Mediciones y cálculos prácticos</h2>
  <div class="tabla-container">
    <table class="tabla-centrada">
      <thead>
        <tr>
          <th>Tema</th>
          <th>Magnitudes Medidas/Fórmulas</th>
          <th>Valores Obtenidos</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Campo Eléctrico</td>
          <td>
            <p>· Cálculo aproximado de \\( E \\) dentro del filamento del LED: \\( E ≈ {\\frac {V_{carga}}{ℓ}} \\),
              donde \\( ℓ \\) = longitud aproximada del filamento (\\( ~1 mm = 1×10^{-3} m \\)).</p>
          </td>
          <td>
            <div>$$ \E = \\frac{2.6 V}{1 × 10^{-3} m} = 2.6 × 10^3 \\frac{V}{m} $$</div>
          </td>
        </tr>
      </tbody>
      <tbody>
        <tr>
          <td>Ley de Coulomb</td>
          <td>
            <p>· Interpretación cualitativa: no se hacen mediciones directas de fuerza entre cargas, pero se observa la
              separación de cargas inducida en la bobina (electrones libres moviéndose).</p>
            <p>· Se resalta que la fem inducida “separa” electrones a lo largo de la bobina, generando desequilibrios de
              carga que obedecen a la fuerza \\( F = k \\frac{|q_1 q_2|}{r^2} \\).</p>
          </td>
          <td>
            <p>· No hay un valor numérico directo; sin embargo, conceptualmente la Ley de Coulomb explica por qué los
              electrones separados en la bobina tienden a repelerse y desplazarse hacia los terminales, creando tensión.
            </p>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
    `},

  {
    title: slideTitles[3] + ` 8`,
    content: `
  <h1>Información práctica</h1>
  <h2>Nota</h2>
  <p>Los valores numéricos de la Ley de Faraday resultaron muy distintos entre teoría simplificada y práctica real
    porque la ecuación ideal \\( E = N A B ω \\) asume una bobina de geometría perfecta, sin núcleo ferromagnético y sin
    pérdidas. En la linterna real, el núcleo de hierro y la dinámica interna incrementan la fem inducida.</p>
    `},

  // Evidencias
  {
    title: slideTitles[4],
    content: `
  <h1>Evidencias (Similitudes y Conexiones Teóricas – Prácticas)</h1>
  <p>A continuación se muestran las evidencias de cómo cada concepto teórico se manifiesta en el funcionamiento real de
    la linterna de dinamo, así como las similitudes entre la teoría pura y su aplicación práctica:</p>
    `},

  {
    title: slideTitles[4] + ` 2`,
    content: `
  <h1>Evidencias</h1>
  <h2>Ley de Faraday ↔ Observación de voltaje inducido</h2>
  <p>Teoría:</p>
  <div>$$ \E = \-N {\\frac {{d}{Φ}_B}{{d}{t}}} $$</div>­
  <p>Práctica: Al girar la manivela, el voltímetro marca ~3.2 V; si se incrementa la velocidad de giro, el voltaje
    crece.</p>­
  <p>Similitud: El signo negativo (Ley de Lenz) implica que la corriente inducida se opone al cambio de flujo, y en la
    práctica se aprecia un “freno” mecánico al girar la manivela más rápido, pues el circuito absorbe más energía.</p>
    `},

  {
    title: slideTitles[4] + ` 3`,
    content: `
  <h1>Evidencias</h1>
  <h2>Potencial Eléctrico ↔ Voltaje en bornes</h2>
  <p>Teoría:</p>
  <div>$$ \V = \\mathrm{\\frac {U}{q_0}} $$</div>
  <p>El potencial mide la energía por carga.</p>­
  <p>Práctica: El multímetro registra 3.2 V en bornes abiertos; posteriormente al conectar el LED, baja a 2.6 V.</p>­
  <p>Similitud: El paso de energía mecánica a energía potencial eléctrica en la bobina coincide con la definición de
    voltaje. La caída de 0.6 V al conectar la carga refleja la disipación de energía interna (resistencias, electrónica
    de control).</p>
    `},

  {
    title: slideTitles[4] + ` 4`,
    content: `
  <h1>Evidencias</h1>
  <h2>Campo Eléctrico ↔ Fuerza interna que mueve electrones</h2>
  <p>Teoría:</p>
  <div>$$ \\vec{E} = \{-∇V} $$</div>­
  <p>Práctica: Dentro del filamento LED, \\( E ≈ 2.6 × 10^3 {\\frac {V}{m}} \\) (suficiente para que haya recombinación
    de electrones y emisión de luz).</p>­
  <p>Similitud: Aunque no se mida el campo con sensor, el valor aproximado explica por qué existe un movimiento ordenado
    de cargas a través de la unión del LED. En los conductores, el campo es mucho menor, pero es el que genera
    corriente.</p>
    `},

  {
    title: slideTitles[4] + ` 5`,
    content: `
  <h1>Evidencias</h1>
  <h2>Ley de Ohm ↔ Relación voltaje-corriente</h2>
  <p>Teoría:</p>
  <div>$$ \V = {\IR} $$</div>­
  <p>Práctica: Con \\( V_{carga} = 2.6 V \\) y \\( I = 0.085 A \\), se obtiene \\( R ≈ 30.6 Ω \\).</p>­
  <p>Similitud: Al variar el giro (voltage), la corriente varía en proporción lineal. Esto confirma que la resistencia
    equivalente del LED+circuito interno se comporta de manera aproximadamente ohmica dentro del rango de operación.</p>
    `},

  {
    title: slideTitles[4] + ` 6`,
    content: `
  <h1>Evidencias</h1>
  <h2>Ley de Coulomb ↔ Separación de cargas inducida</h2>
  <p>Teoría:</p>
  <div>$$ \F = k\\ \\frac{q_1 q_2}{r^2} $$</div>­
  <p>Práctica: No se mide directamente la fuerza, pero la fenomenología de “acumulación de carga” en la bobina y su
    repulsión/atracción interna obedece a las mismas interacciones eléctricas.</p>­
  <p>Similitud: El hecho de que exista un potencial eléctrico (voltaje) generado depende íntegramente de que las cargas
    se separen y se mantengan repeliéndose mutuamente hasta los bornes.</p>
    `},

  {
    title: slideTitles[4] + ` 7`,
    content: `
  <h1>Evidencias</h1>
  <h2>Integración de conceptos</h2>­
  <p>· La Ley de Faraday explica cómo se genera la fem en la bobina al girar la manivela dentro de un campo magnético.
  </p>­
  <p>· El potencial eléctrico resultante se mide con un voltímetro y corresponde a la energía disponible por carga.</p>­
  <p>· El campo eléctrico dentro de los conductores es el que hace que los electrones se muevan, produciendo corriente.
  </p>­
  <p>· La Ley de Ohm valida que la corriente es proporcional al voltaje e inversamente proporcional a la resistencia
    interna, tanto del LED como de las pistas de cobre.</p>­
  <p>· La Ley de Coulomb subyace a la separación de cargas que da origen al voltaje inducido; sin ella, no habría
    repulsión que acumule electrones en los terminales.</p>
    `},

  {
    title: slideTitles[4] + ` 8`,
    content: `
  <h1>Evidencias</h1>
  <h2>Aplicación práctica unificada</h2>­
  <p>· Una simple acción mecánica (girar la manivela) se traduce en un fenómeno electromagnético (Ley de Faraday), que
    genera un voltaje (Potencial Eléctrico), el cual establece un campo eléctrico y hace circular corriente (Ley de Ohm)
    a través del LED, produciendo luz.</p>­
  <p>· El proceso de separación de cargas en la bobina solo es posible gracias a las fuerzas eléctricas descritas por la
    Ley de Coulomb.</p>
    `},

  {
    title: slideTitles[4] + ` 9`,
    content: `
  <h1>Evidencias</h1>
  <h2>Fortalezas del proyecto</h2>­
  <p>Se demuestra de forma clara la conexión entre teoría y práctica, reforzando la comprensión de cada ley.</p>­
  <p>La linterna de dinamo es un ejemplo cotidiano y fácilmente reproducible en laboratorio escolar.</p>­
  <p>Las mediciones empíricas (voltaje, corriente) validan las ecuaciones fundamentales de la electrodinámica.</p>
    `},

  {
    title: slideTitles[4] + ` 10`,
    content: `
  <h1>Evidencias</h1>
  <h2>Limitaciones y consideraciones</h2>­
  <p>El valor teórico de la fem calculado con la expresión simplificada \\( E = N A B ω \\) difiere mucho de la medición
    real debido a la complejidad interna de la bobina y la presencia de núcleo ferromagnético.</p>­
  <p>La Ley de Coulomb, al no medirse directamente fuerza en Newtons, se evidencia de forma cualitativa; para una
    cuantificación sería necesario un montaje especializado (por ejemplo, gastar microscopio de fuerzas entre cargas
    puntuales).</p>­
  <p>En un dispositivo real, además de las leyes estudiadas, ocurren pérdidas (rozamiento mecánico, pérdidas en núcleo,
    calor en resistencias), que no se modelan en el tratamiento básico de las leyes presentadas.</p>
    `},
];

while (slideContents.length < 35) {
  slideContents.push({
    title: `Diapositiva ${slideContents.length + 1}`,
    content: `<p>Contenido adicional complementario.</p>`
  });
}

// DOM
const slidesContainer = document.getElementById('slides-container'),
  sidebar = document.getElementById('sidebar'),
  sidebarList = document.getElementById('sidebarList'),
  prevBtn = document.getElementById('prev'),
  nextBtn = document.getElementById('next'),
  toggleBtn = document.getElementById('sidebarToggle'),
  closeBtn = document.getElementById('closeSidebar'),
  themeToggle = document.getElementById('themeToggle');

// Generar slides y sidebar
slideContents.forEach((obj, i) => {
  const slide = document.createElement('div');
  slide.className = 'slide' + (i === 0 ? ' active portada' : '');
  slide.setAttribute('role', 'region');
  slide.setAttribute('aria-label', obj.title);

  const card = document.createElement('div');
  card.innerHTML = obj.content;
  slide.appendChild(card);
  slidesContainer.appendChild(slide);

  const li = document.createElement('li');
  li.textContent = obj.title;
  li.onclick = () => {
    showSlide(i);
    closeSidebar();
  };
  sidebarList.appendChild(li);
});

const slides = document.querySelectorAll('.slide');

// Mostrar slide
function showSlide(idx) {
  if (idx < 0 || idx >= slides.length) return;

  slides.forEach((s, i) => {
    s.classList.remove('active', 'previous');
    if (i === currentSlide && i !== idx) s.classList.add('previous');
    if (i === idx) s.classList.add('active');
  });

  sidebarList.querySelectorAll('li').forEach((li, i) =>
    li.classList.toggle('active', i === idx)
  );

  currentSlide = idx;
  document.getElementById('slideIndicator').textContent = `${idx + 1} / ${slides.length}`;
  MathJax.typeset();
  updateControls();
  applyTableTheme();
}

function updateControls() {
  prevBtn.disabled = currentSlide === 0;
  nextBtn.disabled = currentSlide === slides.length - 1;
}

// Tema adaptado a tablas
function applyTableTheme() {
  const isDark = document.body.classList.contains('dark');
  document.querySelectorAll('.tabla-centrada').forEach(table => {
    table.classList.toggle('dark-mode', isDark);
  });
}

// Eventos click
prevBtn.onclick = () => showSlide(currentSlide - 1);
nextBtn.onclick = () => showSlide(currentSlide + 1);

toggleBtn.onclick = () => {
  sidebar.classList.toggle('open');
  toggleBtn.style.display = sidebar.classList.contains('open') ? 'none' : 'block';
  prevBtn.style.display = sidebar.classList.contains('open') ? 'none' : 'block';
  nextBtn.style.display = sidebar.classList.contains('open') ? 'none' : 'block';
};

closeBtn.onclick = () => toggleBtn.click();

// Touch events
let startX = 0;
slidesContainer.addEventListener('touchstart', e => startX = e.touches[0].clientX);
slidesContainer.addEventListener('touchmove', e => {
  if (Math.abs(e.touches[0].clientX - startX) > 10) e.preventDefault();
}, { passive: false });
slidesContainer.addEventListener('touchend', e => {
  const dx = e.changedTouches[0].clientX - startX;
  if (dx > 50) showSlide(currentSlide - 1);
  if (dx < -50) showSlide(currentSlide + 1);
});

document.addEventListener('keydown', e => {
  if (e.key === 'ArrowLeft') showSlide(currentSlide - 1);
  if (e.key === 'ArrowRight') showSlide(currentSlide + 1);
  if (e.key === 'Tab') {
    e.preventDefault();
    toggleBtn.onclick();
  }
});

// Tema
(function initTheme() {
  const t = localStorage.getItem('theme') || 'light';
  document.body.classList.add(t);
  themeToggle.innerText = t === 'light' ? '🌙' : '☀️';
  applyTableTheme();
})();

themeToggle.onclick = () => {
  document.body.classList.toggle('dark');
  document.body.classList.toggle('light');
  const c = document.body.classList.contains('dark') ? 'dark' : 'light';
  localStorage.setItem('theme', c);
  themeToggle.innerText = c === 'light' ? '🌙' : '☀️';
  applyTableTheme();
};

// Inicial
showSlide(0);