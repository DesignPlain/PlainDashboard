import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface imagebuilder_DistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplate {
  // The ID of the launch template to use for faster launching for a Windows AMI.
  launchTemplateId?: string;

  // The name of the launch template to use for faster launching for a Windows AMI.
  launchTemplateName?: string;

  // The version of the launch template to use for faster launching for a Windows AMI.
  launchTemplateVersion?: string;
}

export function imagebuilder_DistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplate_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "launchTemplateId",
      "The ID of the launch template to use for faster launching for a Windows AMI.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "launchTemplateName",
      "The name of the launch template to use for faster launching for a Windows AMI.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "launchTemplateVersion",
      "The version of the launch template to use for faster launching for a Windows AMI.",
      [],
      false,
      false,
    ),
  ];
}
