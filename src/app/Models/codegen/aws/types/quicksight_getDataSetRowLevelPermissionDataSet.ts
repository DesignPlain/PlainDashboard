import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface quicksight_getDataSetRowLevelPermissionDataSet {
  //
  status?: string;

  //
  arn?: string;

  //
  formatVersion?: string;

  //
  namespace?: string;

  //
  permissionPolicy?: string;
}

export function quicksight_getDataSetRowLevelPermissionDataSet_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'permissionPolicy',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, 'status', '', () => [], true, false),
    new DynamicUIProps(InputType.String, 'arn', '', () => [], true, false),
    new DynamicUIProps(
      InputType.String,
      'formatVersion',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'namespace',
      '',
      () => [],
      true,
      false,
    ),
  ];
}
