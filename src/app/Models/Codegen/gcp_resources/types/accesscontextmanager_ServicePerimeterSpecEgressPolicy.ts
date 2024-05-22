import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  accesscontextmanager_ServicePerimeterSpecEgressPolicyEgressFrom,
  accesscontextmanager_ServicePerimeterSpecEgressPolicyEgressFrom_GetTypes,
} from "./accesscontextmanager_ServicePerimeterSpecEgressPolicyEgressFrom";
import {
  accesscontextmanager_ServicePerimeterSpecEgressPolicyEgressTo,
  accesscontextmanager_ServicePerimeterSpecEgressPolicyEgressTo_GetTypes,
} from "./accesscontextmanager_ServicePerimeterSpecEgressPolicyEgressTo";

export interface accesscontextmanager_ServicePerimeterSpecEgressPolicy {
  /*
Defines conditions on the source of a request causing this `EgressPolicy` to apply.
Structure is documented below.
*/
  egressFrom?: accesscontextmanager_ServicePerimeterSpecEgressPolicyEgressFrom;

  /*
Defines the conditions on the `ApiOperation` and destination resources that
cause this `EgressPolicy` to apply.
Structure is documented below.
*/
  egressTo?: accesscontextmanager_ServicePerimeterSpecEgressPolicyEgressTo;
}

export function accesscontextmanager_ServicePerimeterSpecEgressPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "egressFrom",
      "Defines conditions on the source of a request causing this `EgressPolicy` to apply.\nStructure is documented below.",
      accesscontextmanager_ServicePerimeterSpecEgressPolicyEgressFrom_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "egressTo",
      "Defines the conditions on the `ApiOperation` and destination resources that\ncause this `EgressPolicy` to apply.\nStructure is documented below.",
      accesscontextmanager_ServicePerimeterSpecEgressPolicyEgressTo_GetTypes(),
      false,
      false,
    ),
  ];
}
