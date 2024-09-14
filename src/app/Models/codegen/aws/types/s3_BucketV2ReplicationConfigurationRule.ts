import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  s3_BucketV2ReplicationConfigurationRuleSourceSelectionCriteria,
  s3_BucketV2ReplicationConfigurationRuleSourceSelectionCriteria_GetTypes,
} from "./s3_BucketV2ReplicationConfigurationRuleSourceSelectionCriteria";
import {
  s3_BucketV2ReplicationConfigurationRuleDestination,
  s3_BucketV2ReplicationConfigurationRuleDestination_GetTypes,
} from "./s3_BucketV2ReplicationConfigurationRuleDestination";
import {
  s3_BucketV2ReplicationConfigurationRuleFilter,
  s3_BucketV2ReplicationConfigurationRuleFilter_GetTypes,
} from "./s3_BucketV2ReplicationConfigurationRuleFilter";

export interface s3_BucketV2ReplicationConfigurationRule {
  // Object keyname prefix identifying one or more objects to which the rule applies. Must be less than or equal to 1024 characters in length.
  prefix?: string;

  // Priority associated with the rule. Priority should only be set if `filter` is configured. If not provided, defaults to `0`. Priority must be unique between multiple rules.
  priority?: number;

  // Specifies special object selection criteria (documented below).
  sourceSelectionCriterias?: Array<s3_BucketV2ReplicationConfigurationRuleSourceSelectionCriteria>;

  // Status of the rule. Either `Enabled` or `Disabled`. The rule is ignored if status is not Enabled.
  status?: string;

  // Whether delete markers are replicated. The only valid value is `Enabled`. To disable, omit this argument. This argument is only valid with V2 replication configurations (i.e., when `filter` is used).
  deleteMarkerReplicationStatus?: string;

  // Specifies the destination for the rule (documented below).
  destinations?: Array<s3_BucketV2ReplicationConfigurationRuleDestination>;

  // Filter that identifies subset of objects to which the replication rule applies (documented below).
  filters?: Array<s3_BucketV2ReplicationConfigurationRuleFilter>;

  // Unique identifier for the rule. Must be less than or equal to 255 characters in length.
  id?: string;
}

export function s3_BucketV2ReplicationConfigurationRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "filters",
      "Filter that identifies subset of objects to which the replication rule applies (documented below).",
      () => s3_BucketV2ReplicationConfigurationRuleFilter_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "id",
      "Unique identifier for the rule. Must be less than or equal to 255 characters in length.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "prefix",
      "Object keyname prefix identifying one or more objects to which the rule applies. Must be less than or equal to 1024 characters in length.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "priority",
      "Priority associated with the rule. Priority should only be set if `filter` is configured. If not provided, defaults to `0`. Priority must be unique between multiple rules.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "sourceSelectionCriterias",
      "Specifies special object selection criteria (documented below).",
      () =>
        s3_BucketV2ReplicationConfigurationRuleSourceSelectionCriteria_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "status",
      "Status of the rule. Either `Enabled` or `Disabled`. The rule is ignored if status is not Enabled.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "deleteMarkerReplicationStatus",
      "Whether delete markers are replicated. The only valid value is `Enabled`. To disable, omit this argument. This argument is only valid with V2 replication configurations (i.e., when `filter` is used).",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "destinations",
      "Specifies the destination for the rule (documented below).",
      () => s3_BucketV2ReplicationConfigurationRuleDestination_GetTypes(),
      true,
      false,
    ),
  ];
}
