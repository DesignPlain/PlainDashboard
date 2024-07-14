import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface emr_ClusterPlacementGroupConfig {
  // Role of the instance in the cluster. Valid Values: `MASTER`, `CORE`, `TASK`.
  instanceRole?: string;

  // EC2 Placement Group strategy associated with instance role. Valid Values: `SPREAD`, `PARTITION`, `CLUSTER`, `NONE`.
  placementStrategy?: string;
}

export function emr_ClusterPlacementGroupConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "instanceRole",
      "Role of the instance in the cluster. Valid Values: `MASTER`, `CORE`, `TASK`.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "placementStrategy",
      "EC2 Placement Group strategy associated with instance role. Valid Values: `SPREAD`, `PARTITION`, `CLUSTER`, `NONE`.",
      [],
      false,
      true,
    ),
  ];
}
