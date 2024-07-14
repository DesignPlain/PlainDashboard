import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  ec2_FleetSpotOptionsMaintenanceStrategiesCapacityRebalance,
  ec2_FleetSpotOptionsMaintenanceStrategiesCapacityRebalance_GetTypes,
} from "./ec2_FleetSpotOptionsMaintenanceStrategiesCapacityRebalance";

export interface ec2_FleetSpotOptionsMaintenanceStrategies {
  // Nested argument containing the capacity rebalance for your fleet request. Defined below.
  capacityRebalance?: ec2_FleetSpotOptionsMaintenanceStrategiesCapacityRebalance;
}

export function ec2_FleetSpotOptionsMaintenanceStrategies_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "capacityRebalance",
      "Nested argument containing the capacity rebalance for your fleet request. Defined below.",
      ec2_FleetSpotOptionsMaintenanceStrategiesCapacityRebalance_GetTypes(),
      false,
      false,
    ),
  ];
}
