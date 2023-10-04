import HashMap "mo:base/HashMap";
import Nat "mo:base/Nat";
import Iter "mo:base/Iter";
import Nat32 "mo:base/Nat32";
import Text "mo:base/Text";
import Principal "mo:base/Principal";
import Debug "mo:base/Debug";

//

actor funciones {

type ServiceId = Nat32;
    type Service = {
        creator: Principal;
        serviceName: Text;
        serviceAddress: Text;
        serviceType: Text;
        

    };

    stable var serviceId: ServiceId = 0;
    let serviceList = HashMap.HashMap<Text, Service>(0, Text.equal, Text.hash);

    private func generateServiceId() : ServiceId {
        serviceId += 1;
        return serviceId;
    };

    

   public shared (msg) func createService(serviceName: Text, serviceAddress: Text, serviceType: Text) : async () {
  let user: Principal = msg.caller;
  let service = {
    creator = user;
    serviceName = serviceName;
    serviceAddress = serviceAddress;
    serviceType = serviceType;
  };

  let serviceId = Nat32.toText(generateServiceId());
  serviceList.put(serviceId, service);
  Debug.print("Nuevo servicio agregado! ID: " # serviceId);
  return ();
};


   

   public shared (msg) func updateService(id: Text, serviceName: Text, serviceAddress: Text, serviceType: Text) : async Bool {
  let user: Principal = msg.caller;
  let service: ?Service = serviceList.get(id);

  switch (service) {
    case (null) {
      return false;
    };
    case (?currentService) {
      let newService: Service = {
        creator = user;
        serviceName = serviceName;
        serviceAddress = serviceAddress;
        serviceType = serviceType;
      };
      serviceList.put(id, newService);
      Debug.print("Actualizacion de servicio con ID: " # id);
      return true;
    };
  };
};

    public func deleteService(id: Text) : async Bool {
        let service: ?Service = serviceList.get(id);
        switch (service) {
            case (null) {
                return false;
            };
            case (_) {
                ignore serviceList.remove(id);
                Debug.print("Servicio eliminado con  ID: " # id);
                return true;
            };
        };
    };
        
}

