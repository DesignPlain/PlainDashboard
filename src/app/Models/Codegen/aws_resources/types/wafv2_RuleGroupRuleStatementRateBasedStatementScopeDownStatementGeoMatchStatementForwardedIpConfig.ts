import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementGeoMatchStatementForwardedIpConfig {
  // The name of the HTTP header to use for the IP address.
  headerName?: string;

  // The match status to assign to the web request if the request doesn't have a valid IP address in the specified position. Valid values include: `MATCH` or `NO_MATCH`.
  fallbackBehavior?: string;
}

export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementGeoMatchStatementForwardedIpConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "headerName",
      "The name of the HTTP header to use for the IP address.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "fallbackBehavior",
      "The match status to assign to the web request if the request doesn't have a valid IP address in the specified position. Valid values include: `MATCH` or `NO_MATCH`.",
      [],
      true,
      false,
    ),
  ];
}
