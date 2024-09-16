import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  ec2_SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification,
  ec2_SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification_GetTypes,
} from './ec2_SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification';
import {
  ec2_SpotFleetRequestLaunchTemplateConfigOverride,
  ec2_SpotFleetRequestLaunchTemplateConfigOverride_GetTypes,
} from './ec2_SpotFleetRequestLaunchTemplateConfigOverride';

export interface ec2_SpotFleetRequestLaunchTemplateConfig {
  // Launch template specification. See Launch Template Specification below for more details.
  launchTemplateSpecification?: ec2_SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification;

  // One or more override configurations. See Overrides below for more details.
  overrides?: Array<ec2_SpotFleetRequestLaunchTemplateConfigOverride>;
}

export function ec2_SpotFleetRequestLaunchTemplateConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'launchTemplateSpecification',
      'Launch template specification. See Launch Template Specification below for more details.',
      () =>
        ec2_SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'overrides',
      'One or more override configurations. See Overrides below for more details.',
      () => ec2_SpotFleetRequestLaunchTemplateConfigOverride_GetTypes(),
      false,
      true,
    ),
  ];
}
