import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface batch_JobDefinitionEksPropertiesPodPropertiesContainersEnv {
  // Name of the job definition.
  name?: string;

  // Value of the environment variable.
  value?: string;
}

export function batch_JobDefinitionEksPropertiesPodPropertiesContainersEnv_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'name',
      'Name of the job definition.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'value',
      'Value of the environment variable.',
      () => [],
      true,
      false,
    ),
  ];
}
