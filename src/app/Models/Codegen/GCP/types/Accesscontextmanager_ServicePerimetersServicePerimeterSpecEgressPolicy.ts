import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  accesscontextmanager_ServicePerimetersServicePerimeterSpecEgressPolicyEgressFrom,
  accesscontextmanager_ServicePerimetersServicePerimeterSpecEgressPolicyEgressFrom_GetTypes,
} from "./accesscontextmanager_ServicePerimetersServicePerimeterSpecEgressPolicyEgressFrom";
import {
  accesscontextmanager_ServicePerimetersServicePerimeterSpecEgressPolicyEgressTo,
  accesscontextmanager_ServicePerimetersServicePerimeterSpecEgressPolicyEgressTo_GetTypes,
} from "./accesscontextmanager_ServicePerimetersServicePerimeterSpecEgressPolicyEgressTo";

export interface accesscontextmanager_ServicePerimetersServicePerimeterSpecEgressPolicy {
  /*
Defines conditions on the source of a request causing this `EgressPolicy` to apply.
Structure is documented below.
*/
  egressFrom?: accesscontextmanager_ServicePerimetersServicePerimeterSpecEgressPolicyEgressFrom;

  /*
Defines the conditions on the `ApiOperation` and destination resources that
cause this `EgressPolicy` to apply.
Structure is documented below.
*/
  egressTo?: accesscontextmanager_ServicePerimetersServicePerimeterSpecEgressPolicyEgressTo;
}

export function accesscontextmanager_ServicePerimetersServicePerimeterSpecEgressPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "egressFrom",
      "Defines conditions on the source of a request causing this `EgressPolicy` to apply.\nStructure is documented below.",
      accesscontextmanager_ServicePerimetersServicePerimeterSpecEgressPolicyEgressFrom_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "egressTo",
      "Defines the conditions on the `ApiOperation` and destination resources that\ncause this `EgressPolicy` to apply.\nStructure is documented below.",
      accesscontextmanager_ServicePerimetersServicePerimeterSpecEgressPolicyEgressTo_GetTypes(),
      false,
      false,
    ),
  ];
}
