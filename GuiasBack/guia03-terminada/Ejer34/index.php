<!DOCTYPE html>
<!--/*Aplicación Nº 34 (Mostrar fecha)
Realizar una página que permita mostrar el día, mes o año actual, según lo elija el usuario. 
Para esto debe utilizar controles de tipo <input> (type=”checkBox”) y un <input> (type=”button”) 
para enviar la solicitud al servidor. Mostrar la fecha en la misma página. */-->
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Mostrar fecha</title>
</head>
<body>
    <form action=" <?php echo htmlspecialchars($_SERVER['PHP_SELF']) ?> "method="post">

    <div>
        <input type="checkbox" id="uno" name="check"
               value="uno" checked />
        <label for="uno">March 10, 2001</label>
    </div>

    <div>
        <input type="checkbox" id="dos" name="check"
               value="dos" />
        <label for="dos">mm.dd.aaa</label>
    </div>

    <div>
        <input type="checkbox" id="tres" name="check"
               value="tres" />
        <label for="tres">dd-mm-aaaa</label>
    </div>

        <br><button type='submit' name='submit'>Enviar </button>
    </form>

    <?php
    if(isset($_POST['submit'])){
        $formato= $_POST['check'];
        
        switch($formato){
            case "uno":
                echo date("F j, Y"); 
            break;
            case "dos":
                echo date("m.d.y");  
            break;
            case "tres":
                echo date("d-m-y");
            break;
        }
       
    }
   
    ?>
    
</body>
</html>