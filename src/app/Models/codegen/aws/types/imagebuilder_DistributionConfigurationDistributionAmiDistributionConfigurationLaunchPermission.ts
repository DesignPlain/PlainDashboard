import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface imagebuilder_DistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission {
  // Set of AWS Organization ARNs to assign.
  organizationArns?: Array<string>;

  // Set of AWS Organizational Unit ARNs to assign.
  organizationalUnitArns?: Array<string>;

  // Set of EC2 launch permission user groups to assign. Use `all` to distribute a public AMI.
  userGroups?: Array<string>;

  // Set of AWS Account identifiers to assign.
  userIds?: Array<string>;
}

export function imagebuilder_DistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'organizationArns',
      'Set of AWS Organization ARNs to assign.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'organizationalUnitArns',
      'Set of AWS Organizational Unit ARNs to assign.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'userGroups',
      'Set of EC2 launch permission user groups to assign. Use `all` to distribute a public AMI.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'userIds',
      'Set of AWS Account identifiers to assign.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
