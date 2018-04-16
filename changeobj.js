function workOrderStatus( variable ){

    if (variable === "bigmax" )
{
	console.log('variable = '+ variable) ;
 
		$('#obj').attr('src' , "bigmax/model.obj") ;
		$('#mtl').attr('src' , "bigmax/model.mtl") ;	


		document.querySelector('a-entity').components.position.flushToDOM();  // Flush a component.
		document.querySelector('a-entity').flushToDOM();  // Flush an entity.
		document.querySelector('a-entity').flushToDOM(true);  // Flush an entity and its children.
		document.querySelector('a-scene').flushToDOM(true);  // Flush every entity.
		alert('obj = ' +  $('#obj').attr('src')  +' mtl =' + $("#mtl").attr('src')) ;

  }  

    else if (variable === "skull" )
{
	console.log('variable = '+ variable) ;

		$('#obj').attr('src' , "skull/model.obj") ;
		$('#mtl').attr('src' , "skull/model.mtl") ;	


		document.querySelector('a-entity').components.position.flushToDOM();  // Flush a component.
		document.querySelector('a-entity').flushToDOM();  // Flush an entity.
		document.querySelector('a-entity').flushToDOM(true);  // Flush an entity and its children.
		document.querySelector('a-scene').flushToDOM(true);  // Flush every entity.
		alert('obj = ' +  $('#obj').attr('src')  +' mtl =' + $("#mtl").attr('src')) ;

  }  
}
