import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  ecr_ReplicationConfigurationReplicationConfiguration,
  ecr_ReplicationConfigurationReplicationConfiguration_GetTypes,
} from "../types/ecr_ReplicationConfigurationReplicationConfiguration";

export interface ReplicationConfigurationArgs {
  // Replication configuration for a registry. See Replication Configuration.
  replicationConfiguration?: ecr_ReplicationConfigurationReplicationConfiguration;
}
export class ReplicationConfiguration extends DS_Resource {
  // The registry ID where the replication configuration was created.
  public registryId?: string;

  // Replication configuration for a registry. See Replication Configuration.
  public replicationConfiguration?: ecr_ReplicationConfigurationReplicationConfiguration;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "replicationConfiguration",
        "Replication configuration for a registry. See Replication Configuration.",
        () => ecr_ReplicationConfigurationReplicationConfiguration_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
