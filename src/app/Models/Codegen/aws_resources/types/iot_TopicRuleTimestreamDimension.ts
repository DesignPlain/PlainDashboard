import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface iot_TopicRuleTimestreamDimension {
  // The name of the rule.
  name?: string;

  // The value of the HTTP header.
  value?: string;
}

export function iot_TopicRuleTimestreamDimension_GetTypes(): DynamicUIProps[] {
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
