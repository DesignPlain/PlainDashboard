import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface fis_ExperimentTemplateStopCondition {
  // ARN of the CloudWatch alarm. Required if the source is a CloudWatch alarm.
  value?: string;

  // Source of the condition. One of `none`, `aws:cloudwatch:alarm`.
  source?: string;
}

export function fis_ExperimentTemplateStopCondition_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "value",
      "ARN of the CloudWatch alarm. Required if the source is a CloudWatch alarm.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "source",
      "Source of the condition. One of `none`, `aws:cloudwatch:alarm`.",
      [],
      true,
      false,
    ),
  ];
}
