import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface iot_TopicRuleErrorActionTimestreamDimension {
  // The name of the rule.
  name?: string;

  // The value of the HTTP header.
  value?: string;
}

export function iot_TopicRuleErrorActionTimestreamDimension_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "The name of the rule.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "value",
      "The value of the HTTP header.",
      [],
      true,
      false,
    ),
  ];
}
