import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface iot_ThingGroupPropertiesAttributePayload {
  // Key-value map.
  attributes?: Map<string, string>;
}

export function iot_ThingGroupPropertiesAttributePayload_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Map,
      "attributes",
      "Key-value map.",
      () => InputType_Map_GetTypes(),
      false,
      false,
    ),
  ];
}
