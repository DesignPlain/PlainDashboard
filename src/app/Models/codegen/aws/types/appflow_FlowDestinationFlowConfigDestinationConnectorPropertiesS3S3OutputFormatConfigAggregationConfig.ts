import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigAggregationConfig {
  // Whether Amazon AppFlow aggregates the flow records into a single file, or leave them unaggregated. Valid values are `None` and `SingleFile`.
  aggregationType?: string;

  // The desired file size, in MB, for each output file that Amazon AppFlow writes to the flow destination. Integer value.
  targetFileSize?: number;
}

export function appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigAggregationConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'targetFileSize',
      'The desired file size, in MB, for each output file that Amazon AppFlow writes to the flow destination. Integer value.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'aggregationType',
      'Whether Amazon AppFlow aggregates the flow records into a single file, or leave them unaggregated. Valid values are `None` and `SingleFile`.',
      () => [],
      false,
      false,
    ),
  ];
}
