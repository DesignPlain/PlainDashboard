import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface waf_RateBasedRulePredicate {
  /*
Set this to `false` if you want to allow, block, or count requests
based on the settings in the specified `ByteMatchSet`, `IPSet`, `SqlInjectionMatchSet`, `XssMatchSet`, or `SizeConstraintSet`.
For example, if an IPSet includes the IP address `192.0.2.44`, AWS WAF will allow or block requests based on that IP address.
If set to `true`, AWS WAF will allow, block, or count requests based on all IP addresses _except_ `192.0.2.44`.
*/
  negated?: boolean;

  // The type of predicate in a rule. Valid values: `ByteMatch`, `GeoMatch`, `IPMatch`, `RegexMatch`, `SizeConstraint`, `SqlInjectionMatch`, or `XssMatch`.
  type?: string;

  // A unique identifier for a predicate in the rule, such as Byte Match Set ID or IPSet ID.
  dataId?: string;
}

export function waf_RateBasedRulePredicate_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "dataId",
      "A unique identifier for a predicate in the rule, such as Byte Match Set ID or IPSet ID.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "negated",
      "Set this to `false` if you want to allow, block, or count requests\nbased on the settings in the specified `ByteMatchSet`, `IPSet`, `SqlInjectionMatchSet`, `XssMatchSet`, or `SizeConstraintSet`.\nFor example, if an IPSet includes the IP address `192.0.2.44`, AWS WAF will allow or block requests based on that IP address.\nIf set to `true`, AWS WAF will allow, block, or count requests based on all IP addresses _except_ `192.0.2.44`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "type",
      "The type of predicate in a rule. Valid values: `ByteMatch`, `GeoMatch`, `IPMatch`, `RegexMatch`, `SizeConstraint`, `SqlInjectionMatch`, or `XssMatch`.",
      [],
      true,
      false,
    ),
  ];
}
