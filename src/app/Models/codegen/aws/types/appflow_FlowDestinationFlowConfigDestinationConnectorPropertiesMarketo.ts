import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesMarketoErrorHandlingConfig,
  appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesMarketoErrorHandlingConfig_GetTypes,
} from './appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesMarketoErrorHandlingConfig';

export interface appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesMarketo {
  //
  errorHandlingConfig?: appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesMarketoErrorHandlingConfig;

  //
  object?: string;
}

export function appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesMarketo_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'errorHandlingConfig',
      '',
      () =>
        appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesMarketoErrorHandlingConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(InputType.String, 'object', '', () => [], true, false),
  ];
}
