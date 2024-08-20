"use strict";

let x1 = prompt("Syötä ensimmäinen x-koordinaatti:");
let y1 = prompt("Syötä ensimmäinen y-koordinaatti:");
let x2 = prompt("Syötä toinen x-koordinaatti:");
let y2 = prompt("Syötä toinen y-koordinaatti:");
let distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
alert(`Pisteiden etäisyys on: ${distance}`);
