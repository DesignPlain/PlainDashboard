import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface rds_GlobalClusterGlobalClusterMember {
  // Amazon Resource Name (ARN) of member DB Cluster
  dbClusterArn?: string;

  // Whether the member is the primary DB Cluster
  isWriter?: boolean;
}

export function rds_GlobalClusterGlobalClusterMember_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "dbClusterArn",
      "Amazon Resource Name (ARN) of member DB Cluster",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "isWriter",
      "Whether the member is the primary DB Cluster",
      () => [],
      false,
      false,
    ),
  ];
}
