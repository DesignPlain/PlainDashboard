import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface ecr_ReplicationConfigurationReplicationConfigurationRuleRepositoryFilter {
  // The repository filter details.
  filter?: string;

  // The repository filter type. The only supported value is `PREFIX_MATCH`, which is a repository name prefix specified with the filter parameter.
  filterType?: string;
}

export function ecr_ReplicationConfigurationReplicationConfigurationRuleRepositoryFilter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "filter",
      "The repository filter details.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "filterType",
      "The repository filter type. The only supported value is `PREFIX_MATCH`, which is a repository name prefix specified with the filter parameter.",
      () => [],
      true,
      false,
    ),
  ];
}
