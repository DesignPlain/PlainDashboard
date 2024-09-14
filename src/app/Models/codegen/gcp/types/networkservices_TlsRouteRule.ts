import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  networkservices_TlsRouteRuleAction,
  networkservices_TlsRouteRuleAction_GetTypes,
} from "./networkservices_TlsRouteRuleAction";
import {
  networkservices_TlsRouteRuleMatch,
  networkservices_TlsRouteRuleMatch_GetTypes,
} from "./networkservices_TlsRouteRuleMatch";

export interface networkservices_TlsRouteRule {
  /*
Required. A detailed rule defining how to route traffic.
Structure is documented below.
*/
  action?: networkservices_TlsRouteRuleAction;

  /*
Matches define the predicate used to match requests to a given action.
Structure is documented below.
*/
  matches?: Array<networkservices_TlsRouteRuleMatch>;
}

export function networkservices_TlsRouteRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "action",
      "Required. A detailed rule defining how to route traffic.\nStructure is documented below.",
      () => networkservices_TlsRouteRuleAction_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "matches",
      "Matches define the predicate used to match requests to a given action.\nStructure is documented below.",
      () => networkservices_TlsRouteRuleMatch_GetTypes(),
      true,
      false,
    ),
  ];
}
