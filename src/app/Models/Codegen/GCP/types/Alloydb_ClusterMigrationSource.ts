import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface alloydb_ClusterMigrationSource {
  // Type of migration source.
  sourceType?: string;

  // The host and port of the on-premises instance in host:port format
  hostPort?: string;

  // Place holder for the external source identifier(e.g DMS job name) that created the cluster.
  referenceId?: string;
}

export function alloydb_ClusterMigrationSource_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "referenceId",
      "Place holder for the external source identifier(e.g DMS job name) that created the cluster.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "sourceType",
      "Type of migration source.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "hostPort",
      "The host and port of the on-premises instance in host:port format",
      [],
      false,
      false,
    ),
  ];
}
