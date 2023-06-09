// P_4_1_2_01
//
// Generative Gestaltung – Creative Coding im Web
// ISBN: 978-3-87439-902-9, First Edition, Hermann Schmidt, Mainz, 2018
// Benedikt Groß, Hartmut Bohnacker, Julia Laub, Claudius Lazzeroni
// with contributions by Joey Lee and Niels Poldervaart
// Copyright 2018
//
// http://www.generative-gestaltung.de
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

"use strict";

var img;
let WIDTH;
let HEIGHT;

function preload() {
  img = loadImage("city.jpeg");
}

function setup() {
  WIDTH = windowWidth;
  HEIGHT = windowHeight;
  var c = createCanvas(WIDTH, HEIGHT);
  c.parent("#concept-canvas");
  image(img, 0, 100);
}

function draw() {
  var x1 = floor(random(width));
  var y1 = 50;

  var x2 = round(x1 + random(-7, 7));
  var y2 = round(y1 + random(-5, 5));

  var w = floor(random(10, 40));
  var h = height - 100;

  set(x2, y2, get(x1, y1, w, h));
}
