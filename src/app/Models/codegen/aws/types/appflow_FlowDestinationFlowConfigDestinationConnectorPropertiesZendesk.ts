import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesZendeskErrorHandlingConfig,
  appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesZendeskErrorHandlingConfig_GetTypes,
} from './appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesZendeskErrorHandlingConfig';

export interface appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesZendesk {
  //
  errorHandlingConfig?: appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesZendeskErrorHandlingConfig;

  //
  idFieldNames?: Array<string>;

  //
  object?: string;

  //
  writeOperationType?: string;
}

export function appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesZendesk_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'idFieldNames',
      '',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(InputType.String, 'object', '', () => [], true, false),
    new DynamicUIProps(
      InputType.String,
      'writeOperationType',
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
        appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesZendeskErrorHandlingConfig_GetTypes(),
      false,
      false,
    ),
  ];
}
