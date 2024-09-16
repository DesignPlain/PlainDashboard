import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface appflow_FlowSourceFlowConfigSourceConnectorPropertiesCustomConnector {
  //
  customProperties?: Map<string, string>;

  //
  entityName?: string;
}

export function appflow_FlowSourceFlowConfigSourceConnectorPropertiesCustomConnector_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Map,
      'customProperties',
      '',
      () => InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'entityName',
      '',
      () => [],
      true,
      false,
    ),
  ];
}
