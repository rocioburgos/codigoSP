<?php

/* Aplicación No 26 (Copiar archivos)
Generar una aplicación que sea capaz de copiar un archivo de texto (su ubicación se ingresará
por la página) hacia otro archivo que será creado y alojado en
./misArchivos/yyyy_mm_dd_hh_ii_ss.txt , dónde yyyy corresponde al año en curso, mm
al mes, dd al día, hh hora, ii minutos y ss segundos.*/


$rutaIngresada= $_GET["info"];
$fecha= date("y_m_d_G_i_s");
$nuevaRuta="./misArchivos/".$fecha.".txt";
if(copy("./misArchivos/".$rutaIngresada , $nuevaRuta)){
    echo "Copiado con exito";
}else{
    echo "Hubo un error.";
}


?>
