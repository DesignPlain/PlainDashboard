import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  customerprofiles_DomainRuleBasedMatchingMatchingRule,
  customerprofiles_DomainRuleBasedMatchingMatchingRule_GetTypes,
} from "./customerprofiles_DomainRuleBasedMatchingMatchingRule";
import {
  customerprofiles_DomainRuleBasedMatchingAttributeTypesSelector,
  customerprofiles_DomainRuleBasedMatchingAttributeTypesSelector_GetTypes,
} from "./customerprofiles_DomainRuleBasedMatchingAttributeTypesSelector";
import {
  customerprofiles_DomainRuleBasedMatchingConflictResolution,
  customerprofiles_DomainRuleBasedMatchingConflictResolution_GetTypes,
} from "./customerprofiles_DomainRuleBasedMatchingConflictResolution";
import {
  customerprofiles_DomainRuleBasedMatchingExportingConfig,
  customerprofiles_DomainRuleBasedMatchingExportingConfig_GetTypes,
} from "./customerprofiles_DomainRuleBasedMatchingExportingConfig";

export interface customerprofiles_DomainRuleBasedMatching {
  // A block that configures how the rule-based matching process should match profiles. You can have up to 15 `rule` in the `natching_rules`. Documented below.
  matchingRules?: Array<customerprofiles_DomainRuleBasedMatchingMatchingRule>;

  // Indicates the maximum allowed rule level for matching.
  maxAllowedRuleLevelForMatching?: number;

  // Indicates the maximum allowed rule level for merging.
  maxAllowedRuleLevelForMerging?: number;

  //
  status?: string;

  // A block that configures information about the `AttributeTypesSelector` where the rule-based identity resolution uses to match profiles. Documented below.
  attributeTypesSelector?: customerprofiles_DomainRuleBasedMatchingAttributeTypesSelector;

  // A block that specifies how the auto-merging process should resolve conflicts between different profiles. Documented below.
  conflictResolution?: customerprofiles_DomainRuleBasedMatchingConflictResolution;

  // The flag that enables the rule-based matching process of duplicate profiles.
  enabled?: boolean;

  // A block that specifies the configuration for exporting Identity Resolution results. Documented below.
  exportingConfig?: customerprofiles_DomainRuleBasedMatchingExportingConfig;
}

export function customerprofiles_DomainRuleBasedMatching_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "conflictResolution",
      "A block that specifies how the auto-merging process should resolve conflicts between different profiles. Documented below.",
      customerprofiles_DomainRuleBasedMatchingConflictResolution_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "The flag that enables the rule-based matching process of duplicate profiles.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "exportingConfig",
      "A block that specifies the configuration for exporting Identity Resolution results. Documented below.",
      customerprofiles_DomainRuleBasedMatchingExportingConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "matchingRules",
      "A block that configures how the rule-based matching process should match profiles. You can have up to 15 `rule` in the `natching_rules`. Documented below.",
      customerprofiles_DomainRuleBasedMatchingMatchingRule_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "maxAllowedRuleLevelForMatching",
      "Indicates the maximum allowed rule level for matching.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "maxAllowedRuleLevelForMerging",
      "Indicates the maximum allowed rule level for merging.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(InputType.String, "status", "", [], false, false),
    new DynamicUIProps(
      InputType.Object,
      "attributeTypesSelector",
      "A block that configures information about the `AttributeTypesSelector` where the rule-based identity resolution uses to match profiles. Documented below.",
      customerprofiles_DomainRuleBasedMatchingAttributeTypesSelector_GetTypes(),
      false,
      false,
    ),
  ];
}
