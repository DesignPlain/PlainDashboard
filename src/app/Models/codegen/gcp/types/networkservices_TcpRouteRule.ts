import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  networkservices_TcpRouteRuleMatch,
  networkservices_TcpRouteRuleMatch_GetTypes,
} from './networkservices_TcpRouteRuleMatch';
import {
  networkservices_TcpRouteRuleAction,
  networkservices_TcpRouteRuleAction_GetTypes,
} from './networkservices_TcpRouteRuleAction';

export interface networkservices_TcpRouteRule {
  /*
A detailed rule defining how to route traffic.
Structure is documented below.
*/
  action?: networkservices_TcpRouteRuleAction;

  /*
RouteMatch defines the predicate used to match requests to a given action. Multiple match types are "OR"ed for evaluation.
If no routeMatch field is specified, this rule will unconditionally match traffic.
Structure is documented below.
*/
  matches?: Array<networkservices_TcpRouteRuleMatch>;
}

export function networkservices_TcpRouteRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'action',
      'A detailed rule defining how to route traffic.\nStructure is documented below.',
      () => networkservices_TcpRouteRuleAction_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'matches',
      'RouteMatch defines the predicate used to match requests to a given action. Multiple match types are "OR"ed for evaluation.\nIf no routeMatch field is specified, this rule will unconditionally match traffic.\nStructure is documented below.',
      () => networkservices_TcpRouteRuleMatch_GetTypes(),
      false,
      false,
    ),
  ];
}
