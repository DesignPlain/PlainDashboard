import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface ec2_FleetSpotOptionsMaintenanceStrategiesCapacityRebalance {
  // The replacement strategy to use. Only available for fleets of `type` set to `maintain`. Valid values: `launch`.
  replacementStrategy?: string;

  //
  terminationDelay?: number;
}

export function ec2_FleetSpotOptionsMaintenanceStrategiesCapacityRebalance_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "replacementStrategy",
      "The replacement strategy to use. Only available for fleets of `type` set to `maintain`. Valid values: `launch`.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "terminationDelay",
      "",
      () => [],
      false,
      false,
    ),
  ];
}
