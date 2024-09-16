import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface imagebuilder_getDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission {
  // Set of AWS Organization ARNs.
  organizationArns?: Array<string>;

  // Set of AWS Organizational Unit ARNs.
  organizationalUnitArns?: Array<string>;

  // Set of EC2 launch permission user groups.
  userGroups?: Array<string>;

  // Set of AWS Account identifiers.
  userIds?: Array<string>;
}

export function imagebuilder_getDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'organizationArns',
      'Set of AWS Organization ARNs.',
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'organizationalUnitArns',
      'Set of AWS Organizational Unit ARNs.',
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'userGroups',
      'Set of EC2 launch permission user groups.',
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'userIds',
      'Set of AWS Account identifiers.',
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
