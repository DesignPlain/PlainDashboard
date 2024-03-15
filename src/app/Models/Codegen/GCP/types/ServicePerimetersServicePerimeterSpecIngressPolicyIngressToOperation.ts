import { ServicePerimetersServicePerimeterSpecIngressPolicyIngressToOperationMethodSelector } from "./ServicePerimetersServicePerimeterSpecIngressPolicyIngressToOperationMethodSelector";

export interface ServicePerimetersServicePerimeterSpecIngressPolicyIngressToOperation {
  /*
API methods or permissions to allow. Method or permission must belong
to the service specified by `serviceName` field. A single MethodSelector
entry with `-` specified for the `method` field will allow all methods
AND permissions for the service specified in `serviceName`.
Structure is documented below.
*/
  MethodSelectors?: Array<ServicePerimetersServicePerimeterSpecIngressPolicyIngressToOperationMethodSelector>;

  /*
The name of the API whose methods or permissions the `IngressPolicy` or
`EgressPolicy` want to allow. A single `ApiOperation` with serviceName
field set to `-` will allow all methods AND permissions for all services.
*/
  ServiceName?: string;
}
