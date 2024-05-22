import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface imagebuilder_DistributionConfigurationDistributionLaunchTemplateConfiguration {
  // The account ID that this configuration applies to.
  accountId?: string;

  // Indicates whether to set the specified Amazon EC2 launch template as the default launch template. Defaults to `true`.
  default?: boolean;

  // The ID of the Amazon EC2 launch template to use.
  launchTemplateId?: string;
}

export function imagebuilder_DistributionConfigurationDistributionLaunchTemplateConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "accountId",
      "The account ID that this configuration applies to.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "default",
      "Indicates whether to set the specified Amazon EC2 launch template as the default launch template. Defaults to `true`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "launchTemplateId",
      "The ID of the Amazon EC2 launch template to use.",
      [],
      true,
      false,
    ),
  ];
}
