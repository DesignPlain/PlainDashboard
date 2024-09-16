import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface imagebuilder_getDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplate {
  // ID of the Amazon EC2 launch template.
  launchTemplateId?: string;

  // The name of the launch template to use for faster launching for a Windows AMI.
  launchTemplateName?: string;

  // The version of the launch template to use for faster launching for a Windows AMI.
  launchTemplateVersion?: string;
}

export function imagebuilder_getDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplate_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'launchTemplateName',
      'The name of the launch template to use for faster launching for a Windows AMI.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'launchTemplateVersion',
      'The version of the launch template to use for faster launching for a Windows AMI.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'launchTemplateId',
      'ID of the Amazon EC2 launch template.',
      () => [],
      true,
      false,
    ),
  ];
}
