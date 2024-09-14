import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  accesscontextmanager_ServicePerimetersServicePerimeterStatusEgressPolicyEgressToOperationMethodSelector,
  accesscontextmanager_ServicePerimetersServicePerimeterStatusEgressPolicyEgressToOperationMethodSelector_GetTypes,
} from "./accesscontextmanager_ServicePerimetersServicePerimeterStatusEgressPolicyEgressToOperationMethodSelector";

export interface accesscontextmanager_ServicePerimetersServicePerimeterStatusEgressPolicyEgressToOperation {
  /*
API methods or permissions to allow. Method or permission must belong
to the service specified by `serviceName` field. A single MethodSelector
entry with `-` specified for the `method` field will allow all methods
AND permissions for the service specified in `serviceName`.
Structure is documented below.
*/
  methodSelectors?: Array<accesscontextmanager_ServicePerimetersServicePerimeterStatusEgressPolicyEgressToOperationMethodSelector>;

  /*
The name of the API whose methods or permissions the `IngressPolicy` or
`EgressPolicy` want to allow. A single `ApiOperation` with serviceName
field set to `-` will allow all methods AND permissions for all services.
*/
  serviceName?: string;
}

export function accesscontextmanager_ServicePerimetersServicePerimeterStatusEgressPolicyEgressToOperation_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "methodSelectors",
      "API methods or permissions to allow. Method or permission must belong\nto the service specified by `serviceName` field. A single MethodSelector\nentry with `*` specified for the `method` field will allow all methods\nAND permissions for the service specified in `serviceName`.\nStructure is documented below.",
      () =>
        accesscontextmanager_ServicePerimetersServicePerimeterStatusEgressPolicyEgressToOperationMethodSelector_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "serviceName",
      "The name of the API whose methods or permissions the `IngressPolicy` or\n`EgressPolicy` want to allow. A single `ApiOperation` with serviceName\nfield set to `*` will allow all methods AND permissions for all services.",
      () => [],
      false,
      false,
    ),
  ];
}
