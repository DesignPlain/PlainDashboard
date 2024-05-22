import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  s3_BucketReplicationConfigurationRuleDestination,
  s3_BucketReplicationConfigurationRuleDestination_GetTypes,
} from "./s3_BucketReplicationConfigurationRuleDestination";
import {
  s3_BucketReplicationConfigurationRuleFilter,
  s3_BucketReplicationConfigurationRuleFilter_GetTypes,
} from "./s3_BucketReplicationConfigurationRuleFilter";
import {
  s3_BucketReplicationConfigurationRuleSourceSelectionCriteria,
  s3_BucketReplicationConfigurationRuleSourceSelectionCriteria_GetTypes,
} from "./s3_BucketReplicationConfigurationRuleSourceSelectionCriteria";

export interface s3_BucketReplicationConfigurationRule {
  // Whether delete markers are replicated. The only valid value is `Enabled`. To disable, omit this argument. This argument is only valid with V2 replication configurations (i.e., when `filter` is used).
  deleteMarkerReplicationStatus?: string;

  // Specifies the destination for the rule (documented below).
  destination?: s3_BucketReplicationConfigurationRuleDestination;

  // Filter that identifies subset of objects to which the replication rule applies (documented below).
  filter?: s3_BucketReplicationConfigurationRuleFilter;

  // Unique identifier for the rule. Must be less than or equal to 255 characters in length.
  id?: string;

  // Object keyname prefix identifying one or more objects to which the rule applies. Must be less than or equal to 1024 characters in length.
  prefix?: string;

  // The priority associated with the rule. Priority should only be set if `filter` is configured. If not provided, defaults to `0`. Priority must be unique between multiple rules.
  priority?: number;

  // Specifies special object selection criteria (documented below).
  sourceSelectionCriteria?: s3_BucketReplicationConfigurationRuleSourceSelectionCriteria;

  /*
The status of the rule. Either `Enabled` or `Disabled`. The rule is ignored if status is not Enabled.

> --NOTE:-- Replication to multiple destination buckets requires that `priority` is specified in the `rules` object. If the corresponding rule requires no filter, an empty configuration block `filter {}` must be specified.
*/
  status?: string;
}

export function s3_BucketReplicationConfigurationRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "destination",
      "Specifies the destination for the rule (documented below).",
      s3_BucketReplicationConfigurationRuleDestination_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "filter",
      "Filter that identifies subset of objects to which the replication rule applies (documented below).",
      s3_BucketReplicationConfigurationRuleFilter_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "id",
      "Unique identifier for the rule. Must be less than or equal to 255 characters in length.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "prefix",
      "Object keyname prefix identifying one or more objects to which the rule applies. Must be less than or equal to 1024 characters in length.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "priority",
      "The priority associated with the rule. Priority should only be set if `filter` is configured. If not provided, defaults to `0`. Priority must be unique between multiple rules.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "sourceSelectionCriteria",
      "Specifies special object selection criteria (documented below).",
      s3_BucketReplicationConfigurationRuleSourceSelectionCriteria_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "status",
      "The status of the rule. Either `Enabled` or `Disabled`. The rule is ignored if status is not Enabled.\n\n> **NOTE:** Replication to multiple destination buckets requires that `priority` is specified in the `rules` object. If the corresponding rule requires no filter, an empty configuration block `filter {}` must be specified.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "deleteMarkerReplicationStatus",
      "Whether delete markers are replicated. The only valid value is `Enabled`. To disable, omit this argument. This argument is only valid with V2 replication configurations (i.e., when `filter` is used).",
      [],
      false,
      false,
    ),
  ];
}
