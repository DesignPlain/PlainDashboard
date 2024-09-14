import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  rbin_RuleResourceTag,
  rbin_RuleResourceTag_GetTypes,
} from "../types/rbin_RuleResourceTag";
import {
  rbin_RuleRetentionPeriod,
  rbin_RuleRetentionPeriod_GetTypes,
} from "../types/rbin_RuleRetentionPeriod";
import {
  rbin_RuleLockConfiguration,
  rbin_RuleLockConfiguration_GetTypes,
} from "../types/rbin_RuleLockConfiguration";

export interface RuleArgs {
  // Specifies the resource tags to use to identify resources that are to be retained by a tag-level retention rule. See `resource_tags` below.
  resourceTags?: Array<rbin_RuleResourceTag>;

  // The resource type to be retained by the retention rule. Valid values are `EBS_SNAPSHOT` and `EC2_IMAGE`.
  resourceType?: string;

  /*
Information about the retention period for which the retention rule is to retain resources. See `retention_period` below.

The following arguments are optional:
*/
  retentionPeriod?: rbin_RuleRetentionPeriod;

  //
  tags?: Map<string, string>;

  // The retention rule description.
  description?: string;

  // Information about the retention rule lock configuration. See `lock_configuration` below.
  lockConfiguration?: rbin_RuleLockConfiguration;
}
export class Rule extends DS_Resource {
  // The retention rule description.
  public description?: string;

  // Specifies the resource tags to use to identify resources that are to be retained by a tag-level retention rule. See `resource_tags` below.
  public resourceTags?: Array<rbin_RuleResourceTag>;

  //
  public tags?: Map<string, string>;

  //
  public tagsAll?: Map<string, string>;

  //
  public arn?: string;

  // Information about the retention rule lock configuration. See `lock_configuration` below.
  public lockConfiguration?: rbin_RuleLockConfiguration;

  // (Timestamp) The date and time at which the unlock delay is set to expire. Only returned for retention rules that have been unlocked and that are still within the unlock delay period.
  public lockEndTime?: string;

  // (Optional) The lock state of the retention rules to list. Only retention rules with the specified lock state are returned. Valid values are `locked`, `pending_unlock`, `unlocked`.
  public lockState?: string;

  // The resource type to be retained by the retention rule. Valid values are `EBS_SNAPSHOT` and `EC2_IMAGE`.
  public resourceType?: string;

  /*
Information about the retention period for which the retention rule is to retain resources. See `retention_period` below.

The following arguments are optional:
*/
  public retentionPeriod?: rbin_RuleRetentionPeriod;

  // (String) The state of the retention rule. Only retention rules that are in the `available` state retain resources. Valid values include `pending` and `available`.
  public status?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "The retention rule description.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "lockConfiguration",
        "Information about the retention rule lock configuration. See `lock_configuration` below.",
        () => rbin_RuleLockConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "resourceTags",
        "Specifies the resource tags to use to identify resources that are to be retained by a tag-level retention rule. See `resource_tags` below.",
        () => rbin_RuleResourceTag_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "resourceType",
        "The resource type to be retained by the retention rule. Valid values are `EBS_SNAPSHOT` and `EC2_IMAGE`.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "retentionPeriod",
        "Information about the retention period for which the retention rule is to retain resources. See `retention_period` below.\n\nThe following arguments are optional:",
        () => rbin_RuleRetentionPeriod_GetTypes(),
        true,
        false,
      ),
    ];
  }
}
