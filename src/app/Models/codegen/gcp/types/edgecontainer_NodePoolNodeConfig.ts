import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface edgecontainer_NodePoolNodeConfig {
  // "The Kubernetes node labels"
  labels?: Map<string, string>;
}

export function edgecontainer_NodePoolNodeConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Map,
      "labels",
      '"The Kubernetes node labels"',
      () => InputType_Map_GetTypes(),
      false,
      false,
    ),
  ];
}
