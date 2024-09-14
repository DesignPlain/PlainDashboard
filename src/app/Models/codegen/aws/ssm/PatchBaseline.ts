import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  ssm_PatchBaselineGlobalFilter,
  ssm_PatchBaselineGlobalFilter_GetTypes,
} from "../types/ssm_PatchBaselineGlobalFilter";
import {
  ssm_PatchBaselineSource,
  ssm_PatchBaselineSource_GetTypes,
} from "../types/ssm_PatchBaselineSource";
import {
  ssm_PatchBaselineApprovalRule,
  ssm_PatchBaselineApprovalRule_GetTypes,
} from "../types/ssm_PatchBaselineApprovalRule";

export interface PatchBaselineArgs {
  // Description of the patch baseline.
  description?: string;

  // Set of global filters used to exclude patches from the baseline. Up to 4 global filters can be specified using Key/Value pairs. Valid Keys are `PRODUCT`, `CLASSIFICATION`, `MSRC_SEVERITY`, and `PATCH_ID`.
  globalFilters?: Array<ssm_PatchBaselineGlobalFilter>;

  /*
Name of the patch baseline.

The following arguments are optional:
*/
  name?: string;

  // Operating system the patch baseline applies to. Valid values are `ALMA_LINUX`, `AMAZON_LINUX`, `AMAZON_LINUX_2`, `AMAZON_LINUX_2022`, `AMAZON_LINUX_2023`, `CENTOS`, `DEBIAN`, `MACOS`, `ORACLE_LINUX`, `RASPBIAN`, `REDHAT_ENTERPRISE_LINUX`, `ROCKY_LINUX`, `SUSE`, `UBUNTU`, and `WINDOWS`. The default value is `WINDOWS`.
  operatingSystem?: string;

  // Action for Patch Manager to take on patches included in the `rejected_patches` list. Valid values are `ALLOW_AS_DEPENDENCY` and `BLOCK`.
  rejectedPatchesAction?: string;

  // List of explicitly approved patches for the baseline. Cannot be specified with `approval_rule`.
  approvedPatches?: Array<string>;

  // Compliance level for approved patches. This means that if an approved patch is reported as missing, this is the severity of the compliance violation. Valid values are `CRITICAL`, `HIGH`, `MEDIUM`, `LOW`, `INFORMATIONAL`, `UNSPECIFIED`. The default value is `UNSPECIFIED`.
  approvedPatchesComplianceLevel?: string;

  // List of rejected patches.
  rejectedPatches?: Array<string>;

  // Configuration block with alternate sources for patches. Applies to Linux instances only. See `source` below.
  sources?: Array<ssm_PatchBaselineSource>;

  // Map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Set of rules used to include patches in the baseline. Up to 10 approval rules can be specified. See `approval_rule` below.
  approvalRules?: Array<ssm_PatchBaselineApprovalRule>;

  // Whether the list of approved patches includes non-security updates that should be applied to the instances. Applies to Linux instances only.
  approvedPatchesEnableNonSecurity?: boolean;
}
export class PatchBaseline extends DS_Resource {
  /*
Name of the patch baseline.

The following arguments are optional:
*/
  public name?: string;

  // List of rejected patches.
  public rejectedPatches?: Array<string>;

  // Action for Patch Manager to take on patches included in the `rejected_patches` list. Valid values are `ALLOW_AS_DEPENDENCY` and `BLOCK`.
  public rejectedPatchesAction?: string;

  // Map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Compliance level for approved patches. This means that if an approved patch is reported as missing, this is the severity of the compliance violation. Valid values are `CRITICAL`, `HIGH`, `MEDIUM`, `LOW`, `INFORMATIONAL`, `UNSPECIFIED`. The default value is `UNSPECIFIED`.
  public approvedPatchesComplianceLevel?: string;

  // ARN of the baseline.
  public arn?: string;

