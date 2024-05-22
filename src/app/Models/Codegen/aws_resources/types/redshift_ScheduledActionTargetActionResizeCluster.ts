import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface redshift_ScheduledActionTargetActionResizeCluster {
  // The new node type for the nodes you are adding.
  nodeType?: string;

  // The new number of nodes for the cluster.
  numberOfNodes?: number;

  // A boolean value indicating whether the resize operation is using the classic resize process. Default: `false`.
  classic?: boolean;

  // The unique identifier for the cluster to resize.
  clusterIdentifier?: string;

  // The new cluster type for the specified cluster.
  clusterType?: string;
}

export function redshift_ScheduledActionTargetActionResizeCluster_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "clusterIdentifier",
      "The unique identifier for the cluster to resize.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "clusterType",
      "The new cluster type for the specified cluster.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "nodeType",
      "The new node type for the nodes you are adding.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "numberOfNodes",
      "The new number of nodes for the cluster.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "classic",
      "A boolean value indicating whether the resize operation is using the classic resize process. Default: `false`.",
      [],
      false,
      false,
    ),
  ];
}
