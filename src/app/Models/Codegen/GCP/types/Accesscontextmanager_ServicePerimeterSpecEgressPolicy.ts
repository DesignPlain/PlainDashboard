import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Accesscontextmanager_ServicePerimeterSpecEgressPolicyEgressFrom,
  Accesscontextmanager_ServicePerimeterSpecEgressPolicyEgressFrom_GetTypes,
} from "./Accesscontextmanager_ServicePerimeterSpecEgressPolicyEgressFrom";
import {
  Accesscontextmanager_ServicePerimeterSpecEgressPolicyEgressTo,
  Accesscontextmanager_ServicePerimeterSpecEgressPolicyEgressTo_GetTypes,
} from "./Accesscontextmanager_ServicePerimeterSpecEgressPolicyEgressTo";

export interface Accesscontextmanager_ServicePerimeterSpecEgressPolicy {
  /*
Defines conditions on the source of a request causing this `EgressPolicy` to apply.
Structure is documented below.
*/
  EgressFrom?: Accesscontextmanager_ServicePerimeterSpecEgressPolicyEgressFrom;

  /*
Defines the conditions on the `ApiOperation` and destination resources that
cause this `EgressPolicy` to apply.
Structure is documented below.
*/
  EgressTo?: Accesscontextmanager_ServicePerimeterSpecEgressPolicyEgressTo;
}

export function Accesscontextmanager_ServicePerimeterSpecEgressPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "EgressFrom",
      "Defines conditions on the source of a request causing this `EgressPolicy` to apply.\nStructure is documented below.",
      Accesscontextmanager_ServicePerimeterSpecEgressPolicyEgressFrom_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "EgressTo",
      "Defines the conditions on the `ApiOperation` and destination resources that\ncause this `EgressPolicy` to apply.\nStructure is documented below.",
      Accesscontextmanager_ServicePerimeterSpecEgressPolicyEgressTo_GetTypes(),
      false,
      false,
    ),
  ];
}
