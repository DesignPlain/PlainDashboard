import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ec2_SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance {
  // The replacement strategy to use. Only available for spot fleets with `fleet_type` set to `maintain`. Valid values: `launch`.
  replacementStrategy?: string;
}

export function ec2_SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "replacementStrategy",
      "The replacement strategy to use. Only available for spot fleets with `fleet_type` set to `maintain`. Valid values: `launch`.",
      [],
      false,
      true,
    ),
  ];
}
