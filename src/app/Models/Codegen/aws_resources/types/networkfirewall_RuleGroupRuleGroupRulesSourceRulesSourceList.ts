import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface networkfirewall_RuleGroupRuleGroupRulesSourceRulesSourceList {
  // String value to specify whether domains in the target list are allowed or denied access. Valid values: `ALLOWLIST`, `DENYLIST`.
  generatedRulesType?: string;

  // Set of types of domain specifications that are provided in the `targets` argument. Valid values: `HTTP_HOST`, `TLS_SNI`.
  targetTypes?: Array<string>;

  // Set of domains that you want to inspect for in your traffic flows.
  targets?: Array<string>;
}

export function networkfirewall_RuleGroupRuleGroupRulesSourceRulesSourceList_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "targets",
      "Set of domains that you want to inspect for in your traffic flows.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "generatedRulesType",
      "String value to specify whether domains in the target list are allowed or denied access. Valid values: `ALLOWLIST`, `DENYLIST`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "targetTypes",
      "Set of types of domain specifications that are provided in the `targets` argument. Valid values: `HTTP_HOST`, `TLS_SNI`.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