  // Whether the list of approved patches includes non-security updates that should be applied to the instances. Applies to Linux instances only.
  public approvedPatchesEnableNonSecurity?: boolean;

  // Set of global filters used to exclude patches from the baseline. Up to 4 global filters can be specified using Key/Value pairs. Valid Keys are `PRODUCT`, `CLASSIFICATION`, `MSRC_SEVERITY`, and `PATCH_ID`.
  public globalFilters?: Array<ssm_PatchBaselineGlobalFilter>;

  // Map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Set of rules used to include patches in the baseline. Up to 10 approval rules can be specified. See `approval_rule` below.
  public approvalRules?: Array<ssm_PatchBaselineApprovalRule>;

  // Description of the patch baseline.
  public description?: string;

  // JSON definition of the baseline.
  public json?: string;

  // Operating system the patch baseline applies to. Valid values are `ALMA_LINUX`, `AMAZON_LINUX`, `AMAZON_LINUX_2`, `AMAZON_LINUX_2022`, `AMAZON_LINUX_2023`, `CENTOS`, `DEBIAN`, `MACOS`, `ORACLE_LINUX`, `RASPBIAN`, `REDHAT_ENTERPRISE_LINUX`, `ROCKY_LINUX`, `SUSE`, `UBUNTU`, and `WINDOWS`. The default value is `WINDOWS`.
  public operatingSystem?: string;

  // Configuration block with alternate sources for patches. Applies to Linux instances only. See `source` below.
  public sources?: Array<ssm_PatchBaselineSource>;

  // List of explicitly approved patches for the baseline. Cannot be specified with `approval_rule`.
  public approvedPatches?: Array<string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "sources",
        "Configuration block with alternate sources for patches. Applies to Linux instances only. See `source` below.",
        () => ssm_PatchBaselineSource_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "approvalRules",
        "Set of rules used to include patches in the baseline. Up to 10 approval rules can be specified. See `approval_rule` below.",
        () => ssm_PatchBaselineApprovalRule_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "approvedPatchesEnableNonSecurity",
        "Whether the list of approved patches includes non-security updates that should be applied to the instances. Applies to Linux instances only.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "Description of the patch baseline.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "rejectedPatchesAction",
        "Action for Patch Manager to take on patches included in the `rejected_patches` list. Valid values are `ALLOW_AS_DEPENDENCY` and `BLOCK`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "approvedPatches",
        "List of explicitly approved patches for the baseline. Cannot be specified with `approval_rule`.",
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "approvedPatchesComplianceLevel",
        "Compliance level for approved patches. This means that if an approved patch is reported as missing, this is the severity of the compliance violation. Valid values are `CRITICAL`, `HIGH`, `MEDIUM`, `LOW`, `INFORMATIONAL`, `UNSPECIFIED`. The default value is `UNSPECIFIED`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "rejectedPatches",
        "List of rejected patches.",
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "globalFilters",
        "Set of global filters used to exclude patches from the baseline. Up to 4 global filters can be specified using Key/Value pairs. Valid Keys are `PRODUCT`, `CLASSIFICATION`, `MSRC_SEVERITY`, and `PATCH_ID`.",
        () => ssm_PatchBaselineGlobalFilter_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the patch baseline.\n\nThe following arguments are optional:",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "operatingSystem",
        "Operating system the patch baseline applies to. Valid values are `ALMA_LINUX`, `AMAZON_LINUX`, `AMAZON_LINUX_2`, `AMAZON_LINUX_2022`, `AMAZON_LINUX_2023`, `CENTOS`, `DEBIAN`, `MACOS`, `ORACLE_LINUX`, `RASPBIAN`, `REDHAT_ENTERPRISE_LINUX`, `ROCKY_LINUX`, `SUSE`, `UBUNTU`, and `WINDOWS`. The default value is `WINDOWS`.",
        () => [],
        false,
        true,
      ),
    ];
  }
}
