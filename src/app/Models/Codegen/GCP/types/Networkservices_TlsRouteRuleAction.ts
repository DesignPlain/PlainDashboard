import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Networkservices_TlsRouteRuleActionDestination,
  Networkservices_TlsRouteRuleActionDestination_GetTypes,
} from "./Networkservices_TlsRouteRuleActionDestination";

export interface Networkservices_TlsRouteRuleAction {
  /*
The destination to which traffic should be forwarded.
Structure is documented below.
*/
  Destinations?: Array<Networkservices_TlsRouteRuleActionDestination>;
}

export function Networkservices_TlsRouteRuleAction_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "Destinations",
      "The destination to which traffic should be forwarded.\nStructure is documented below.",
      Networkservices_TlsRouteRuleActionDestination_GetTypes(),
      false,
      false,
    ),
  ];
}
