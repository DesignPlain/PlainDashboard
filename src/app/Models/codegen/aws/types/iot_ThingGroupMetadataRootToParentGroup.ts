import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface iot_ThingGroupMetadataRootToParentGroup {
  //
  groupArn?: string;

  //
  groupName?: string;
}

export function iot_ThingGroupMetadataRootToParentGroup_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'groupArn',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'groupName',
      '',
      () => [],
      false,
      false,
    ),
  ];
}
