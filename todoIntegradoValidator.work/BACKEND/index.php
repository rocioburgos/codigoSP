    <?php
    use \Firebase\JWT\JWT as jwt; 
    use \Psr\Http\Message\ServerRequestInterface as Request;
    use \Psr\Http\Message\ResponseInterface as Response;
    
    require_once './vendor/autoload.php';
    //require_once './baseDeDatos.php';
    //require_once '/clases/AccesoDatos.php';
    //require_once '/clases/cd.php';
    
    $config['displayErrorDetails'] = true;
    $config['addContentLengthHeader'] = false;
    
    $app = new \Slim\App(["settings" => $config]);
    //$app = new \Slim\Slim(["settings" => $config]);
    $app->POST('/Crear', function (Request $request, Response $response){    
 
      $correo = $request->getParsedBody()['correo'];
      $nombre = $request->getParsedBody()['nombre'];
      $perfil = $request->getParsedBody()['perfil'];
      $apellido= $request->getParsedBody()['apellido'];
    
      $ahora=time();

      $payload = array(
         'iat' => $ahora,
         'exp'=> $ahora +(10),
         'correo' => $correo,
         'nombre' => $nombre,
         'apellido'=>$apellido,
         'perfil'=>$perfil,
         'app' => "probando"
      );
    
      $token = JWT::encode($payload, "miClave");
    
      return $response->withJson($token,200);
    });

    $app->POST('/Verificar', function (Request $request, Response $response){

      $token =  $request->getParsedBody()['token'];
      
     echo $token;
      if(empty($token) || $token === "")
      {
        throw new Exception("El Token esta vacio");
      }
      try
      {

        $payload=JWT::decode($token,'miClave',['HS256']);
        
        return $response->withJson($payload->perfil,200);
   
      }
      catch(Exception $e)
      {
      
        //throw new Exception("token no valido");
        return $response->withJson("Error");
      } 
    
      
    
    });
    
    
    $app->run();
    
    
    
    
    ?>