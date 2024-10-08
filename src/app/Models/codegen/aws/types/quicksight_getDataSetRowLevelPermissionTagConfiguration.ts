import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  quicksight_getDataSetRowLevelPermissionTagConfigurationTagRule,
  quicksight_getDataSetRowLevelPermissionTagConfigurationTagRule_GetTypes,
} from './quicksight_getDataSetRowLevelPermissionTagConfigurationTagRule';

export interface quicksight_getDataSetRowLevelPermissionTagConfiguration {
  //
  status?: string;

  //
  tagRules?: Array<quicksight_getDataSetRowLevelPermissionTagConfigurationTagRule>;
}

export function quicksight_getDataSetRowLevelPermissionTagConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, 'status', '', () => [], true, false),
    new DynamicUIProps(
      InputType.Array,
      'tagRules',
      '',
      () =>
        quicksight_getDataSetRowLevelPermissionTagConfigurationTagRule_GetTypes(),
      true,
      false,
    ),
  ];
}
