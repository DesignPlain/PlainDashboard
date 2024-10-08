import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationInputLambdaProcessor,
  kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationInputLambdaProcessor_GetTypes,
} from './kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationInputLambdaProcessor';

export interface kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfiguration {
  // Describes the Lambda function that is used to preprocess the records in the stream before being processed by your application code.
  inputLambdaProcessor?: kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationInputLambdaProcessor;
}

export function kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'inputLambdaProcessor',
      'Describes the Lambda function that is used to preprocess the records in the stream before being processed by your application code.',
      () =>
        kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationInputLambdaProcessor_GetTypes(),
      true,
      false,
    ),
  ];
}
