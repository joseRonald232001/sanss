import React from "react";
import UserIcon from "../icons/UserIcon";
import NavPrinc from "../components/NavPrinc";
import ExclamationIcon from "../icons/ExclamationIcon ";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import NavSecond from "../components/NavSecond";
import Footer from "../components/Footer";

const Notas = () => {
  const nav = [
    { name: "ESTUDIANTES", to: "/init" },
    { name: "Info.Biografica" },
    { name: "Info.Academico" },
    { name: "Tramites" },
    { name: "Reg.Bio/Form/IDH" },
    { name: "inscripcion" ,to:"/estudiantess" },
  ];
  const ti = [
    { title: "Nro" },
    { title: "Año" },
    { title: "Gst" },
    { title: "Codigo" },
    { title: `Materia` },
    { title: "Nv" },
    { title: "Tp" },
    { title: "Md" },
    { title: "Cv" },
    { title: "Gr" },
    { title: "GrPr" },
    { title: "T1" },
    { title: "T2" },
    { title: "T3" },
    { title: "P1" },
    { title: "P2" },
    { title: "EF" },
    { title: "2da" },
    { title: "MdTI" },
    { title: "EG" },
    { title: "NFin" },
    { title: "RFin" },
  ];

  const notas = [
    {
      color: "1",
      number: "1",
      año: "2021",
      gst: "1",
      codigo: "1007001",
      materia: "BIOQUIMICA VETERINARIA I",
      Nv: "A",
      estatus: "REG",
      md: "N",
      cv: "",
      gr: "B",
      grpr: "",
      t1: "80",
      t2: "40",
      t3: "",
      p1: "65",
      p2: "65",
      ef: "100",
      da: "",
      mdt: "",
      eg: "",
      nf: "72",
      rg: "APR",
    },
    {
      color: "0",
      number: "2",
      año: "2021",
      gst: "1",
      codigo: "1007002",
      materia: "MATEMATICAS",
      Nv: "A",
      estatus: "REG",
      md: "N",
      cv: "",
      gr: "B",
      grpr: "",
      t1: "85",
      t2: "75",
      t3: "",
      p1: "90",
      p2: "69",
      ef: "87",
      da: "",
      mdt: "",
      eg: "",
      nf: "81",
      rg: "APR",
    },
    {
      color: "1",
      number: "3",
      año: "2021",
      gst: "1",
      codigo: "1007003",
      materia: "ANATOMIA DESCRIPTIVA",
      Nv: "A",
      estatus: "REG",
      md: "N",
      cv: "",
      gr: "B",
      grpr: "",
      t1: "65",
      t2: "57",
      t3: "",
      p1: "67",
      p2: "65",
      ef: "70",
      da: "",
      mdt: "",
      eg: "",
      nf: "65",
      rg: "APR",
    },
    {
      color: "0",
      number: "4",
      año: "2021",
      gst: "1",
      codigo: "1007004",
      materia: "EMBRIOLOGIA E HISTOLOGIA",
      Nv: "A",
      estatus: "REG",
      md: "N",
      cv: "",
      gr: "A",
      grpr: "",
      t1: "50",
      t2: "55",
      t3: "",
      p1: "80",
      p2: "75",
      ef: "60",
      da: "",
      mdt: "",
      eg: "",
      nf: "64",
      rg: "APR",
    },
    {
      color: "1",
      number: "5",
      año: "2021",
      gst: "1",
      codigo: "1007006",
      materia: "REDACCION TECNICO Y DICCION",
      Nv: "A",
      estatus: "REG",
      md: "N",
      cv: "",
      gr: "B",
      grpr: "",
      t1: "60",
      t2: "90",
      t3: "",
      p1: "92",
      p2: "63",
      ef: "87",
      da: "",
      mdt: "",
      eg: "",
      nf: "80",
      rg: "APR",
    },
    {
      color: "0",
      number: "6",
      año: "2021",
      gst: "2",
      codigo: "1007008",
      materia: "BIOESTADISTICA",
      Nv: "B",
      estatus: "REG",
      md: "N",
      cv: "",
      gr: "A",
      grpr: "",
      t1: "70",
      t2: "75",
      t3: "",
      p1: "92",
      p2: "63",
      ef: "75",
      da: "",
      mdt: "",
      eg: "",
      nf: "77",
      rg: "APR",
    },
    {
      color: "1",
      number: "7",
      año: "2021",
      gst: "2",
      codigo: "1007009",
      materia: "ANATOMIA COMPARADA TOPOGRAFICA",
      Nv: "B",
      estatus: "REG",
      md: "N",
      cv: "",
      gr: "A",
      grpr: "",
      t1: "70",
      t2: "87",
      t3: "",
      p1: "68",
      p2: "92",
      ef: "70",
      da: "",
      mdt: "",
      eg: "",
      nf: "75",
      rg: "APR",
    },
    {
      color: "0",
      number: "8",
      año: "2021",
      gst: "2",
      codigo: "1007011",
      materia: "ECOLOGIA",
      Nv: "B",
      estatus: "REG",
      md: "N",
      cv: "",
      gr: "A",
      grpr: "",
      t1: "67",
      t2: "65",
      t3: "",
      p1: "88",
      p2: "85",
      ef: "77",
      da: "",
      mdt: "",
      eg: "",
      nf: "79",
      rg: "APR",
    },
    {
      color: "1",
      number: "9",
      año: "2021",
      gst: "2",
      codigo: "1007012",
      materia: "ZOOTECNIA GENERAL",
      Nv: "B",
      estatus: "REG",
      md: "N",
      cv: "",
      gr: "A",
      grpr: "",
      t1: "93",
      t2: "87",
      t3: "",
      p1: "87",
      p2: "83",
      ef: "73",
      da: "",
      mdt: "",
      eg: "",
      nf: "87",
      rg: "APR",
    },
    {
      color: "0",
      number: "10",
      año: "2022",
      gst: "1",
      codigo: "1007013",
      materia: "FISIOLOGIA GENERAL VETERINARIA I",
      Nv: "C",
      estatus: "REG",
      md: "N",
      cv: "",
      gr: "A",
      grpr: "",
      t1: "56",
      t2: "58",
      t3: "",
      p1: "67",
      p2: "65",
      ef: "58",
      da: "",
      mdt: "",
      eg: "",
      nf: "61",
      rg: "ABA",
    },
    {
      color: "1",
      number: "11",
      año: "2022",
      gst: "1",
      codigo: "1007014",
      materia: "MICROBIOLOGIA",
      Nv: "C",
      estatus: "REG",
      md: "N",
      cv: "",
      gr: "A",
      grpr: "",
      t1: "69",
      t2: "57",
      t3: "",
      p1: "67",
      p2: "65",
      ef: "58",
      da: "",
      mdt: "",
      eg: "",
      nf: "76",
      rg: "APR",
    },
    {
      color: "0",
      number: "12",
      año: "2022",
      gst: "1",
      codigo: "1007015",
      materia: "PASTOS Y FORRAJES",
      Nv: "C",
      estatus: "REG",
      md: "N",
      cv: "",
      gr: "A",
      grpr: "",
      t1: "58",
      t2: "69",
      t3: "",
      p1: "48",
      p2: "55",
      ef: "53",
      da: "",
      mdt: "",
      eg: "",
      nf: "55",
      rg: "APR",
    },
    {
      color: "1",
      number: "13",
      año: "2022",
      gst: "1",
      codigo: "1007016",
      materia: "GENETICA",
      Nv: "C",
      estatus: "REG",
      md: "N",
      cv: "",
      gr: "A",
      grpr: "",
      t1: "78",
      t2: "72",
      t3: "",
      p1: "86",
      p2: "87",
      ef: "73",
      da: "",
      mdt: "",
      eg: "",
      nf: "77",
      rg: "APR",
    },
    {
      color: "0",
      number: "14",
      año: "2022",
      gst: "1",
      codigo: "1007018",
      materia: "INFORMATICA",
      Nv: "C",
      estatus: "REG",
      md: "N",
      cv: "",
      gr: "A",
      grpr: "",
      t1: "65",
      t2: "89",
      t3: "",
      p1: "86",
      p2: "89",
      ef: "92",
      da: "",
      mdt: "",
      eg: "",
      nf: "80",
      rg: "Apr",
    },
    {
      color: "1",
      number: "15",
      año: "2023",
      gst: "1",
      codigo: "1007005",
      materia: "BIOFISICA",
      Nv: "A",
      estatus: "REG",
      md: "N",
      cv: "",
      gr: "A",
      grpr: "",
      t1: "86",
      t2: "84",
      t3: "",
      p1: "72",
      p2: "79",
      ef: "77",
      da: "",
      mdt: "",
      eg: "",
      nf: "81",
      rg: "APR",
    },
    {
      color: "0",
      number: "16",
      año: "2023",
      gst: "1",
      codigo: "1007007",
      materia: "BIOQUIMICA VETERINARIA II",
      Nv: "B",
      estatus: "REG",
      md: "N",
      cv: "",
      gr: "A",
      grpr: "",
      t1: "66",
      t2: "54",
      t3: "",
      p1: "68",
      p2: "70",
      ef: "65",
      da: "",
      mdt: "",
      eg: "",
      nf: "64",
      rg: "APR",
    },
    {
      color: "1",
      number: "17",
      año: "2023",
      gst: "1",
      codigo: "1007010",
      materia: "HISTOLOGIA ESPECIAL VETERINARIA",
      Nv: "B",
      estatus: "REG",
      md: "N",
      cv: "",
      gr: "A",
      grpr: "",
      t1: "56",
      t2: "68",
      t3: "",
      p1: "73",
      p2: "63",
      ef: "78",
      da: "",
      mdt: "",
      eg: "",
      nf: "67",
      rg: "APR",
    },
    {
      color: "0",
      number: "18",
      año: "2023",
      gst: "1",
      codigo: "1007017",
      materia: "NUTRICION",
      Nv: "C",
      estatus: "REG",
      md: "N",
      cv: "",
      gr: "A",
      grpr: "",
      t1: "88",
      t2: "67",
      t3: "",
      p1: "60",
      p2: "87",
      ef: "63",
      da: "",
      mdt: "",
      eg: "",
      nf: "60",
      rg: "APR",
    },
    {
      color: "1",
      number: "19",
      año: "2023",
      gst: "2",
      codigo: "1007019",
      materia: "FISIOLOGIA ESPECIAL VETERINARIA II",
      Nv: "D",
      estatus: "REG",
      md: "N",
      cv: "",
      gr: "A",
      grpr: "",
      t1: "64",
      t2: "55",
      t3: "",
      p1: "58",
      p2: "69",
      ef: "67",
      da: "",
      mdt: "",
      eg: "",
      nf: "65",
      rg: "APR",
    },
    {
      color: "0",
      number: "20",
      año: "2023",
      gst: "2",
      codigo: "1007020",
      materia: "VIROLOGIA E INMUNOLOGIA VETER.",
      Nv: "D",
      estatus: "REG",
      md: "N",
      cv: "",
      gr: "A",
      grpr: "",
      t1: "87",
      t2: "92",
      t3: "",
      p1: "83",
      p2: "52",
      ef: "83",
      da: "",
      mdt: "",
      eg: "",
      nf: "82",
      rg: "APR",
    },
    {
      color: "1",
      number: "21",
      año: "2023",
      gst: "2",
      codigo: "1007021",
      materia: "MEJORAMIENTO GENETICO",
      Nv: "D",
      estatus: "REG",
      md: "N",
      cv: "",
      gr: "A",
      grpr: "",
      t1: "83",
      t2: "85",
      t3: "",
      p1: "77",
      p2: "56",
      ef: "74",
      da: "",
      mdt: "",
      eg: "",
      nf: "75",
      rg: "APR",
    },
    {
      color: "0",
      number: "22",
      año: "2023",
      gst: "2",
      codigo: "1007022",
      materia: "PATOLOGIA GENERAL",
      Nv: "D",
      estatus: "REG",
      md: "N",
      cv: "",
      gr: "A",
      grpr: "",
      t1: "65",
      t2: "69",
      t3: "",
      p1: "73",
      p2: "77",
      ef: "69",
      da: "",
      mdt: "",
      eg: "",
      nf: "73",
      rg: "APR",
    },
    {
      color: "1",
      number: "23",
      año: "2023",
      gst: "2",
      codigo: "1007023",
      materia: "ALIMENTACION ANIMAL",
      Nv: "D",
      estatus: "REG",
      md: "N",
      cv: "",
      gr: "A",
      grpr: "",
      t1: "75",
      t2: "83",
      t3: "",
      p1: "78",
      p2: "92",
      ef: "72",
      da: "",
      mdt: "",
      eg: "",
      nf: "83",
      rg: "APR",
    },
    {
      color: "0",
      number: "24",
      año: "2023",
      gst: "2",
      codigo: "1007024",
      materia: "LABORATORIO CLINICO VETER",
      Nv: "D",
      estatus: "REG",
      md: "N",
      cv: "",
      gr: "A",
      grpr: "",
      t1: "87",
      t2: "76",
      t3: "",
      p1: "89",
      p2: "84",
      ef: "66",
      da: "",
      mdt: "",
      eg: "",
      nf: "80",
      rg: "APR",
    },
  ];

  return (
    <div>
      <div className="lineKar">
        {nav.map((na) => (
          <div key={na.name} className="boxKar">
            <Link to={na.to}>
              <p>{na.name}</p>
            </Link>

            <span style={{ marginLeft: "auto" }}>|</span>
          </div>
        ))}
      </div>

      <NavPrinc />

      <div className="nameK">
        <UserIcon /> SUMAYA ESTEFANIA IRAIZPS GARCIA
      </div>
      <div className="titleK">
        <ExclamationIcon />
        <p>Kardex</p>
      </div>
      <div className="info">
        <FontAwesomeIcon
          icon={faTriangleExclamation}
          style={{ color: "#139645" }}
          className="iconW"
        />
        <h3 style={{ display: "inline" }}>
          SUMAYA ESTEFANIA IRAIZOS GARCIA (202102085)
        </h3>
        - La imformacion que se presenta es privada . La presentacion en fporma
        impresa electronica o por otro medio de esta imformacion no constittuye
        documento de la Universicdad Mayor de San Simon . Para fines legales,el
        documento debera ser emitido oficialmente por la Universidad Mayor de
        San Simon.
      </div>

      <div className="infe">
        Estudiante:SUMAYA ESTEFANIA IRAIZOS GARCIA (202102085)
        <br />
        Plan de Estudios:LIC.EN MEDICINA VETERINARIA Y ZOOTECNIA(039503)
      </div>

      <section className="tabla">
        <div className="tableTitle">
          {ti.map((title) => (
            <div key={title.title} className="notB">
              <p>{title.title}</p>
            </div>
          ))}
        </div>

        <div>
          {notas.map((not) => (
            <div key={not.codigo} className="tableTitle">
              <div
                style={{ background: not.color == "1" ? "#F2F2F2" : "#FFFFFF" }}
                className="notB h"
              >
                {not.number}
              </div>
              <div
                style={{ background: not.color == "1" ? "#F2F2F2" : "#FFFFFF" }}
                className="notB h"
              >
                {not.año}
              </div>
              <div
                style={{ background: not.color == "1" ? "#F2F2F2" : "#FFFFFF" }}
                className="notB h"
              >
                {not.gst}
              </div>
              <div
                style={{ background: not.color == "1" ? "#F2F2F2" : "#FFFFFF" }}
                className="notB h"
              >
                {not.codigo}
              </div>
              <div
                style={{ background: not.color == "1" ? "#F2F2F2" : "#FFFFFF" }}
                className="notB h"
              >
                {not.materia}
              </div>
              <div
                style={{ background: not.color == "1" ? "#F2F2F2" : "#FFFFFF" }}
                className="notB h"
              >
                {not.Nv}
              </div>
              <div
                style={{ background: not.color == "1" ? "#F2F2F2" : "#FFFFFF" }}
                className="notB h"
              >
                {not.estatus}
              </div>
              <div
                style={{ background: not.color == "1" ? "#F2F2F2" : "#FFFFFF" }}
                className="notB h"
              >
                {not.md}
              </div>

              <div
                style={{ background: not.color == "1" ? "#F2F2F2" : "#FFFFFF" }}
                className="notB h"
              >
                {not.cv}
           
              </div>
              <div
                style={{ background: not.color == "1" ? "#F2F2F2" : "#FFFFFF" }}
                className="notB h"
              >
           {not.gr}
              </div>
              <div
                style={{ background: not.color == "1" ? "#F2F2F2" : "#FFFFFF" }}
                className="notB h"
              >
              {not.grpr}
              </div>
              <div
                style={{ background: not.color == "1" ? "#F2F2F2" : "#FFFFFF" }}
                className="notB h"
              >
            {not.t1}
              </div>

              <div
                style={{ background: not.color == "1" ? "#F2F2F2" : "#FFFFFF" }}
                className="notB h"
              >
                {not.t2}
           
              </div>
              <div
                style={{ background: not.color == "1" ? "#F2F2F2" : "#FFFFFF" }}
                className="notB h"
              >
               {not.t3}
              </div>
              <div
                style={{ background: not.color == "1" ? "#F2F2F2" : "#FFFFFF" }}
                className="notB h"
              >
             {not.p1}
              </div>
              <div
                style={{ background: not.color == "1" ? "#F2F2F2" : "#FFFFFF" }}
                className="notB h"
              >
                {not.p2}
           
              </div>
              <div
                style={{ background: not.color == "1" ? "#F2F2F2" : "#FFFFFF" }}
                className="notB h"
              >
            {not.ef}
              </div>
              <div
                style={{ background: not.color == "1" ? "#F2F2F2" : "#FFFFFF" }}
                className="notB h"
              >
           {not.da}
              </div>
              <div
                style={{ background: not.color == "1" ? "#F2F2F2" : "#FFFFFF" }}
                className="notB h"
              >
                {not.mdt}
           
              </div>
              <div
                style={{ background: not.color == "1" ? "#F2F2F2" : "#FFFFFF" }}
                className="notB h"
              >
                {not.eg}
           
              </div>
              <div
                style={{ background: not.color == "1" ? "#F2F2F2" : "#FFFFFF" }}
                className="notB h"
              >
           {not.nf}
              </div>
              <div
                style={{ background: not.color == "1" ? "#F2F2F2" : "#FFFFFF" }}
                className="notB h"
              >
           {not.rg}
              </div>
            </div>
          ))}
        </div>
      </section>
<br />
<br />
      <NavSecond color={"1"} />

      <Footer />
    </div>
  );
};

export default Notas;
