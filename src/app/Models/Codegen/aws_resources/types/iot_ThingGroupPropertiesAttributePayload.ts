import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

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
      InputType_Map_GetTypes(),
      false,
      false,
    ),
  ];
}
