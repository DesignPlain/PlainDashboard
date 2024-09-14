import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  ssm_PatchBaselineApprovalRulePatchFilter,
  ssm_PatchBaselineApprovalRulePatchFilter_GetTypes,
} from "./ssm_PatchBaselineApprovalRulePatchFilter";

export interface ssm_PatchBaselineApprovalRule {
  // Number of days after the release date of each patch matched by the rule the patch is marked as approved in the patch baseline. Valid Range: 0 to 100. Conflicts with `approve_until_date`.
  approveAfterDays?: number;

  // Cutoff date for auto approval of released patches. Any patches released on or before this date are installed automatically. Date is formatted as `YYYY-MM-DD`. Conflicts with `approve_after_days`
  approveUntilDate?: string;

  // Compliance level for patches approved by this rule. Valid values are `CRITICAL`, `HIGH`, `MEDIUM`, `LOW`, `INFORMATIONAL`, and `UNSPECIFIED`. The default value is `UNSPECIFIED`.
  complianceLevel?: string;

  // Boolean enabling the application of non-security updates. The default value is `false`. Valid for Linux instances only.
  enableNonSecurity?: boolean;

  // Patch filter group that defines the criteria for the rule. Up to 5 patch filters can be specified per approval rule using Key/Value pairs. Valid combinations of these Keys and the `operating_system` value can be found in the [SSM DescribePatchProperties API Reference](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribePatchProperties.html). Valid Values are exact values for the patch property given as the key, or a wildcard `-`, which matches all values. `PATCH_SET` defaults to `OS` if unspecified
  patchFilters?: Array<ssm_PatchBaselineApprovalRulePatchFilter>;
}

export function ssm_PatchBaselineApprovalRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enableNonSecurity",
      "Boolean enabling the application of non-security updates. The default value is `false`. Valid for Linux instances only.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "patchFilters",
      "Patch filter group that defines the criteria for the rule. Up to 5 patch filters can be specified per approval rule using Key/Value pairs. Valid combinations of these Keys and the `operating_system` value can be found in the [SSM DescribePatchProperties API Reference](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribePatchProperties.html). Valid Values are exact values for the patch property given as the key, or a wildcard `*`, which matches all values. `PATCH_SET` defaults to `OS` if unspecified",
      () => ssm_PatchBaselineApprovalRulePatchFilter_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "approveAfterDays",
      "Number of days after the release date of each patch matched by the rule the patch is marked as approved in the patch baseline. Valid Range: 0 to 100. Conflicts with `approve_until_date`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "approveUntilDate",
      "Cutoff date for auto approval of released patches. Any patches released on or before this date are installed automatically. Date is formatted as `YYYY-MM-DD`. Conflicts with `approve_after_days`",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "complianceLevel",
      "Compliance level for patches approved by this rule. Valid values are `CRITICAL`, `HIGH`, `MEDIUM`, `LOW`, `INFORMATIONAL`, and `UNSPECIFIED`. The default value is `UNSPECIFIED`.",
      () => [],
      false,
      false,
    ),
  ];
}
