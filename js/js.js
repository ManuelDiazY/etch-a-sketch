function dibujar(){
		var valor = document.getElementById("valor").value; 
		var color="this.style.background"+"="+"'"+"black"+"';";

		var divs=1296;
		for(let i=1; i <= divs ; i++){
			let div = document.createElement("div");
			div.classList.add("grid-item");
			div.setAttribute("onmouseover", color);
            document.getElementById("grid-container").appendChild(div);
		}
	}

	function modificar(){
		var valor = document.getElementById("valor").value; 

		var colorSelect = document.getElementById("color").value; 
		var color="this.style.background"+"="+"'"+colorSelect+"';";
		//remover cuadricula actual
		var principal = document.getElementById("grid-container"); 
		while (principal.firstChild) { 
		    principal.removeChild(principal.firstChild); 
		} 
		//dibujar nueva cuadricula
		valor = parseInt(valor);
		for(let i=1; i <= valor ; i++){
			let div = document.createElement("div");
			div.classList.add("grid-item");
			div.setAttribute("onmouseover", color);
            document.getElementById("grid-container").appendChild(div);
		}
		
	}