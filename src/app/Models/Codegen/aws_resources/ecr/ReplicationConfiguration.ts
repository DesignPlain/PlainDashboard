import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  ecr_ReplicationConfigurationReplicationConfiguration,
  ecr_ReplicationConfigurationReplicationConfiguration_GetTypes,
} from "../types/ecr_ReplicationConfigurationReplicationConfiguration";

export interface ReplicationConfigurationArgs {
  // Replication configuration for a registry. See Replication Configuration.
  replicationConfiguration?: ecr_ReplicationConfigurationReplicationConfiguration;
}
export class ReplicationConfiguration extends Resource {
  // Replication configuration for a registry. See Replication Configuration.
  public replicationConfiguration?: ecr_ReplicationConfigurationReplicationConfiguration;

  // The account ID of the destination registry to replicate to.
  public registryId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "replicationConfiguration",
        "Replication configuration for a registry. See Replication Configuration.",
        ecr_ReplicationConfigurationReplicationConfiguration_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
