import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  s3_BucketReplicationConfigRuleDeleteMarkerReplication,
  s3_BucketReplicationConfigRuleDeleteMarkerReplication_GetTypes,
} from "./s3_BucketReplicationConfigRuleDeleteMarkerReplication";
import {
  s3_BucketReplicationConfigRuleDestination,
  s3_BucketReplicationConfigRuleDestination_GetTypes,
} from "./s3_BucketReplicationConfigRuleDestination";
import {
  s3_BucketReplicationConfigRuleSourceSelectionCriteria,
  s3_BucketReplicationConfigRuleSourceSelectionCriteria_GetTypes,
} from "./s3_BucketReplicationConfigRuleSourceSelectionCriteria";
import {
  s3_BucketReplicationConfigRuleExistingObjectReplication,
  s3_BucketReplicationConfigRuleExistingObjectReplication_GetTypes,
} from "./s3_BucketReplicationConfigRuleExistingObjectReplication";
import {
  s3_BucketReplicationConfigRuleFilter,
  s3_BucketReplicationConfigRuleFilter_GetTypes,
} from "./s3_BucketReplicationConfigRuleFilter";

export interface s3_BucketReplicationConfigRule {
  // Specifies special object selection criteria. See below.
  sourceSelectionCriteria?: s3_BucketReplicationConfigRuleSourceSelectionCriteria;

  // Replicate existing objects in the source bucket according to the rule configurations. See below.
  existingObjectReplication?: s3_BucketReplicationConfigRuleExistingObjectReplication;

  // Object key name prefix identifying one or more objects to which the rule applies. Must be less than or equal to 1024 characters in length. Defaults to an empty string (`""`) if `filter` is not specified.
  prefix?: string;

  // Filter that identifies subset of objects to which the replication rule applies. See below. If not specified, the `rule` will default to using `prefix`.
  filter?: s3_BucketReplicationConfigRuleFilter;

  // Unique identifier for the rule. Must be less than or equal to 255 characters in length.
  id?: string;

  // Priority associated with the rule. Priority should only be set if `filter` is configured. If not provided, defaults to `0`. Priority must be unique between multiple rules.
  priority?: number;

  // Status of the rule. Either `"Enabled"` or `"Disabled"`. The rule is ignored if status is not "Enabled".
  status?: string;

  // Whether delete markers are replicated. This argument is only valid with V2 replication configurations (i.e., when `filter` is used)documented below.
  deleteMarkerReplication?: s3_BucketReplicationConfigRuleDeleteMarkerReplication;

  // Specifies the destination for the rule. See below.
  destination?: s3_BucketReplicationConfigRuleDestination;
}

export function s3_BucketReplicationConfigRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "existingObjectReplication",
      "Replicate existing objects in the source bucket according to the rule configurations. See below.",
      s3_BucketReplicationConfigRuleExistingObjectReplication_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "filter",
      "Filter that identifies subset of objects to which the replication rule applies. See below. If not specified, the `rule` will default to using `prefix`.",
      s3_BucketReplicationConfigRuleFilter_GetTypes(),
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
      InputType.Object,
      "deleteMarkerReplication",
      "Whether delete markers are replicated. This argument is only valid with V2 replication configurations (i.e., when `filter` is used)documented below.",
      s3_BucketReplicationConfigRuleDeleteMarkerReplication_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "sourceSelectionCriteria",
      "Specifies special object selection criteria. See below.",
      s3_BucketReplicationConfigRuleSourceSelectionCriteria_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "priority",
      "Priority associated with the rule. Priority should only be set if `filter` is configured. If not provided, defaults to `0`. Priority must be unique between multiple rules.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "status",
      'Status of the rule. Either `"Enabled"` or `"Disabled"`. The rule is ignored if status is not "Enabled".',
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "destination",
      "Specifies the destination for the rule. See below.",
      s3_BucketReplicationConfigRuleDestination_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "prefix",
      'Object key name prefix identifying one or more objects to which the rule applies. Must be less than or equal to 1024 characters in length. Defaults to an empty string (`""`) if `filter` is not specified.',
      [],
      false,
      false,
    ),
  ];
}
