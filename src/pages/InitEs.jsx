import React from "react";
import NavPrinc from "../components/NavPrinc";
import { Link } from "react-router-dom";
import NavSecond from "../components/NavSecond";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlay,
  faSquareCheck,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import UniversityIcon from "../icons/UniversityIcon";
import arrHome from "../pictures/arrHome.png";
import box from "../pictures/box.png";
const InitEs = () => {
  const nav = [
    { name: "ESTUDIANTES", to: "/init" },
    { name: "Info.Biografica" },
    { name: "Info.Academico" },
    { name: "Tramites" },
    { name: "Reg.Bio/Form/IDH" },
    { name: "inscripcion", to: "/estudiantess" },
  ];
  const link = [
    { icon: <UniversityIcon />, name: "Imformacion General" },
    { icon: <UniversityIcon />, name: "Estado de cuenta" },
    { icon: <UniversityIcon />, name: "Estado Admision" },
    { icon: <UniversityIcon />, name: "Historia carreras" },
    { icon: <UniversityIcon />, name: "Declaracion Jurada para el SSU" },
    { icon: <UniversityIcon />, name: "Registro Biografico" },
    { icon: <UniversityIcon />, name: "Notificaciones" },
  ];

  const link2 = [
    {
      to: "/inscripcion",
      descripcion:
        "Permite ver el detalle de su inscripcion en el SIS en una determinada gestion.Adicionalmente puede ver los cursos Virtuales publicados por el Docente",
      name: "Estado de inscripcion en el SIS",
    },
    {
      to: "/notas",
      descripcion: "Todas sus materias cursadas en la UMSS.",
      name: "Kardex",
    },
    {
      to: "",
      descripcion: "Permite ver sus horarios de clase para la gestion actual.",
      name: "Horario de Clases",
    },
    {
      to: "",
      descripcion: "Permite cambiar la contraseña de su cuenta webS  SISS.",
      name: "Cambio de contraseña",
    },
    {
      to: "",
      descripcion:
        "Permite obtener los 5 codigos de acceso para su inscripcion previa la admicino y compra de matricula",
      name: "Obtencion de Cod. de acceso para inscripcion",
    },
  ];

  return (
    <>
      <div className="lineKar">
        {nav.map((na) => (
          <div key={na.name} className="boxKar">
            <Link to={na.to}>
              <p className="p">{na.name}</p>
            </Link>
            <span style={{ marginLeft: "auto" }}>|</span>
          </div>
        ))}
      </div>
      <NavPrinc />
      <div className="nameK">
        <div className="icon icon2">
          <svg fill="currentColor" viewBox="0 0 512 512">
            <path d="M423.309 291.025L402.221 285C431.798 243.89 436 202.294 436 180 436 80.649 355.484 0 256 0 156.649 0 76 80.516 76 180c0 22.299 4.198 63.884 33.779 105l-21.088 6.025C21.28 310.285 0 371.59 0 408.605v25.681C0 477.138 34.862 512 77.714 512h356.571C477.138 512 512 477.138 512 434.286v-25.681c0-36.247-20.725-98.161-88.691-117.58zM256 48c72.902 0 132 59.099 132 132s-59.098 132-132 132-132-59.099-132-132S183.098 48 256 48zm208 386.286c0 16.41-13.304 29.714-29.714 29.714H77.714C61.304 464 48 450.696 48 434.286v-25.681c0-33.167 21.987-62.316 53.878-71.427l46.103-13.172C162.683 335.058 200.427 360 256 360s93.317-24.942 108.019-35.994l46.103 13.172C442.013 346.29 464 375.438 464 408.605v25.681z"></path>
          </svg>
        </div>{" "}
        SUMAYA ESTEFANIA IRAIZPS GARCIA
      </div>

      <section className="boxInit">
        <article className="box1">
          <div className="boxInitInfo">Informacion Personal</div>
          <div className="boxNotification">
            <FontAwesomeIcon
              icon={faTriangleExclamation}
              style={{ color: "#139645", width: "20px", padding: "0 5px" }}
              className="iconW"
            />{" "}
            Recuerde cerrar su cuenta para proteger su
            <br /> Informacion
          </div>

          <div>
            {link.map((noti) => (
              <div className="listInit">
                <img className="flech arrr" src={arrHome} alt="" />
                <p></p> {noti.name}
              </div>
            ))}
          </div>
        </article>

        <article className="box2">
          <div className="box2noti">
            <FontAwesomeIcon icon={faCirclePlay} style={{ color: "#ffffff" }} />
            <span> Enlaces Rapidos </span>
          </div>

          <div className="link2">
            {link2.map((noti) => (
              <Link to={noti.to}  key={noti.name} style={{textDecoration:"none", color:"#000"}}>
              <div className="link2box">
                <img src={box} alt="" />
                <div>
                  <h3>{noti.name}</h3>
                  <p>{noti.descripcion}</p>
                </div>
              </div>
              </Link>
            ))}
          </div>
        </article>

        <article className="box3">
          <div className="box3Noti">Avisos Importantes</div>

          <div className="noti1">
            <FontAwesomeIcon
              icon={faSquareCheck}
              style={{ color: "#215f87" }}
            />
            <span>SU CUENTA HA SIDO ACTIVADA </span>. Cambien regularmente la
            contraseña de su cuenta webSISS
          </div>

          <div className="noti2">
            <FontAwesomeIcon
              icon={faTriangleExclamation}
              style={{ color: "#215f87", width: "20px", padding: "0 5px" }}
              className="iconW"
            />
            <span>Cursos Virtuales</span>
            <p>
              Ahora puede ver la Imformacion de los cursos virtuales de cada una
              de sus materias en la opcion [estado de Inscripcion en el SISS].
            </p>
          </div>

          <div className="noti3">
            <FontAwesomeIcon
              icon={faTriangleExclamation}
              style={{ color: "#215f87", width: "20px", padding: "0 5px" }}
              className="iconW"
            />
            <span>Aviso Importante</span>
            <p>
              La Imformacion de acceso (Codigo SIS ,Contraseña,fecha de
              nacimiento) ala cuenta de Estudiante y los CODIGOS de ACCESO para
              inscripcion es estrictamente privada,siendo responsabilidad del
              Estudiante su seguridad
              <span>
                NO DEBE COMPARTIR,ENTREGAR,NI ENVIAR (REENVIAR EL CORREO DE SU
                CONTRASEÑA Y TERCERAS PERSONAS)
              </span>
              ,TAMPOCO DEBE DE ENTREGAR FOTOCOPIA (NI ORIGINAL) DE SU MATRICULA
              UNIVERSITARIA o CI-DOCUMENTO PERSONAL A CENTROS DE ESTUDIANTE, Su
              seguridad es su responsabilidad y no de la institucion
            </p>
          </div>

          <div className="box4">
          <img className="flech arrr" src={arrHome} alt="" />
          Enlaces Academicos Externos
          </div>
        </article>
      </section>
      <br />
      <NavSecond color={"1"} />
      <Footer />
    </>
  );
};

export default InitEs;
