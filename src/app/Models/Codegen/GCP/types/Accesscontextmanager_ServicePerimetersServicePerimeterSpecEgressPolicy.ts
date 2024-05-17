import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Accesscontextmanager_ServicePerimetersServicePerimeterSpecEgressPolicyEgressTo,
  Accesscontextmanager_ServicePerimetersServicePerimeterSpecEgressPolicyEgressTo_GetTypes,
} from "./Accesscontextmanager_ServicePerimetersServicePerimeterSpecEgressPolicyEgressTo";
import {
  Accesscontextmanager_ServicePerimetersServicePerimeterSpecEgressPolicyEgressFrom,
  Accesscontextmanager_ServicePerimetersServicePerimeterSpecEgressPolicyEgressFrom_GetTypes,
} from "./Accesscontextmanager_ServicePerimetersServicePerimeterSpecEgressPolicyEgressFrom";

export interface Accesscontextmanager_ServicePerimetersServicePerimeterSpecEgressPolicy {
  /*
Defines conditions on the source of a request causing this `EgressPolicy` to apply.
Structure is documented below.
*/
  EgressFrom?: Accesscontextmanager_ServicePerimetersServicePerimeterSpecEgressPolicyEgressFrom;

  /*
Defines the conditions on the `ApiOperation` and destination resources that
cause this `EgressPolicy` to apply.
Structure is documented below.
*/
  EgressTo?: Accesscontextmanager_ServicePerimetersServicePerimeterSpecEgressPolicyEgressTo;
}

export function Accesscontextmanager_ServicePerimetersServicePerimeterSpecEgressPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "EgressFrom",
      "Defines conditions on the source of a request causing this `EgressPolicy` to apply.\nStructure is documented below.",
      Accesscontextmanager_ServicePerimetersServicePerimeterSpecEgressPolicyEgressFrom_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "EgressTo",
      "Defines the conditions on the `ApiOperation` and destination resources that\ncause this `EgressPolicy` to apply.\nStructure is documented below.",
      Accesscontextmanager_ServicePerimetersServicePerimeterSpecEgressPolicyEgressTo_GetTypes(),
      false,
      false,
    ),
  ];
}
