import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface deploymentmanager_DeploymentLabel {
  // Key for label.
  key?: string;

  // Value of label.
  value?: string;
}

export function deploymentmanager_DeploymentLabel_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'key',
      'Key for label.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'value',
      'Value of label.',
      () => [],
      false,
      false,
    ),
  ];
}
