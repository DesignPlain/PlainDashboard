import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Networkservices_TcpRouteRuleAction,
  Networkservices_TcpRouteRuleAction_GetTypes,
} from "./Networkservices_TcpRouteRuleAction";
import {
  Networkservices_TcpRouteRuleMatch,
  Networkservices_TcpRouteRuleMatch_GetTypes,
} from "./Networkservices_TcpRouteRuleMatch";

export interface Networkservices_TcpRouteRule {
  /*
A detailed rule defining how to route traffic.
Structure is documented below.
*/
  Action?: Networkservices_TcpRouteRuleAction;

  /*
RouteMatch defines the predicate used to match requests to a given action. Multiple match types are "OR"ed for evaluation.
If no routeMatch field is specified, this rule will unconditionally match traffic.
Structure is documented below.
*/
  Matches?: Array<Networkservices_TcpRouteRuleMatch>;
}

export function Networkservices_TcpRouteRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "Action",
      "A detailed rule defining how to route traffic.\nStructure is documented below.",
      Networkservices_TcpRouteRuleAction_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Matches",
      'RouteMatch defines the predicate used to match requests to a given action. Multiple match types are "OR"ed for evaluation.\nIf no routeMatch field is specified, this rule will unconditionally match traffic.\nStructure is documented below.',
      Networkservices_TcpRouteRuleMatch_GetTypes(),
      false,
      false,
    ),
  ];
}
