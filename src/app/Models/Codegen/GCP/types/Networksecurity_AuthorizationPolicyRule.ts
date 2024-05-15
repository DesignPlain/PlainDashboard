import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Networksecurity_AuthorizationPolicyRuleDestination,
  Networksecurity_AuthorizationPolicyRuleDestination_GetTypes,
} from "./Networksecurity_AuthorizationPolicyRuleDestination";
import {
  Networksecurity_AuthorizationPolicyRuleSource,
  Networksecurity_AuthorizationPolicyRuleSource_GetTypes,
} from "./Networksecurity_AuthorizationPolicyRuleSource";

export interface Networksecurity_AuthorizationPolicyRule {
  /*
List of attributes for the traffic source. All of the sources must match. A source is a match if both principals and ipBlocks match.
If not set, the action specified in the 'action' field will be applied without any rule checks for the source.
Structure is documented below.
*/
  Sources?: Array<Networksecurity_AuthorizationPolicyRuleSource>;

  /*
List of attributes for the traffic destination. All of the destinations must match. A destination is a match if a request matches all the specified hosts, ports, methods and headers.
If not set, the action specified in the 'action' field will be applied without any rule checks for the destination.
Structure is documented below.
*/
  Destinations?: Array<Networksecurity_AuthorizationPolicyRuleDestination>;
}

export function Networksecurity_AuthorizationPolicyRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "Destinations",
      "List of attributes for the traffic destination. All of the destinations must match. A destination is a match if a request matches all the specified hosts, ports, methods and headers.\nIf not set, the action specified in the 'action' field will be applied without any rule checks for the destination.\nStructure is documented below.",
      Networksecurity_AuthorizationPolicyRuleDestination_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Sources",
      "List of attributes for the traffic source. All of the sources must match. A source is a match if both principals and ipBlocks match.\nIf not set, the action specified in the 'action' field will be applied without any rule checks for the source.\nStructure is documented below.",
      Networksecurity_AuthorizationPolicyRuleSource_GetTypes(),
      false,
      false,
    ),
  ];
}
