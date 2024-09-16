import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface organizations_OrganizationRootPolicyType {
  // The status of the policy type as it relates to the associated root
  status?: string;

  //
  type?: string;
}

export function organizations_OrganizationRootPolicyType_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'status',
      'The status of the policy type as it relates to the associated root',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(InputType.String, 'type', '', () => [], false, false),
  ];
}
