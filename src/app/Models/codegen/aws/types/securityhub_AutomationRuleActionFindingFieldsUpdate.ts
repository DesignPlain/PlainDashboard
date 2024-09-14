import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  securityhub_AutomationRuleActionFindingFieldsUpdateWorkflow,
  securityhub_AutomationRuleActionFindingFieldsUpdateWorkflow_GetTypes,
} from "./securityhub_AutomationRuleActionFindingFieldsUpdateWorkflow";
import {
  securityhub_AutomationRuleActionFindingFieldsUpdateSeverity,
  securityhub_AutomationRuleActionFindingFieldsUpdateSeverity_GetTypes,
} from "./securityhub_AutomationRuleActionFindingFieldsUpdateSeverity";
import {
  securityhub_AutomationRuleActionFindingFieldsUpdateNote,
  securityhub_AutomationRuleActionFindingFieldsUpdateNote_GetTypes,
} from "./securityhub_AutomationRuleActionFindingFieldsUpdateNote";
import {
  securityhub_AutomationRuleActionFindingFieldsUpdateRelatedFinding,
  securityhub_AutomationRuleActionFindingFieldsUpdateRelatedFinding_GetTypes,
} from "./securityhub_AutomationRuleActionFindingFieldsUpdateRelatedFinding";

export interface securityhub_AutomationRuleActionFindingFieldsUpdate {
  // A resource block that is used to update information about the investigation into the finding. Documented below.
  workflow?: securityhub_AutomationRuleActionFindingFieldsUpdateWorkflow;

  // The rule action updates the `Confidence` field of a finding.
  confidence?: number;

  // The rule action updates the `Criticality` field of a finding.
  criticality?: number;

  // A resource block that updates to the severity information for a finding. Documented below.
  severity?: securityhub_AutomationRuleActionFindingFieldsUpdateSeverity;

  // The rule action updates the `Types` field of a finding.
  types?: Array<string>;

  // The rule action updates the `UserDefinedFields` field of a finding.
  userDefinedFields?: Map<string, string>;

  // A resource block that updates the note. Documented below.
  note?: securityhub_AutomationRuleActionFindingFieldsUpdateNote;

  // A resource block that the rule action updates the `RelatedFindings` field of a finding. Documented below.
  relatedFindings?: Array<securityhub_AutomationRuleActionFindingFieldsUpdateRelatedFinding>;

  // The rule action updates the `VerificationState` field of a finding. The allowed values are the following `UNKNOWN`, `TRUE_POSITIVE`, `FALSE_POSITIVE` and `BENIGN_POSITIVE`.
  verificationState?: string;
}

export function securityhub_AutomationRuleActionFindingFieldsUpdate_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Map,
      "userDefinedFields",
      "The rule action updates the `UserDefinedFields` field of a finding.",
      () => InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "note",
      "A resource block that updates the note. Documented below.",
      () => securityhub_AutomationRuleActionFindingFieldsUpdateNote_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "workflow",
      "A resource block that is used to update information about the investigation into the finding. Documented below.",
      () =>
        securityhub_AutomationRuleActionFindingFieldsUpdateWorkflow_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "criticality",
      "The rule action updates the `Criticality` field of a finding.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "severity",
      "A resource block that updates to the severity information for a finding. Documented below.",
      () =>
        securityhub_AutomationRuleActionFindingFieldsUpdateSeverity_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "verificationState",
      "The rule action updates the `VerificationState` field of a finding. The allowed values are the following `UNKNOWN`, `TRUE_POSITIVE`, `FALSE_POSITIVE` and `BENIGN_POSITIVE`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "confidence",
      "The rule action updates the `Confidence` field of a finding.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "types",
      "The rule action updates the `Types` field of a finding.",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "relatedFindings",
      "A resource block that the rule action updates the `RelatedFindings` field of a finding. Documented below.",
      () =>
        securityhub_AutomationRuleActionFindingFieldsUpdateRelatedFinding_GetTypes(),
      false,
      false,
    ),
  ];
}
