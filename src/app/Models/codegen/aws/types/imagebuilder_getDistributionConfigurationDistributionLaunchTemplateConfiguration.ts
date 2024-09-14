import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface imagebuilder_getDistributionConfigurationDistributionLaunchTemplateConfiguration {
  // The account ID that this configuration applies to.
  accountId?: string;

  // Whether the specified Amazon EC2 launch template is set as the default launch template.
  default?: boolean;

  // ID of the Amazon EC2 launch template.
  launchTemplateId?: string;
}

export function imagebuilder_getDistributionConfigurationDistributionLaunchTemplateConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "accountId",
      "The account ID that this configuration applies to.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "default",
      "Whether the specified Amazon EC2 launch template is set as the default launch template.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "launchTemplateId",
      "ID of the Amazon EC2 launch template.",
      () => [],
      true,
      false,
    ),
  ];
}
