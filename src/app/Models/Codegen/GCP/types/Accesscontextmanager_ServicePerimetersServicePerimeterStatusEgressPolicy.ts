import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Accesscontextmanager_ServicePerimetersServicePerimeterStatusEgressPolicyEgressFrom,
  Accesscontextmanager_ServicePerimetersServicePerimeterStatusEgressPolicyEgressFrom_GetTypes,
} from "./Accesscontextmanager_ServicePerimetersServicePerimeterStatusEgressPolicyEgressFrom";
import {
  Accesscontextmanager_ServicePerimetersServicePerimeterStatusEgressPolicyEgressTo,
  Accesscontextmanager_ServicePerimetersServicePerimeterStatusEgressPolicyEgressTo_GetTypes,
} from "./Accesscontextmanager_ServicePerimetersServicePerimeterStatusEgressPolicyEgressTo";

export interface Accesscontextmanager_ServicePerimetersServicePerimeterStatusEgressPolicy {
  /*
Defines conditions on the source of a request causing this `EgressPolicy` to apply.
Structure is documented below.
*/
  EgressFrom?: Accesscontextmanager_ServicePerimetersServicePerimeterStatusEgressPolicyEgressFrom;

  /*
Defines the conditions on the `ApiOperation` and destination resources that
cause this `EgressPolicy` to apply.
Structure is documented below.
*/
  EgressTo?: Accesscontextmanager_ServicePerimetersServicePerimeterStatusEgressPolicyEgressTo;
}

export function Accesscontextmanager_ServicePerimetersServicePerimeterStatusEgressPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "EgressFrom",
      "Defines conditions on the source of a request causing this `EgressPolicy` to apply.\nStructure is documented below.",
      Accesscontextmanager_ServicePerimetersServicePerimeterStatusEgressPolicyEgressFrom_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "EgressTo",
      "Defines the conditions on the `ApiOperation` and destination resources that\ncause this `EgressPolicy` to apply.\nStructure is documented below.",
      Accesscontextmanager_ServicePerimetersServicePerimeterStatusEgressPolicyEgressTo_GetTypes(),
      false,
      false,
    ),
  ];
}
