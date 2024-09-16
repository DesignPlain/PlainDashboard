import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface appflow_FlowSourceFlowConfigSourceConnectorPropertiesGoogleAnalytics {
  //
  object?: string;
}

export function appflow_FlowSourceFlowConfigSourceConnectorPropertiesGoogleAnalytics_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, 'object', '', () => [], true, false),
  ];
}
