import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface chimesdkmediapipelines_MediaInsightsPipelineConfigurationElementKinesisDataStreamSinkConfiguration {
  // SQS queue to deliver results.
  insightsTarget?: string;
}

export function chimesdkmediapipelines_MediaInsightsPipelineConfigurationElementKinesisDataStreamSinkConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "insightsTarget",
      "SQS queue to deliver results.",
      [],
      true,
      false,
    ),
  ];
}
