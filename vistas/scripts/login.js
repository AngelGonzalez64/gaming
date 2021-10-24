$("#frmAcceso").on('submit',function(e)
{
    e.preventDefault();


    logina=$("#logina").val();
    clavea=$("#clavea").val();
    $.ajax({
    data: {
        'op':'verificar',
        'logina': logina,
        'clavea':clavea,        
    },
    url: '../ajax/users.php?=verificar',
    type: 'POST',
    dataType: 'json',
    success: function(response) {
        if (response.data)
        {
             $(location).attr("href","pagina_dos.php");  
        }
        else
        {
            bootbox.alert("Usuario y/o Password incorrectos");
        }
       
       
    },
    error: function(response) {
        console.log(response);
     alert(response);
     console.log(response);
    }
    });


});