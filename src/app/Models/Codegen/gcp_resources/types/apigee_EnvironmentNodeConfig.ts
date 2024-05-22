import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface apigee_EnvironmentNodeConfig {
  /*
(Output)
The current total number of gateway nodes that each environment currently has across
all instances.
*/
  currentAggregateNodeCount?: string;

  /*
The maximum total number of gateway nodes that the is reserved for all instances that
has the specified environment. If not specified, the default is determined by the
recommended maximum number of nodes for that gateway.
*/
  maxNodeCount?: string;

  /*
The minimum total number of gateway nodes that the is reserved for all instances that
has the specified environment. If not specified, the default is determined by the
recommended minimum number of nodes for that gateway.
*/
  minNodeCount?: string;
}

export function apigee_EnvironmentNodeConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "currentAggregateNodeCount",
      "(Output)\nThe current total number of gateway nodes that each environment currently has across\nall instances.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "maxNodeCount",
      "The maximum total number of gateway nodes that the is reserved for all instances that\nhas the specified environment. If not specified, the default is determined by the\nrecommended maximum number of nodes for that gateway.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "minNodeCount",
      "The minimum total number of gateway nodes that the is reserved for all instances that\nhas the specified environment. If not specified, the default is determined by the\nrecommended minimum number of nodes for that gateway.",
      [],
      false,
      false,
    ),
  ];
}
