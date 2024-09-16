import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesSnowflakeErrorHandlingConfig,
  appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesSnowflakeErrorHandlingConfig_GetTypes,
} from './appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesSnowflakeErrorHandlingConfig';

export interface appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesSnowflake {
  //
  bucketPrefix?: string;

  //
  errorHandlingConfig?: appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesSnowflakeErrorHandlingConfig;

  //
  intermediateBucketName?: string;

  //
  object?: string;
}

export function appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesSnowflake_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'bucketPrefix',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'errorHandlingConfig',
      '',
      () =>
        appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesSnowflakeErrorHandlingConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'intermediateBucketName',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, 'object', '', () => [], true, false),
  ];
}
