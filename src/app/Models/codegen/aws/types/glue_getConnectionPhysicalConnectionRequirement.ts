import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface glue_getConnectionPhysicalConnectionRequirement {
  //
  availabilityZone?: string;

  //
  securityGroupIdLists?: Array<string>;

  //
  subnetId?: string;
}

export function glue_getConnectionPhysicalConnectionRequirement_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'availabilityZone',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'securityGroupIdLists',
      '',
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, 'subnetId', '', () => [], true, false),
  ];
}
