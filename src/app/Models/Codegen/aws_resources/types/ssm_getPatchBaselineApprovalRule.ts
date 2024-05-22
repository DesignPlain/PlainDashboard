import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  ssm_getPatchBaselineApprovalRulePatchFilter,
  ssm_getPatchBaselineApprovalRulePatchFilter_GetTypes,
} from "./ssm_getPatchBaselineApprovalRulePatchFilter";

export interface ssm_getPatchBaselineApprovalRule {
  // Number of days after the release date of each patch matched by the rule the patch is marked as approved in the patch baseline.
  approveAfterDays?: number;

  // Cutoff date for auto approval of released patches. Any patches released on or before this date are installed automatically. Date is formatted as `YYYY-MM-DD`. Conflicts with `approve_after_days`
  approveUntilDate?: string;

  // Compliance level for patches approved by this rule.
  complianceLevel?: string;

  // Boolean enabling the application of non-security updates.
  enableNonSecurity?: boolean;

  // Patch filter group that defines the criteria for the rule.
  patchFilters?: Array<ssm_getPatchBaselineApprovalRulePatchFilter>;
}

export function ssm_getPatchBaselineApprovalRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "approveAfterDays",
      "Number of days after the release date of each patch matched by the rule the patch is marked as approved in the patch baseline.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "approveUntilDate",
      "Cutoff date for auto approval of released patches. Any patches released on or before this date are installed automatically. Date is formatted as `YYYY-MM-DD`. Conflicts with `approve_after_days`",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "complianceLevel",
      "Compliance level for patches approved by this rule.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enableNonSecurity",
      "Boolean enabling the application of non-security updates.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "patchFilters",
      "Patch filter group that defines the criteria for the rule.",
      ssm_getPatchBaselineApprovalRulePatchFilter_GetTypes(),
      true,
      false,
    ),
  ];
}
