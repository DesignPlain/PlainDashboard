import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Accesscontextmanager_ServicePerimeterStatusEgressPolicyEgressFrom,
  Accesscontextmanager_ServicePerimeterStatusEgressPolicyEgressFrom_GetTypes,
} from "./Accesscontextmanager_ServicePerimeterStatusEgressPolicyEgressFrom";
import {
  Accesscontextmanager_ServicePerimeterStatusEgressPolicyEgressTo,
  Accesscontextmanager_ServicePerimeterStatusEgressPolicyEgressTo_GetTypes,
} from "./Accesscontextmanager_ServicePerimeterStatusEgressPolicyEgressTo";

export interface Accesscontextmanager_ServicePerimeterStatusEgressPolicy {
  /*
Defines conditions on the source of a request causing this `EgressPolicy` to apply.
Structure is documented below.
*/
  EgressFrom?: Accesscontextmanager_ServicePerimeterStatusEgressPolicyEgressFrom;

  /*
Defines the conditions on the `ApiOperation` and destination resources that
cause this `EgressPolicy` to apply.
Structure is documented below.
*/
  EgressTo?: Accesscontextmanager_ServicePerimeterStatusEgressPolicyEgressTo;
}

export function Accesscontextmanager_ServicePerimeterStatusEgressPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "EgressFrom",
      "Defines conditions on the source of a request causing this `EgressPolicy` to apply.\nStructure is documented below.",
      Accesscontextmanager_ServicePerimeterStatusEgressPolicyEgressFrom_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "EgressTo",
      "Defines the conditions on the `ApiOperation` and destination resources that\ncause this `EgressPolicy` to apply.\nStructure is documented below.",
      Accesscontextmanager_ServicePerimeterStatusEgressPolicyEgressTo_GetTypes(),
      false,
      false,
    ),
  ];
}
