import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface iot_TopicRuleHttpHttpHeader {
  // The value of the HTTP header.
  value?: string;

  // The name of the HTTP header.
  key?: string;
}

export function iot_TopicRuleHttpHttpHeader_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "value",
      "The value of the HTTP header.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "key",
      "The name of the HTTP header.",
      [],
      true,
      false,
    ),
  ];
}
