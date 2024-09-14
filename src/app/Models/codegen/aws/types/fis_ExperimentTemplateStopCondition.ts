import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface fis_ExperimentTemplateStopCondition {
  // Source of the condition. One of `none`, `aws:cloudwatch:alarm`.
  source?: string;

  // ARN of the CloudWatch alarm. Required if the source is a CloudWatch alarm.
  value?: string;
}

export function fis_ExperimentTemplateStopCondition_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "source",
      "Source of the condition. One of `none`, `aws:cloudwatch:alarm`.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "value",
      "ARN of the CloudWatch alarm. Required if the source is a CloudWatch alarm.",
      () => [],
      false,
      false,
    ),
  ];
}
