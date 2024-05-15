import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Edgecontainer_NodePoolNodeConfig {
  // "The Kubernetes node labels"
  Labels?: Map<string, string>;
}

export function Edgecontainer_NodePoolNodeConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Map,
      "Labels",
      '"The Kubernetes node labels"',
      InputType_Map_GetTypes(),
      false,
      false,
    ),
  ];
}
