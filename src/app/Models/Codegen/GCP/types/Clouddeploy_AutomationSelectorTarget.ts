import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Clouddeploy_AutomationSelectorTarget {
  // Target labels.
  Labels?: Map<string, string>;

  // ID of the `Target`. The value of this field could be one of the following: - The last segment of a target name. It only needs the ID to determine which target is being referred to - "-", all targets in a location.
  Id?: string;
}

export function Clouddeploy_AutomationSelectorTarget_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Id",
      'ID of the `Target`. The value of this field could be one of the following: * The last segment of a target name. It only needs the ID to determine which target is being referred to * "*", all targets in a location.',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "Labels",
      "Target labels.",
      InputType_Map_GetTypes(),
      false,
      false,
    ),
  ];
}
