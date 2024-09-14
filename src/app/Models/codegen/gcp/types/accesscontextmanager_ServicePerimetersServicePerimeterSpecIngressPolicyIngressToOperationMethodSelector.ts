import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface accesscontextmanager_ServicePerimetersServicePerimeterSpecIngressPolicyIngressToOperationMethodSelector {
  /*
Value for `method` should be a valid method name for the corresponding
`serviceName` in `ApiOperation`. If `-` used as value for method,
then ALL methods and permissions are allowed.
*/
  method?: string;

  /*
Value for permission should be a valid Cloud IAM permission for the
corresponding `serviceName` in `ApiOperation`.
*/
  permission?: string;
}

export function accesscontextmanager_ServicePerimetersServicePerimeterSpecIngressPolicyIngressToOperationMethodSelector_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "method",
      "Value for `method` should be a valid method name for the corresponding\n`serviceName` in `ApiOperation`. If `*` used as value for method,\nthen ALL methods and permissions are allowed.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "permission",
      "Value for permission should be a valid Cloud IAM permission for the\ncorresponding `serviceName` in `ApiOperation`.",
      () => [],
      false,
      false,
    ),
  ];
}
