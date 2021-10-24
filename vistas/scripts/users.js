var tabla;

//Función que se ejecuta al inicio
function init(){
	mostrarform(false);
	listar();
	$("#formulario").on("submit",function(e)
	{
		guardaryeditar(e);	
	})
	
}

//Función limpiar
function limpiar()
{
	$("#nombre").val("");
	$("#apellido").val("");
	$("#tipo").val("");
	$("#clave").val("");
	$("#email").val("");
	$("#ia1").val("");
	$("#id_user").val("");
	$("#avatar").val("");			
	$("#ia1").attr("src","");
	$("#im1").attr("src","");
	$("#tel").val("");
			
}

//Función mostrar formulario
function mostrarform(flag)
{
	limpiar();
	if (flag)
	{
		$("#listadoregistros").hide();
		$("#formularioregistros").show();
		$("#btnGuardar").prop("disabled",false);
		$("#btnagregar").hide();
	}
	else
	{
		$("#listadoregistros").show();
		$("#formularioregistros").hide();
		$("#btnagregar").show();
	}
}

//Función cancelarform
function cancelarform()
{
	limpiar();
	mostrarform(false);
}

//Función Listar
function listar()
{
	tabla=$('#tbllistado').dataTable(
	{
		"aProcessing": true,//Activamos el procesamiento del datatables
	    "aServerSide": true,//Paginación y filtrado realizados por el servidor
	    dom: 'Bfrtip',//Definimos los elementos del control de tabla
	    'serverMethod': 'post',
	    buttons: [		          
		            'copyHtml5',
		            'excelHtml5',
		            'csvHtml5',
		            'pdf'
		        ],
		"ajax": {
      				"url": "../ajax/users.php?op=listar",
      				
					contentType: 'application/json; utf-8',
      				dataType: 'json',					
					error: function(e){
						console.log(e.responseText);	
					}
				},
		"bDestroy": true,
		"iDisplayLength": 5,//Paginación
	    "order": [[ 1, "desc" ]]//Ordenar (columna,orden)
	}).DataTable();
}
//Función para guardar o editar

function guardaryeditar(e)
{
	
	e.preventDefault(); //No se activará la acción predeterminada del evento
	$("#btnGuardar").prop("disabled",true);
	var formData = new FormData($("#formulario")[0]);
	$.ajax({
			url: "../ajax/users.php?op=guardaryeditar",
		    type: "POST",		
	 		data:formData,
	        cache:false,
	        contentType: false,
	        processData: false,
	        success:function(data){
	        	 bootbox.alert(data);	          
	          mostrarform(false);
	          tabla.ajax.reload();
	               
	            },
	        error: function(data){
	                console.log("error");
	                console.log(data);
	            }

   		});
	limpiar();

}
 

function mostrar(id_user)
{

	$.ajax({
	    data: {
	        'op':'mostrar',
	        'id_user' : id_user,      
	    },
	    url: '../ajax/users.php?=verificar',
	    type: 'POST',
	    dataType: 'json',
	    success: function(data) {
			console.log(data);
			//data = JSON.parse(data);		
			mostrarform(true);

			$("#nombre").val(data[0].nombre);
			$("#apellido").val(data[0].apellido);
			$("#tipo").val(data[0].tipo);
			$("#clave").val(data[0].password);
			$("#email").val(data[0].email);
			$("#ia1").show();
			$("#ia1").val(data[0].img);
			$("#ia1").attr("src","../stuff/user/"+data[0].img);
			$("#im1").attr("src","../stuff/user/"+data[0].img);
			$("#tel").val(data[0].tel);
			$("#avatar").val(data[0].avatar);
			$("#id_user").val(data[0].id_user);

 		}
	 });
}

//Función para desactivar registros
function desactivar(id_user)
{
	bootbox.confirm("¿Está seguro de eliminar el usuario?", function(result){
		if(result)
        {
        	$.post("../ajax/users.php?op=desactivar", {id_user : id_user}, function(e){
        		bootbox.alert(e);
	            tabla.ajax.reload();
        	});	
        }
	})
}

//Función para activar registros
function activar(id_user)
{
	bootbox.confirm("¿Está Seguro de activar el Usuario?", function(result){
		if(result)
        {
        	$.post("../ajax/users.php?op=activar", {id_user : id_user}, function(e){
        		bootbox.alert(e);
	            tabla.ajax.reload();
        	});	
        }
	})
}


init();