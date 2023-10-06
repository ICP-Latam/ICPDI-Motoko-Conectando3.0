import HashMap "mo:base/HashMap";
import Nat "mo:base/Nat";
import Iter "mo:base/Iter";
import Nat32 "mo:base/Nat32";
import Text "mo:base/Text";
import Principal "mo:base/Principal";
import Debug "mo:base/Debug";

//

actor funciones {

// Define el tipo de datos Servicios
type Servicios = {
  TipoServicio: Text;
  descripcion: Text;
  ubicacion: Text;  // Agregado el campo de ubicación
  precio: Int;
};


// Declara una estructura de datos para almacenar servicios
var servicios = HashMap.HashMap<Text, Servicios>(0, Text.equal, Text.hash);

// Función para crear un nuevo servicio
public func crearServicio(
  tipoServicio: Text,
  descripcion: Text,
  ubicacion: Text,
  precio: Int
) : async Text {
  let nuevoServicio : Servicios = {
    TipoServicio = tipoServicio;
    descripcion = descripcion;
    ubicacion = ubicacion;
    precio = precio;
  };
  
  // Genera una clave única para el servicio (puedes modificar esto según tus necesidades)
  let clave = tipoServicio;
  
  // Almacena el servicio en la estructura de datos
  servicios.put(clave, nuevoServicio);
  
  return "Servicio agregado correctamente";
};

// Función para modificar un servicio existente
public func modificarServicio(
  tipoServicio: Text,
  nuevaDescripcion: Text,
  nuevaUbicacion: Text,
  nuevoPrecio: Int
) : async Text {
  let servicioExistente : ?Servicios = servicios.get(tipoServicio);
  
  switch (servicioExistente) {
    case (null) {
      // El servicio no existe, devuelve un mensaje de error
      return "Servicio no encontrado. No se puede modificar.";
    };
    case (?servicio) {
      // El servicio existe, actualiza sus propiedades
      let servicioActualizado : Servicios = {
        TipoServicio = tipoServicio;
        descripcion = nuevaDescripcion;
        ubicacion = nuevaUbicacion;
        precio = nuevoPrecio;
      };
      
      // Almacena el servicio actualizado
      servicios.put(tipoServicio, servicioActualizado);
      
      return "Servicio modificado correctamente";
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


        
}

