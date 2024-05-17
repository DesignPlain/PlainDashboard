import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Alloydb_ClusterMigrationSource {
  // Type of migration source.
  SourceType?: string;

  // The host and port of the on-premises instance in host:port format
  HostPort?: string;

  // Place holder for the external source identifier(e.g DMS job name) that created the cluster.
  ReferenceId?: string;
}

export function Alloydb_ClusterMigrationSource_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "SourceType",
      "Type of migration source.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "HostPort",
      "The host and port of the on-premises instance in host:port format",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ReferenceId",
      "Place holder for the external source identifier(e.g DMS job name) that created the cluster.",
      [],
      false,
      false,
    ),
  ];
}
