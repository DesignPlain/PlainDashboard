import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface rds_ClusterServerlessv2ScalingConfiguration {
  // Maximum capacity for an Aurora DB cluster in `serverless` DB engine mode. The maximum capacity must be greater than or equal to the minimum capacity. Valid Aurora MySQL capacity values are `1`, `2`, `4`, `8`, `16`, `32`, `64`, `128`, `256`. Valid Aurora PostgreSQL capacity values are (`2`, `4`, `8`, `16`, `32`, `64`, `192`, and `384`). Defaults to `16`.
  maxCapacity?: number;

  // Minimum capacity for an Aurora DB cluster in `serverless` DB engine mode. The minimum capacity must be lesser than or equal to the maximum capacity. Valid Aurora MySQL capacity values are `1`, `2`, `4`, `8`, `16`, `32`, `64`, `128`, `256`. Valid Aurora PostgreSQL capacity values are (`2`, `4`, `8`, `16`, `32`, `64`, `192`, and `384`). Defaults to `1`.
  minCapacity?: number;
}

export function rds_ClusterServerlessv2ScalingConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "maxCapacity",
      "Maximum capacity for an Aurora DB cluster in `serverless` DB engine mode. The maximum capacity must be greater than or equal to the minimum capacity. Valid Aurora MySQL capacity values are `1`, `2`, `4`, `8`, `16`, `32`, `64`, `128`, `256`. Valid Aurora PostgreSQL capacity values are (`2`, `4`, `8`, `16`, `32`, `64`, `192`, and `384`). Defaults to `16`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "minCapacity",
      "Minimum capacity for an Aurora DB cluster in `serverless` DB engine mode. The minimum capacity must be lesser than or equal to the maximum capacity. Valid Aurora MySQL capacity values are `1`, `2`, `4`, `8`, `16`, `32`, `64`, `128`, `256`. Valid Aurora PostgreSQL capacity values are (`2`, `4`, `8`, `16`, `32`, `64`, `192`, and `384`). Defaults to `1`.",
      [],
      true,
      false,
    ),
  ];
}
