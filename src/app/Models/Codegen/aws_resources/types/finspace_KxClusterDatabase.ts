import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  finspace_KxClusterDatabaseCacheConfiguration,
  finspace_KxClusterDatabaseCacheConfiguration_GetTypes,
} from "./finspace_KxClusterDatabaseCacheConfiguration";

export interface finspace_KxClusterDatabase {
  // Configuration details for the disk cache to increase performance reading from a KX database mounted to the cluster. See cache_configurations.
  cacheConfigurations?: Array<finspace_KxClusterDatabaseCacheConfiguration>;

  // A unique identifier of the changeset that is associated with the cluster.
  changesetId?: string;

  // Name of the KX database.
  databaseName?: string;

  // The name of the dataview to be used for caching historical data on disk. You cannot update to a different dataview name once a cluster is created. Use `lifecycle` `ignore_changes` for database to prevent any undesirable behaviors.
  dataviewName?: string;
}

export function finspace_KxClusterDatabase_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "dataviewName",
      "The name of the dataview to be used for caching historical data on disk. You cannot update to a different dataview name once a cluster is created. Use `lifecycle` `ignore_changes` for database to prevent any undesirable behaviors.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "cacheConfigurations",
      "Configuration details for the disk cache to increase performance reading from a KX database mounted to the cluster. See cache_configurations.",
      finspace_KxClusterDatabaseCacheConfiguration_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "changesetId",
      "A unique identifier of the changeset that is associated with the cluster.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "databaseName",
      "Name of the KX database.",
      [],
      true,
      true,
    ),
  ];
}
