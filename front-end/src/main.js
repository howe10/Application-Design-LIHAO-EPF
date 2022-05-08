import "bootstrap/dist/css/bootstrap.css"
import "./app/styles/style.scss";
import { parseUrl } from "./app/utils/utils";
import { Router } from "./app/utils/router";
import { GameComponent } from "./app/components/game/game.component";
import { WelcomeComponent } from "./app/components/welcome/welcome.component"; 
import { ScoreComponent } from "./app/components/score/score.component";  
import { CardComponent } from "./app/components/game/card/card.component";  
const outlet = document.querySelector("#content-outlet");
const router = new Router(outlet)
.register("", WelcomeComponent)
.register("game", GameComponent)
.register("card", CardComponent)
.register("score", ScoreComponent);
document
.querySelector("body")
.appendChild(document.createTextNode(JSON.stringify(parameters)));