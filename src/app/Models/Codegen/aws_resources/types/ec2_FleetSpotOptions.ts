import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  ec2_FleetSpotOptionsMaintenanceStrategies,
  ec2_FleetSpotOptionsMaintenanceStrategies_GetTypes,
} from "./ec2_FleetSpotOptionsMaintenanceStrategies";

export interface ec2_FleetSpotOptions {
  // How to allocate the target capacity across the Spot pools. Valid values: `diversified`, `lowestPrice`, `capacity-optimized`, `capacity-optimized-prioritized` and `price-capacity-optimized`. Default: `lowestPrice`.
  allocationStrategy?: string;

  // Behavior when a Spot Instance is interrupted. Valid values: `hibernate`, `stop`, `terminate`. Default: `terminate`.
  instanceInterruptionBehavior?: string;

  // Number of Spot pools across which to allocate your target Spot capacity. Valid only when Spot `allocation_strategy` is set to `lowestPrice`. Default: `1`.
  instancePoolsToUseCount?: number;

  // Nested argument containing maintenance strategies for managing your Spot Instances that are at an elevated risk of being interrupted. Defined below.
  maintenanceStrategies?: ec2_FleetSpotOptionsMaintenanceStrategies;
}

export function ec2_FleetSpotOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "instanceInterruptionBehavior",
      "Behavior when a Spot Instance is interrupted. Valid values: `hibernate`, `stop`, `terminate`. Default: `terminate`.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "instancePoolsToUseCount",
      "Number of Spot pools across which to allocate your target Spot capacity. Valid only when Spot `allocation_strategy` is set to `lowestPrice`. Default: `1`.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "maintenanceStrategies",
      "Nested argument containing maintenance strategies for managing your Spot Instances that are at an elevated risk of being interrupted. Defined below.",
      ec2_FleetSpotOptionsMaintenanceStrategies_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "allocationStrategy",
      "How to allocate the target capacity across the Spot pools. Valid values: `diversified`, `lowestPrice`, `capacity-optimized`, `capacity-optimized-prioritized` and `price-capacity-optimized`. Default: `lowestPrice`.",
      [],
      false,
      true,
    ),
  ];
}
