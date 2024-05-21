import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  networksecurity_AuthorizationPolicyRuleDestination,
  networksecurity_AuthorizationPolicyRuleDestination_GetTypes,
} from "./networksecurity_AuthorizationPolicyRuleDestination";
import {
  networksecurity_AuthorizationPolicyRuleSource,
  networksecurity_AuthorizationPolicyRuleSource_GetTypes,
} from "./networksecurity_AuthorizationPolicyRuleSource";

export interface networksecurity_AuthorizationPolicyRule {
  /*
List of attributes for the traffic destination. All of the destinations must match. A destination is a match if a request matches all the specified hosts, ports, methods and headers.
If not set, the action specified in the 'action' field will be applied without any rule checks for the destination.
Structure is documented below.
*/
  destinations?: Array<networksecurity_AuthorizationPolicyRuleDestination>;

  /*
List of attributes for the traffic source. All of the sources must match. A source is a match if both principals and ipBlocks match.
If not set, the action specified in the 'action' field will be applied without any rule checks for the source.
Structure is documented below.
*/
  sources?: Array<networksecurity_AuthorizationPolicyRuleSource>;
}

export function networksecurity_AuthorizationPolicyRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "destinations",
      "List of attributes for the traffic destination. All of the destinations must match. A destination is a match if a request matches all the specified hosts, ports, methods and headers.\nIf not set, the action specified in the 'action' field will be applied without any rule checks for the destination.\nStructure is documented below.",
      networksecurity_AuthorizationPolicyRuleDestination_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "sources",
      "List of attributes for the traffic source. All of the sources must match. A source is a match if both principals and ipBlocks match.\nIf not set, the action specified in the 'action' field will be applied without any rule checks for the source.\nStructure is documented below.",
      networksecurity_AuthorizationPolicyRuleSource_GetTypes(),
      false,
      false,
    ),
  ];
}
