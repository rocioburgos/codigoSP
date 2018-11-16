<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Subir archivos</title>
</head>
<body>  
    <h1>Puede seleccionar varios archivos</h1>
    <form action="upload.php" method="POST" enctype="multipart/form-data" >
        <label for="">Foto</label> <input type="file"  id="archivo" name="archivo[]" multiple>
        <input type="submit" value="Enviar">
    </form>
</body>
</html>
