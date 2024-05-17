import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Networkservices_TlsRouteRuleAction,
  Networkservices_TlsRouteRuleAction_GetTypes,
} from "./Networkservices_TlsRouteRuleAction";
import {
  Networkservices_TlsRouteRuleMatch,
  Networkservices_TlsRouteRuleMatch_GetTypes,
} from "./Networkservices_TlsRouteRuleMatch";

export interface Networkservices_TlsRouteRule {
  /*
Required. A detailed rule defining how to route traffic.
Structure is documented below.
*/
  Action?: Networkservices_TlsRouteRuleAction;

  /*
Matches define the predicate used to match requests to a given action.
Structure is documented below.
*/
  Matches?: Array<Networkservices_TlsRouteRuleMatch>;
}

export function Networkservices_TlsRouteRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "Action",
      "Required. A detailed rule defining how to route traffic.\nStructure is documented below.",
      Networkservices_TlsRouteRuleAction_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Matches",
      "Matches define the predicate used to match requests to a given action.\nStructure is documented below.",
      Networkservices_TlsRouteRuleMatch_GetTypes(),
      true,
      false,
    ),
  ];
}
