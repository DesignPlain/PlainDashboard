import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface iot_TopicRuleErrorActionTimestreamDimension {
  // The metadata dimension name. This is the name of the column in the Amazon Timestream database table record.
  name?: string;

  // The value to write in this column of the database record.
  value?: string;
}

export function iot_TopicRuleErrorActionTimestreamDimension_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "The metadata dimension name. This is the name of the column in the Amazon Timestream database table record.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "value",
      "The value to write in this column of the database record.",
      () => [],
      true,
      false,
    ),
  ];
}
