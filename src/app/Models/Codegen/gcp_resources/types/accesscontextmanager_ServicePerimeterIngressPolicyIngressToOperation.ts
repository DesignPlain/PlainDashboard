import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  accesscontextmanager_ServicePerimeterIngressPolicyIngressToOperationMethodSelector,
  accesscontextmanager_ServicePerimeterIngressPolicyIngressToOperationMethodSelector_GetTypes,
} from "./accesscontextmanager_ServicePerimeterIngressPolicyIngressToOperationMethodSelector";

export interface accesscontextmanager_ServicePerimeterIngressPolicyIngressToOperation {
  /*
API methods or permissions to allow. Method or permission must belong to
the service specified by serviceName field. A single `MethodSelector` entry
with `-` specified for the method field will allow all methods AND
permissions for the service specified in `serviceName`.
Structure is documented below.
*/
  methodSelectors?: Array<accesscontextmanager_ServicePerimeterIngressPolicyIngressToOperationMethodSelector>;

  /*
The name of the API whose methods or permissions the `IngressPolicy` or
`EgressPolicy` want to allow. A single `ApiOperation` with `serviceName`
field set to `-` will allow all methods AND permissions for all services.
*/
  serviceName?: string;
}

export function accesscontextmanager_ServicePerimeterIngressPolicyIngressToOperation_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "methodSelectors",
      "API methods or permissions to allow. Method or permission must belong to\nthe service specified by serviceName field. A single `MethodSelector` entry\nwith `*` specified for the method field will allow all methods AND\npermissions for the service specified in `serviceName`.\nStructure is documented below.",
      accesscontextmanager_ServicePerimeterIngressPolicyIngressToOperationMethodSelector_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "serviceName",
      "The name of the API whose methods or permissions the `IngressPolicy` or\n`EgressPolicy` want to allow. A single `ApiOperation` with `serviceName`\nfield set to `*` will allow all methods AND permissions for all services.",
      [],
      false,
      false,
    ),
  ];
}
