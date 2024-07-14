import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface wafv2_RuleGroupRuleStatementIpSetReferenceStatementIpSetForwardedIpConfig {
  // The match status to assign to the web request if the request doesn't have a valid IP address in the specified position. Valid values include: `MATCH` or `NO_MATCH`.
  fallbackBehavior?: string;

  // The name of the HTTP header to use for the IP address.
  headerName?: string;

  // The position in the header to search for the IP address. Valid values include: `FIRST`, `LAST`, or `ANY`. If `ANY` is specified and the header contains more than 10 IP addresses, AWS WAFv2 inspects the last 10.
  position?: string;
}

export function wafv2_RuleGroupRuleStatementIpSetReferenceStatementIpSetForwardedIpConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "fallbackBehavior",
      "The match status to assign to the web request if the request doesn't have a valid IP address in the specified position. Valid values include: `MATCH` or `NO_MATCH`.",
      [],
      true,
      false,
    ),
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
      "position",
      "The position in the header to search for the IP address. Valid values include: `FIRST`, `LAST`, or `ANY`. If `ANY` is specified and the header contains more than 10 IP addresses, AWS WAFv2 inspects the last 10.",
      [],
      true,
      false,
    ),
  ];
}
