import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Accesscontextmanager_ServicePerimeterStatusIngressPolicyIngressToOperationMethodSelector,
  Accesscontextmanager_ServicePerimeterStatusIngressPolicyIngressToOperationMethodSelector_GetTypes,
} from "./Accesscontextmanager_ServicePerimeterStatusIngressPolicyIngressToOperationMethodSelector";

export interface Accesscontextmanager_ServicePerimeterStatusIngressPolicyIngressToOperation {
  /*
API methods or permissions to allow. Method or permission must belong
to the service specified by `serviceName` field. A single MethodSelector
entry with `-` specified for the `method` field will allow all methods
AND permissions for the service specified in `serviceName`.
Structure is documented below.
*/
  MethodSelectors?: Array<Accesscontextmanager_ServicePerimeterStatusIngressPolicyIngressToOperationMethodSelector>;

  /*
The name of the API whose methods or permissions the `IngressPolicy` or
`EgressPolicy` want to allow. A single `ApiOperation` with serviceName
field set to `-` will allow all methods AND permissions for all services.
*/
  ServiceName?: string;
}

export function Accesscontextmanager_ServicePerimeterStatusIngressPolicyIngressToOperation_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "ServiceName",
      "The name of the API whose methods or permissions the `IngressPolicy` or\n`EgressPolicy` want to allow. A single `ApiOperation` with serviceName\nfield set to `*` will allow all methods AND permissions for all services.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "MethodSelectors",
      "API methods or permissions to allow. Method or permission must belong\nto the service specified by `serviceName` field. A single MethodSelector\nentry with `*` specified for the `method` field will allow all methods\nAND permissions for the service specified in `serviceName`.\nStructure is documented below.",
      Accesscontextmanager_ServicePerimeterStatusIngressPolicyIngressToOperationMethodSelector_GetTypes(),
      false,
      false,
    ),
  ];
}
