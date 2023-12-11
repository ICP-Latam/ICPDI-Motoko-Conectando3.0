import HashMap "mo:base/HashMap";
import Nat "mo:base/Nat";
import Iter "mo:base/Iter";
import Nat32 "mo:base/Nat32";
import Text "mo:base/Text";
import Array "mo:base/Array";
import D "mo:base/Debug";
import Int "mo:base/Int";
import Principal "mo:base/Principal";
import Debug "mo:base/Debug";

actor funciones {

//SERVICIOS

// Define el tipo de datos Servicios
type Servicios = {
  TipoServicio: Text;
  descripcion: Text;
  ubicacion: Text;  // Agregado el campo de ubicación
  precio: Text;
};

private func generateIEvent() : Nat {
    index += 1;
    return index;
  };


// Declara una estructura de datos para almacenar servicios
var servicios = HashMap.HashMap<Text, Servicios>(0, Text.equal, Text.hash);



// Función para crear un nuevo servicio
public func crearServicio(
  tipoServicio: Text,
  descripcion: Text,
  ubicacion: Text,
  precio: Text
) : async () {
  let nuevoServicio : Servicios = {
    TipoServicio = tipoServicio;
    descripcion = descripcion;
    ubicacion = ubicacion;
    precio = precio;
  };
  
  // Genera una clave única para el servicio (puedes modificar esto según tus necesidades)
  let clave = Nat.toText(generateIEvent());
  
  // Almacena el servicio en la estructura de datos
  servicios.put(clave, nuevoServicio);
  D.print ("Nuevo servicio agregado " # tipoServicio);
  return ();
};

// Función para modificar un servicio existente
public func modificarServicio(
  id:Text,
   tipoServicio: Text,
  descripcion: Text,
  ubicacion: Text,
  precio: Text
) : async Bool {
  let servicioExistente : ?Servicios = servicios.get(id);
  
  switch (servicioExistente) {
    case (null) {
      // El servicio no existe, devuelve un mensaje de error
      return false;
    };
    case (?currentservicio) {
      // El servicio existe, actualiza sus propiedades
      let servicioActualizado : Servicios = {
        tipoServicio: Text;
  descripcion: Text;
  ubicacion: Text;
  precio: Text;
      };
      
      // Almacena el servicio actualizado
      servicios.put(id, servicioActualizado);
      D.print ("El servicio se ha actualizado"#id);
      return true;
    };
  };
};

// Función para eliminar un servicio
public func eliminarServicio(tipoServicio: Text) : async Text {
  let servicioExistente : ?Servicios = servicios.get(tipoServicio);
  
  switch (servicioExistente) {
    case (null) {
      // El servicio no existe, devuelve un mensaje de error
      return "Servicio no encontrado. No se puede eliminar.";
    };
    case (?_) {
      // El servicio existe, elimínalo
      servicios.delete(tipoServicio);
      return "Servicio eliminado correctamente";
    };
  };
};

public query func buscarServicios () : async [(Text, Servicios)]{
    let servIter : Iter.Iter<(Text, Servicios)> = servicios.entries();
    let servArray : [(Text, Servicios)] = Iter.toArray(servIter);
    return servArray;

  };

  public query func buscarServiciosID (id: Text) : async ?Servicios {
    let serv: ?Servicios = servicios.get(id);
    return serv;
  };


//*********************************************************************//
//USUARIOS

// Define el tipo de datos Servicios
type Usuarios = {
  nombre: Text;
  apellidoP: Text;
  apellidoM: Text;
  telefono: Int;
  email: Text;
  ubicacion: Text; 
   // Agregado el campo de ubicación
  //identidad: Principal;
};

type Index = Nat;
var index: Index = 0;
// Declara una estructura de datos para almacenar usuarios
let usuario = HashMap.HashMap<Text, Usuarios>(0, Text.equal, Text.hash);

private func generateIUser() : Nat {
    index += 1;
    return index;
  };

  public func crearUsuario(
  nombre: Text,
  apellidoP: Text,
  apellidoM: Text, 
  telefono: Int,
  email: Text,
  ubicacion: Text
   ) : async Text {
    let nuevoUsuario : Usuarios = {
      nombre = nombre; 
      apellidoP = apellidoP; 
      apellidoM = apellidoM; 
      telefono = telefono; 
      email = email;
      ubicacion = ubicacion;

      };

    let clave = Nat.toText(generateIUser());

    usuario.put(clave, nuevoUsuario);
    //identidad: Principal; // Identidad de Internet Identity
    return "Usuario agregado correctamente";
  };

   public query func buscarUsuarios () : async [(Text, Usuarios)]{
    let userIter : Iter.Iter<(Text, Usuarios)> = usuario.entries();
    let userArray : [(Text, Usuarios)] = Iter.toArray(userIter);
    return userArray;

  };

  public query func buscarUsuariosID (id: Text) : async ?Usuarios {
    let user: ?Usuarios = usuario.get(id);
    return user;
  };

  public func actualizarUsuario (id:Text, index:Nat, nombre:Text, apellidoP:Text, apellidoM:Text, telefono:Int, email:Text, ubicacion:Text) : async Bool {
    let user: ?Usuarios= usuario.get(id);

    switch (user) {
      case (null) {
        return false;
      };
      case (?currentuser) {
        let user: Usuarios= {nombre = nombre; apellidoP = apellidoP; apellidoM = apellidoM; telefono = telefono; email=email; ubicacion=ubicacion;  };
        usuario.put(id,user);

        return true;
      };
    };

  };

  //

  // Función para eliminar un servicio
public func eliminarUusuario(id: Text) : async Text {
  let userExt : ?Usuarios = usuario.get(id);
  
  switch (userExt) {
    case (null) {
      // El servicio no existe, devuelve un mensaje de error
      return "Usuario no encontrado, no se puede eliminar.";
    };
    case (?_) {
      // El servicio existe, elimínalo
      servicios.delete(id);
      return "Usuario eliminado correctamente";
    };
  };
};

  public func verificarUsuario(id:Text) : async Text {
    let user: ?Usuarios = usuario.get(id);
    if (user != null) {
      return "Cuenta de usuario verificada";
    } else {
      return "ERROR: Cuenta de usuario no verificada";
    }
  };

  ///Funciones 

  public func autorizarServicio(id:Text):async Text {
    let serv: ?Servicios = servicios.get(id);
    if (serv != null) {
      return "Servicio autorizado con éxito";
    } else {
      return "Servicio no autorizado";
    }
  };

  public func programarFechaServicio(id:Text):async Text {
    let serv: ?Servicios = servicios.get(id);
    if (serv != null) {
      return "Servicio programado";
    } else {
      return "Servicio no existente";
    }

  };

  
public func pagoServicio(id:Text):async Text {
    let serv: ?Servicios = servicios.get(id);
    if (serv != null) {
      return "Pago realizado con éxito";
    } else {
      return "Pago no realizado ";
    }
  };

}