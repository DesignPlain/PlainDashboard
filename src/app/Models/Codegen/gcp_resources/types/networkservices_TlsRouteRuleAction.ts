import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  networkservices_TlsRouteRuleActionDestination,
  networkservices_TlsRouteRuleActionDestination_GetTypes,
} from "./networkservices_TlsRouteRuleActionDestination";

export interface networkservices_TlsRouteRuleAction {
  /*
The destination to which traffic should be forwarded.
Structure is documented below.
*/
  destinations?: Array<networkservices_TlsRouteRuleActionDestination>;
}

export function networkservices_TlsRouteRuleAction_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "destinations",
      "The destination to which traffic should be forwarded.\nStructure is documented below.",
      networkservices_TlsRouteRuleActionDestination_GetTypes(),
      false,
      false,
    ),
  ];
}
