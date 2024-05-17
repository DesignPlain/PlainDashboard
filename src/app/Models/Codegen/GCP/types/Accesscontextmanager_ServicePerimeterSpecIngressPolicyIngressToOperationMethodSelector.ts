import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Accesscontextmanager_ServicePerimeterSpecIngressPolicyIngressToOperationMethodSelector {
  /*
Value for `method` should be a valid method name for the corresponding
`serviceName` in `ApiOperation`. If `-` used as value for method,
then ALL methods and permissions are allowed.
*/
  Method?: string;

  /*
Value for permission should be a valid Cloud IAM permission for the
corresponding `serviceName` in `ApiOperation`.
*/
  Permission?: string;
}

export function Accesscontextmanager_ServicePerimeterSpecIngressPolicyIngressToOperationMethodSelector_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Method",
      "Value for `method` should be a valid method name for the corresponding\n`serviceName` in `ApiOperation`. If `*` used as value for method,\nthen ALL methods and permissions are allowed.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Permission",
      "Value for permission should be a valid Cloud IAM permission for the\ncorresponding `serviceName` in `ApiOperation`.",
      [],
      false,
      false,
    ),
  ];
}
