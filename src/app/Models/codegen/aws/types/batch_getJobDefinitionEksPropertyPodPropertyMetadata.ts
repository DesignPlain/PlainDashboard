import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface batch_getJobDefinitionEksPropertyPodPropertyMetadata {
  // Key-value pairs used to identify, sort, and organize cube resources.
  labels?: Map<string, string>;
}

export function batch_getJobDefinitionEksPropertyPodPropertyMetadata_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Map,
      "labels",
      "Key-value pairs used to identify, sort, and organize cube resources.",
      () => InputType_Map_GetTypes(),
      true,
      false,
    ),
  ];
}
