import React, { useContext } from "react";
import { Context } from "../store/appContext";
import carrousel1Url from "../../img/bull&bear.jpeg";
import homeChartsUrl from "../../img/homeCharts.jpeg";
import indices from "../../img/Indices.jpg";
import logo from "../../img/logo-market-mood.png"
import { useNavigate, Link } from "react-router-dom";



import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);
  //carrusel tesla
  window.top.addEventListener("message", function (msg) {
    const widget = document.getElementById('ChartWidget-c65oag2');
    if (!widget) return; const styles = msg.data?.styles;
    if (styles) { Object.keys(styles).forEach(key => widget.style.setProperty(key, styles[key])) }
  })
  //carusel bbva
  window.top.addEventListener("message", function (msg) {
    const widget = document.getElementById('ChartWidget-zf5z3yw');
    if (!widget) return; const styles = msg.data?.styles;
    if (styles) { Object.keys(styles).forEach(key => widget.style.setProperty(key, styles[key])) }
  })
  //carusel ibex 35
  window.top.addEventListener("message", function (msg) {
    const widget = document.getElementById('ChartWidget-405ivec');
    if (!widget) return; const styles = msg.data?.styles;
    if (styles) { Object.keys(styles).forEach(key => widget.style.setProperty(key, styles[key])) }
  })
  //noticias
  window.top.addEventListener("message", function (msg) {
    const widget = document.getElementById('NewsWidget-913w4va');
    if (!widget) return;
    const styles = msg.data?.styles;
    if (styles) { Object.keys(styles).forEach(key => widget.style.setProperty(key, styles[key])) }
  });
  // indices
  window.top.addEventListener("message", function (msg) {
    const widget = document.getElementById('MarketOverview-rbnzv2k');
    if (!widget) return;
    const styles = msg.data?.styles;
    if (styles) { Object.keys(styles).forEach(key => widget.style.setProperty(key, styles[key])) }
  });

  return (
    <div className="container-fluid py-5">

      <div id="seccion1" className="container-fluid position-relative ">
        <img src={carrousel1Url} className="img-fluid  shadow " alt="bullbear" style={{maxHeight: "700px", height: "auto", width:"100%"}}/>
        
          <h1 className="position-absolute bottom-50 start-50 translate-middle text-white text-center">
            Tu camino al éxito financiero empieza aquí
          </h1>
          
          <Link to="/register">
          <button type="button" className="btn btn-outline-light position-absolute bottom-0 start-50 translate-middle my-3">
            Ir a registro
          </button>
          </Link>
        </div>


          {/* <p>sigue nuestras señales de trading.</p> */}
        
        {/* <div id="contenedor_boton" className="container">
          <button type="button" className="btn btn-outline-primary">
            Primary
          </button>
        </div> */}
      
      <hr className="mb-5"></hr>
        <h2 className="container d-flex justify-content-center mb-5">
        Analítica de mercados: Gráficos, Noticias e Indices en tiempo real.
        </h2>


<hr className="mb-5"></hr>

{/* esto contiene toda la seccion del grafico */}
<div className="">
        <h2 className="container d-flex justify-content-center "> Gráficos en tiempo real</h2>
      <div
        id="container-carrusel"
        className="container shadow carousel-fade"
      >
        <div
          id="carouselExampleRide"
          className="carousel slide"
          data-bs-ride="true"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <iframe // grafico tesla
                className="d-block w-100 rounded"
                id="img-carrusel ChartWidget-c65oag2"
                width="840px"
                height="470px"
                data-widget-name=""
                name="ChartWidget"
                src="https://darqube.com/external-embedding/chart-widget?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3aWRnZXQiOnsidGlja2VycyI6eyJTVE9DS1MiOlsiVFNMQS5VUyJdfSwic2VsbF9idXlfdXJsIjpudWxsfSwid190eXBlIjoiQ2hhcnRXaWRnZXQiLCJmZV9jZmciOnsiY2hjbHIiOiJyZ2JhKDYxLCAxODcsIDE1NCwgMSkiLCJjbW9kZSI6MCwiZmNsciI6InJnYmEoMjU1LCAyNTUsIDI1NSwgMSkiLCJiZyI6InJnYmEoMjEsIDI1LCAzMCwgMSkiLCJoIjo0NzAsInciOjg0MCwiYXN6IjpmYWxzZSwiZnQiOiJkZWZhdWx0IiwiaHQiOiJub25lIiwidHJoIjpbXSwiY2hjIjoicmdiYSgyMzcsIDUwLCA5OCwgMSkiLCJiZSI6dHJ1ZSwiYmMiOiJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiLCJidyI6MSwiY24iOiIiLCJsbmciOiJlbiIsImhkaWNuIjpmYWxzZSwid3RtViI6eyJ0eXBlIjoiRGFycXViZSIsImVuYWJsZWQiOnRydWV9LCJ1YyI6InJnYmEoNDgsIDEzMSwgMTA5LCAxKSIsImRjIjoicmdiYSgyMzcsIDUwLCA5OCwgMSkiLCJzbWIiOlt7Im4iOiJUZXNsYSBJbmMiLCJ0IjoiVFNMQS5VUyIsImFjIjoiU1RPQ0tTIn1dLCJjaHJUIjoibGluZSIsInNsIjp0cnVlfSwiZXhwIjoxNjg3MjY1ODU1LCJzdWIiOiJhY2Nlc3MifQ.OLBpkaRBDzQHGdjlUEzPLgBIYOdG7Cc5KWcpftNObJI">
              </iframe>
            </div>
            <div className="carousel-item">
              <iframe //grafico bbva
                className="d-block w-100 rounded"
                id="img-carrusel ChartWidget-zf5z3yw"
                width="840px"
                height="470px"
                data-widget-name=""
                name="ChartWidget"
                src="https://darqube.com/external-embedding/chart-widget?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3aWRnZXQiOnsidGlja2VycyI6eyJTVE9DS1MiOlsiQkJWQS5VUyJdfSwic2VsbF9idXlfdXJsIjpudWxsfSwid190eXBlIjoiQ2hhcnRXaWRnZXQiLCJmZV9jZmciOnsiY2hjbHIiOiJyZ2JhKDYxLCAxODcsIDE1NCwgMSkiLCJjbW9kZSI6MCwiZmNsciI6InJnYmEoMjU1LCAyNTUsIDI1NSwgMSkiLCJiZyI6InJnYmEoMjEsIDI1LCAzMCwgMSkiLCJoIjo0NzAsInciOjg0MCwiYXN6IjpmYWxzZSwiZnQiOiJkZWZhdWx0IiwiaHQiOiJub25lIiwidHJoIjpbXSwiY2hjIjoicmdiYSgyMzcsIDUwLCA5OCwgMSkiLCJiZSI6dHJ1ZSwiYmMiOiJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiLCJidyI6MSwiY24iOiIiLCJsbmciOiJlbiIsImhkaWNuIjpmYWxzZSwid3RtViI6eyJ0eXBlIjoiRGFycXViZSIsImVuYWJsZWQiOnRydWV9LCJ1YyI6InJnYmEoNDgsIDEzMSwgMTA5LCAxKSIsImRjIjoicmdiYSgyMzcsIDUwLCA5OCwgMSkiLCJzbWIiOlt7Im4iOiJCYW5jbyBCaWxiYW8gVmlzY2F5YSBBcmdlbnRhcmlhIFNBIEFEUiIsInQiOiJCQlZBLlVTIiwiYWMiOiJTVE9DS1MifV0sImNoclQiOiJsaW5lIiwic2wiOnRydWV9LCJleHAiOjE2ODcyNjYyODQsInN1YiI6ImFjY2VzcyJ9.68gNC83E3YVb0a-cVVQs2Tmy7pCm5XH0jxz8LngBnfU">
              </iframe>
            </div>
            <div className="carousel-item">
              <iframe //grafico ibex
                className="d-block w-100 rounded"
                id="img-carrusel ChartWidget-405ivec"
                width="840px"
                height="470px"
                data-widget-name=""
                name="ChartWidget"
                src="https://darqube.com/external-embedding/chart-widget?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3aWRnZXQiOnsidGlja2VycyI6eyJJTkRFWEVTIjpbIklCRVguSU5EWCJdfSwic2VsbF9idXlfdXJsIjpudWxsfSwid190eXBlIjoiQ2hhcnRXaWRnZXQiLCJmZV9jZmciOnsiY2hjbHIiOiJyZ2JhKDYxLCAxODcsIDE1NCwgMSkiLCJjbW9kZSI6MCwiZmNsciI6InJnYmEoMjU1LCAyNTUsIDI1NSwgMSkiLCJiZyI6InJnYmEoMjEsIDI1LCAzMCwgMSkiLCJoIjo0NzAsInciOjg0MCwiYXN6IjpmYWxzZSwiZnQiOiJkZWZhdWx0IiwiaHQiOiJub25lIiwidHJoIjpbXSwiY2hjIjoicmdiYSgyMzcsIDUwLCA5OCwgMSkiLCJiZSI6dHJ1ZSwiYmMiOiJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiLCJidyI6MSwiY24iOiIiLCJsbmciOiJlbiIsImhkaWNuIjpmYWxzZSwid3RtViI6eyJ0eXBlIjoiRGFycXViZSIsImVuYWJsZWQiOnRydWV9LCJ1YyI6InJnYmEoNDgsIDEzMSwgMTA5LCAxKSIsImRjIjoicmdiYSgyMzcsIDUwLCA5OCwgMSkiLCJzbWIiOlt7Im4iOiJJQkVYIDM1IEluZGV4IiwidCI6IklCRVguSU5EWCIsImFjIjoiSU5ERVhFUyJ9XSwiY2hyVCI6ImxpbmUiLCJzbCI6dHJ1ZX0sImV4cCI6MTY4NzI2NjYzNiwic3ViIjoiYWNjZXNzIn0.tsdP72rzC9k3vAWsbssAgKCw0ORrTxuIqCw7nWmjeYE">
              </iframe>
            </div>
          </div>
          <button className="carousel-control-prev bg-black" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next bg-black"
            type="button"
            data-bs-target="#carouselExampleRide"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      </div>

      <hr></hr>

      {/* esto muestra el contenido del indice */}
      <div className="py-3">
      <h2 className="container d-flex justify-content-center mb-5"> Índices de mercados financieros globales. </h2>

<div className="container pb-5">
        <img src={indices}className="img-fluid shadow rounded-2" alt="indices" />
        </div>


      </div>

      <hr></hr>

{/* esto muestra el contenido de las noticias */}
      <div className="">
        {/* <img src={homeChartsUrl} className="img-fluid" alt="Imagen" /> */}
          <h2 className="container d-flex justify-content-center mb-5"> Actualizate con las noticias del dia</h2>

          {/* <p>Texto que quieres poner sobre la imagen.</p> */}
          <iframe // noticias
            className="container rounded d-flex justify-content-center"
            width="330px"
            height="550px"
            data-widget-name=""
            name="NewsWidget"
            src="https://darqube.com/external-embedding/news-widget?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3aWRnZXQiOnsibmV3cyI6WyJGb3JleGxpdmUiLCJUaGUgRWNvbm9taXN0IiwiQnVzaW5lc3MgSW5zaWRlciIsIkZpbmFuY2lhbCBUaW1lcyIsIkZpbmFuY2lhbCBQb3N0Il0sInR3X3VpZHMiOlsiNDU1ODI0NzcxIiwiMTUzOTY2MTIzIiwiMjg1ODI2ODAiLCIyNTA5ODA4NDMiLCI1NDY3NTcwMCJdfSwid190eXBlIjoiTmV3c1dpZGdldCIsImZlX2NmZyI6eyJjbW9kZSI6MCwiZmNsciI6InJnYmEoMjU1LCAyNTUsIDI1NSwgMSkiLCJiZyI6InJnYmEoMjEsIDI1LCAzMCwgMSkiLCJoIjo5OTAsInciOjMzMCwiYXN6Ijp0cnVlLCJmdCI6ImRlZmF1bHQiLCJodCI6Im5vbmUiLCJ0cmgiOltdLCJjaGMiOiJyZ2JhKDIzNywgNTAsIDk4LCAxKSIsImJlIjp0cnVlLCJiYyI6InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIsImJ3IjoxLCJjbiI6IiIsImxuZyI6ImVuIiwiaGRpY24iOmZhbHNlLCJ3dG1WIjp7InR5cGUiOiJEYXJxdWJlIiwiZW5hYmxlZCI6dHJ1ZX19LCJleHAiOjE2ODcyNjc4MTMsInN1YiI6ImFjY2VzcyJ9.eOptEWvWOf5VX6T14Bmvl22AO32gpKydcjyGBDwlqn4" id="NewsWidget-h0utvq2">
          </iframe>
        </div>
        <div className="fixed-card top-50 end-0 translate-middle-y">
          {/* <iframe // indice
            width="220px"
            height="380px"
            data-widget-name=""
            name="MarketOverview"
            src="https://darqube.com/external-embedding/market-overview?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3aWRnZXQiOnsib3ZlcnZpZXdfc2VjdGlvbnMiOltdLCJpbnN0cnVtZW50cyI6eyJJTkRFWEVTIjpbXX19LCJ3X3R5cGUiOiJNYXJrZXRPdmVydmlldyIsImZlX2NmZyI6eyJjaGNsciI6InJnYmEoNjEsIDE4NywgMTU0LCAxKSIsImNtb2RlIjowLCJmY2xyIjoicmdiYSgyNTUsIDI1NSwgMjU1LCAxKSIsImJnIjoicmdiYSgyMSwgMjUsIDMwLCAxKSIsImgiOjM2MCwidyI6MzMwLCJhc3oiOmZhbHNlLCJmdCI6ImRlZmF1bHQiLCJodCI6Im5vbmUiLCJ0cmgiOltdLCJjaGMiOiJyZ2JhKDIzNywgNTAsIDk4LCAxKSIsImJlIjp0cnVlLCJiYyI6InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIsImJ3IjoxLCJjbiI6IiIsImxuZyI6ImVuIiwiaGRpY24iOmZhbHNlLCJ3dG1WIjp7InR5cGUiOiJEYXJxdWJlIiwiZW5hYmxlZCI6dHJ1ZX0sInVjIjoicmdiYSg0OCwgMTMxLCAxMDksIDEpIiwiZGMiOiJyZ2JhKDIzNywgNTAsIDk4LCAxKSIsImFjbyI6WyJJTkRFWEVTIl0sInNtYiI6e30sInNzIjp0cnVlLCJzdCI6dHJ1ZSwic2wiOnRydWUsImN0ZGMiOmZhbHNlfSwiZXhwIjoxNjg3MzQzOTk1LCJzdWIiOiJhY2Nlc3MifQ.U7zXtHxzM0X_p_-ddhK7tqjGJav-NUNG7Gji5ycZHLA"
            id="MarketOverview-5tj3i5t"></iframe> */}
        </div>

        {/* cards */}
<hr className="my-5"/>
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3 px-5 ">
      <div className="feature col border border-black   ">
        <div className="feature-icon d-inline-flex align-items-center justify-content-center fs-2 mt-3">
        <svg
              id="icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
            </svg>        </div>
        <h3 className="fs-2">Conocimiento actualizado</h3>
        <p>Mantente al día con noticias actualizadas y análisis de expertos para tomar decisiones informadas.</p>

      </div>
      <div className="feature col border border-black  ">
        <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2  mt-3">
        <svg
              id="icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V400c0 44.2 35.8 80 80 80H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z" />
            </svg>        </div>
        <h3 className="fs-2">Estrategias rentables</h3>
        <p>Utiliza nuestras señales de entrada para maximizar tus ganancias y reducir tus riesgos.</p>

      </div>
      <div className="feature col border border-black  ">
        <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2  mt-3">
        <svg
              id="icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
            >
              <path d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z" />
            </svg>
        </div>
        <h3 className="fs-2">Experiencia óptima</h3>
        
        <p>Diseñado pensando en ti, para ofrecerte una experiencia de usuario intuitiva y sin interrupciones.</p>

      </div>
    </div>

<div className="px-5">
    <p>¡Pronto lanzaremos nuestras señales de mercado de compra y venta! Obtén una ventaja competitiva en tus inversiones con nuestra experiencia y análisis de mercado en tiempo real. ¡Mantente atento para más detalles!</p>
    </div>

      {/* <div id="section3" className="d-flex row flex-nowrap overflow-auto">
        <div className="card text-bg-primary mb-3" style={{ width: "20rem" }}>
          <div className="card-body">
            <svg
              id="icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
            </svg>
            <h5 className="card-title">Conocimiento actualizado</h5>
            <p className="card-text">
              Mantente al día con noticias actualizadas y análisis de expertos
              para tomar decisiones informadas.
            </p>
          </div>
        </div>
        <div className="card text-bg-primary mb-3" style={{ width: "20rem" }}>
          <div className="card-body">
            <svg
              id="icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V400c0 44.2 35.8 80 80 80H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z" />
            </svg>
            <h5 className="card-title">Estrategias rentables</h5>
            <p className="card-text">
              Utiliza nuestras señales de entrada para maximizar tus ganancias y
              reducir tus riesgos.
            </p>
          </div>
        </div>
        <div className="card text-bg-primary mb-3" style={{ width: "20rem" }}>
          <div className="card-body">
            <svg
              id="icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
            >
              <path d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z" />
            </svg>
            <h5 className="card-title">Experiencia óptima</h5>
            <p className="card-text">
              Diseñado pensando en ti, para ofrecerte una experiencia de usuario
              intuitiva y sin interrupciones.
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
};
