import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  quicksight_DataSetRowLevelPermissionTagConfigurationTagRule,
  quicksight_DataSetRowLevelPermissionTagConfigurationTagRule_GetTypes,
} from './quicksight_DataSetRowLevelPermissionTagConfigurationTagRule';

export interface quicksight_DataSetRowLevelPermissionTagConfiguration {
  // The status of row-level security tags. If enabled, the status is `ENABLED`. If disabled, the status is `DISABLED`.
  status?: string;

  // A set of rules associated with row-level security, such as the tag names and columns that they are assigned to. See tag_rules.
  tagRules?: Array<quicksight_DataSetRowLevelPermissionTagConfigurationTagRule>;
}

export function quicksight_DataSetRowLevelPermissionTagConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'status',
      'The status of row-level security tags. If enabled, the status is `ENABLED`. If disabled, the status is `DISABLED`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'tagRules',
      'A set of rules associated with row-level security, such as the tag names and columns that they are assigned to. See tag_rules.',
      () =>
        quicksight_DataSetRowLevelPermissionTagConfigurationTagRule_GetTypes(),
      true,
      false,
    ),
  ];
}
