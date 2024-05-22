import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  ec2_FleetLaunchTemplateConfigOverrideInstanceRequirements,
  ec2_FleetLaunchTemplateConfigOverrideInstanceRequirements_GetTypes,
} from "./ec2_FleetLaunchTemplateConfigOverrideInstanceRequirements";

export interface ec2_FleetLaunchTemplateConfigOverride {
  // Instance type.
  instanceType?: string;

  // Maximum price per unit hour that you are willing to pay for a Spot Instance.
  maxPrice?: string;

  // Priority for the launch template override. If `on_demand_options` `allocation_strategy` is set to `prioritized`, EC2 Fleet uses priority to determine which launch template override to use first in fulfilling On-Demand capacity. The highest priority is launched first. The lower the number, the higher the priority. If no number is set, the launch template override has the lowest priority. Valid values are whole numbers starting at 0.
  priority?: number;

  // ID of the subnet in which to launch the instances.
  subnetId?: string;

  // Number of units provided by the specified instance type.
  weightedCapacity?: number;

  // Availability Zone in which to launch the instances.
  availabilityZone?: string;

  // Override the instance type in the Launch Template with instance types that satisfy the requirements.
  instanceRequirements?: ec2_FleetLaunchTemplateConfigOverrideInstanceRequirements;
}

export function ec2_FleetLaunchTemplateConfigOverride_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "instanceType",
      "Instance type.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "maxPrice",
      "Maximum price per unit hour that you are willing to pay for a Spot Instance.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "priority",
      "Priority for the launch template override. If `on_demand_options` `allocation_strategy` is set to `prioritized`, EC2 Fleet uses priority to determine which launch template override to use first in fulfilling On-Demand capacity. The highest priority is launched first. The lower the number, the higher the priority. If no number is set, the launch template override has the lowest priority. Valid values are whole numbers starting at 0.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "subnetId",
      "ID of the subnet in which to launch the instances.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "weightedCapacity",
      "Number of units provided by the specified instance type.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "availabilityZone",
      "Availability Zone in which to launch the instances.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "instanceRequirements",
      "Override the instance type in the Launch Template with instance types that satisfy the requirements.",
      ec2_FleetLaunchTemplateConfigOverrideInstanceRequirements_GetTypes(),
      false,
      false,
    ),
  ];
}
