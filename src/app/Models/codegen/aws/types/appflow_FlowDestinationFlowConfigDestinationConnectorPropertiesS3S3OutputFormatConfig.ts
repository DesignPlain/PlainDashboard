import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigAggregationConfig,
  appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigAggregationConfig_GetTypes,
} from './appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigAggregationConfig';
import {
  appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigPrefixConfig,
  appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigPrefixConfig_GetTypes,
} from './appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigPrefixConfig';

export interface appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfig {
  // Whether the data types from the source system need to be preserved (Only valid for `Parquet` file type)
  preserveSourceDataTyping?: boolean;

  // Aggregation settings that you can use to customize the output format of your flow data. See Aggregation Config for more details.
  aggregationConfig?: appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigAggregationConfig;

  // File type that Amazon AppFlow places in the Amazon S3 bucket. Valid values are `CSV`, `JSON`, and `PARQUET`.
  fileType?: string;

  // Determines the prefix that Amazon AppFlow applies to the folder name in the Amazon S3 bucket. You can name folders according to the flow frequency and date. See Prefix Config for more details.
  prefixConfig?: appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigPrefixConfig;
}

export function appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'aggregationConfig',
      'Aggregation settings that you can use to customize the output format of your flow data. See Aggregation Config for more details.',
      () =>
        appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigAggregationConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'fileType',
      'File type that Amazon AppFlow places in the Amazon S3 bucket. Valid values are `CSV`, `JSON`, and `PARQUET`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'prefixConfig',
      'Determines the prefix that Amazon AppFlow applies to the folder name in the Amazon S3 bucket. You can name folders according to the flow frequency and date. See Prefix Config for more details.',
      () =>
        appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigPrefixConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'preserveSourceDataTyping',
      'Whether the data types from the source system need to be preserved (Only valid for `Parquet` file type)',
      () => [],
      false,
      false,
    ),
  ];
}
