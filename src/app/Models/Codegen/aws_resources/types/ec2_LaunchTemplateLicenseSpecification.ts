import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface ec2_LaunchTemplateLicenseSpecification {
  // ARN of the license configuration.
  licenseConfigurationArn?: string;
}

export function ec2_LaunchTemplateLicenseSpecification_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "licenseConfigurationArn",
      "ARN of the license configuration.",
      [],
      true,
      false,
    ),
  ];
}
