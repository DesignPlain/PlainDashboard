import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesHoneycodeErrorHandlingConfig,
  appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesHoneycodeErrorHandlingConfig_GetTypes,
} from './appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesHoneycodeErrorHandlingConfig';

export interface appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesHoneycode {
  //
  errorHandlingConfig?: appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesHoneycodeErrorHandlingConfig;

  //
  object?: string;
}

export function appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesHoneycode_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'errorHandlingConfig',
      '',
      () =>
        appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesHoneycodeErrorHandlingConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(InputType.String, 'object', '', () => [], true, false),
  ];
}
