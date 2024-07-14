import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  ec2_FleetLaunchTemplateConfigOverride,
  ec2_FleetLaunchTemplateConfigOverride_GetTypes,
} from "./ec2_FleetLaunchTemplateConfigOverride";
import {
  ec2_FleetLaunchTemplateConfigLaunchTemplateSpecification,
  ec2_FleetLaunchTemplateConfigLaunchTemplateSpecification_GetTypes,
} from "./ec2_FleetLaunchTemplateConfigLaunchTemplateSpecification";

export interface ec2_FleetLaunchTemplateConfig {
  // Nested argument containing EC2 Launch Template to use. Defined below.
  launchTemplateSpecification?: ec2_FleetLaunchTemplateConfigLaunchTemplateSpecification;

  // Nested argument(s) containing parameters to override the same parameters in the Launch Template. Defined below.
  overrides?: Array<ec2_FleetLaunchTemplateConfigOverride>;
}

export function ec2_FleetLaunchTemplateConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "launchTemplateSpecification",
      "Nested argument containing EC2 Launch Template to use. Defined below.",
      ec2_FleetLaunchTemplateConfigLaunchTemplateSpecification_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "overrides",
      "Nested argument(s) containing parameters to override the same parameters in the Launch Template. Defined below.",
      ec2_FleetLaunchTemplateConfigOverride_GetTypes(),
      false,
      false,
    ),
  ];
}
