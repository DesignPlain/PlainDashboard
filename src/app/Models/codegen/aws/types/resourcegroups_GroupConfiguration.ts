import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  resourcegroups_GroupConfigurationParameter,
  resourcegroups_GroupConfigurationParameter_GetTypes,
} from './resourcegroups_GroupConfigurationParameter';

export interface resourcegroups_GroupConfiguration {
  // A collection of parameters for this group configuration item. See below for details.
  parameters?: Array<resourcegroups_GroupConfigurationParameter>;

  // Specifies the type of group configuration item.
  type?: string;
}

export function resourcegroups_GroupConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'parameters',
      'A collection of parameters for this group configuration item. See below for details.',
      () => resourcegroups_GroupConfigurationParameter_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'type',
      'Specifies the type of group configuration item.',
      () => [],
      true,
      false,
    ),
  ];
}
