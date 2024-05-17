import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Integrationconnectors_ConnectionNodeConfig {
  // Minimum number of nodes in the runtime nodes.
  MaxNodeCount?: number;

  // Minimum number of nodes in the runtime nodes.
  MinNodeCount?: number;
}

export function Integrationconnectors_ConnectionNodeConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "MinNodeCount",
      "Minimum number of nodes in the runtime nodes.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "MaxNodeCount",
      "Minimum number of nodes in the runtime nodes.",
      [],
      false,
      false,
    ),
  ];
}
