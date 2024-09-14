import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  ecr_ReplicationConfigurationReplicationConfigurationRuleDestination,
  ecr_ReplicationConfigurationReplicationConfigurationRuleDestination_GetTypes,
} from "./ecr_ReplicationConfigurationReplicationConfigurationRuleDestination";
import {
  ecr_ReplicationConfigurationReplicationConfigurationRuleRepositoryFilter,
  ecr_ReplicationConfigurationReplicationConfigurationRuleRepositoryFilter_GetTypes,
} from "./ecr_ReplicationConfigurationReplicationConfigurationRuleRepositoryFilter";

export interface ecr_ReplicationConfigurationReplicationConfigurationRule {
  // the details of a replication destination. A maximum of 25 are allowed per `rule`. See Destination.
  destinations?: Array<ecr_ReplicationConfigurationReplicationConfigurationRuleDestination>;

  // filters for a replication rule. See Repository Filter.
  repositoryFilters?: Array<ecr_ReplicationConfigurationReplicationConfigurationRuleRepositoryFilter>;
}

export function ecr_ReplicationConfigurationReplicationConfigurationRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "destinations",
      "the details of a replication destination. A maximum of 25 are allowed per `rule`. See Destination.",
      () =>
        ecr_ReplicationConfigurationReplicationConfigurationRuleDestination_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "repositoryFilters",
      "filters for a replication rule. See Repository Filter.",
      () =>
        ecr_ReplicationConfigurationReplicationConfigurationRuleRepositoryFilter_GetTypes(),
      false,
      false,
    ),
  ];
}
