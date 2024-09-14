import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  wafv2_WebAclRuleStatementNotStatement,
  wafv2_WebAclRuleStatementNotStatement_GetTypes,
} from "./wafv2_WebAclRuleStatementNotStatement";
import {
  wafv2_WebAclRuleStatementRegexMatchStatement,
  wafv2_WebAclRuleStatementRegexMatchStatement_GetTypes,
} from "./wafv2_WebAclRuleStatementRegexMatchStatement";
import {
  wafv2_WebAclRuleStatementSizeConstraintStatement,
  wafv2_WebAclRuleStatementSizeConstraintStatement_GetTypes,
} from "./wafv2_WebAclRuleStatementSizeConstraintStatement";
import {
  wafv2_WebAclRuleStatementRegexPatternSetReferenceStatement,
  wafv2_WebAclRuleStatementRegexPatternSetReferenceStatement_GetTypes,
} from "./wafv2_WebAclRuleStatementRegexPatternSetReferenceStatement";
import {
  wafv2_WebAclRuleStatementByteMatchStatement,
  wafv2_WebAclRuleStatementByteMatchStatement_GetTypes,
} from "./wafv2_WebAclRuleStatementByteMatchStatement";
import {
  wafv2_WebAclRuleStatementIpSetReferenceStatement,
  wafv2_WebAclRuleStatementIpSetReferenceStatement_GetTypes,
} from "./wafv2_WebAclRuleStatementIpSetReferenceStatement";
import {
  wafv2_WebAclRuleStatementAndStatement,
  wafv2_WebAclRuleStatementAndStatement_GetTypes,
} from "./wafv2_WebAclRuleStatementAndStatement";
import {
  wafv2_WebAclRuleStatementXssMatchStatement,
  wafv2_WebAclRuleStatementXssMatchStatement_GetTypes,
} from "./wafv2_WebAclRuleStatementXssMatchStatement";
import {
  wafv2_WebAclRuleStatementManagedRuleGroupStatement,
  wafv2_WebAclRuleStatementManagedRuleGroupStatement_GetTypes,
} from "./wafv2_WebAclRuleStatementManagedRuleGroupStatement";
import {
  wafv2_WebAclRuleStatementSqliMatchStatement,
  wafv2_WebAclRuleStatementSqliMatchStatement_GetTypes,
} from "./wafv2_WebAclRuleStatementSqliMatchStatement";
import {
  wafv2_WebAclRuleStatementLabelMatchStatement,
  wafv2_WebAclRuleStatementLabelMatchStatement_GetTypes,
} from "./wafv2_WebAclRuleStatementLabelMatchStatement";
import {
  wafv2_WebAclRuleStatementOrStatement,
  wafv2_WebAclRuleStatementOrStatement_GetTypes,
} from "./wafv2_WebAclRuleStatementOrStatement";
import {
  wafv2_WebAclRuleStatementGeoMatchStatement,
  wafv2_WebAclRuleStatementGeoMatchStatement_GetTypes,
} from "./wafv2_WebAclRuleStatementGeoMatchStatement";
import {
  wafv2_WebAclRuleStatementRateBasedStatement,
  wafv2_WebAclRuleStatementRateBasedStatement_GetTypes,
} from "./wafv2_WebAclRuleStatementRateBasedStatement";
import {
  wafv2_WebAclRuleStatementRuleGroupReferenceStatement,
  wafv2_WebAclRuleStatementRuleGroupReferenceStatement_GetTypes,
} from "./wafv2_WebAclRuleStatementRuleGroupReferenceStatement";

export interface wafv2_WebAclRuleStatement {
  // Rule statement that defines a cross-site scripting (XSS) match search for AWS WAF to apply to web requests. See `xss_match_statement` below for details.
  xssMatchStatement?: wafv2_WebAclRuleStatementXssMatchStatement;

  // Rule statement used to run the rules that are defined in a managed rule group.  This statement can not be nested. See `managed_rule_group_statement` below for details.
  managedRuleGroupStatement?: wafv2_WebAclRuleStatementManagedRuleGroupStatement;

  // Rule statement used to search web request components for matches with regular expressions. See `regex_pattern_set_reference_statement` below for details.
  regexPatternSetReferenceStatement?: wafv2_WebAclRuleStatementRegexPatternSetReferenceStatement;

  // An SQL injection match condition identifies the part of web requests, such as the URI or the query string, that you want AWS WAF to inspect. See `sqli_match_statement` below for details.
  sqliMatchStatement?: wafv2_WebAclRuleStatementSqliMatchStatement;

  // Rule statement that defines a string match search against labels that have been added to the web request by rules that have already run in the web ACL. See `label_match_statement` below for details.
  labelMatchStatement?: wafv2_WebAclRuleStatementLabelMatchStatement;

  // Logical rule statement used to combine other rule statements with OR logic. See `or_statement` below for details.
  orStatement?: wafv2_WebAclRuleStatementOrStatement;

  // Rule statement that defines a string match search for AWS WAF to apply to web requests. See `byte_match_statement` below for details.
  byteMatchStatement?: wafv2_WebAclRuleStatementByteMatchStatement;

  // Rule statement used to identify web requests based on country of origin. See `geo_match_statement` below for details.
  geoMatchStatement?: wafv2_WebAclRuleStatementGeoMatchStatement;

  // Rule statement used to detect web requests coming from particular IP addresses or address ranges. See `ip_set_reference_statement` below for details.
  ipSetReferenceStatement?: wafv2_WebAclRuleStatementIpSetReferenceStatement;

  // Logical rule statement used to combine other rule statements with AND logic. See `and_statement` below for details.
  andStatement?: wafv2_WebAclRuleStatementAndStatement;

  // Logical rule statement used to negate the results of another rule statement. See `not_statement` below for details.
  notStatement?: wafv2_WebAclRuleStatementNotStatement;

  // Rate-based rule tracks the rate of requests for each originating `IP address`, and triggers the rule action when the rate exceeds a limit that you specify on the number of requests in any `5-minute` time span. This statement can not be nested. See `rate_based_statement` below for details.
  rateBasedStatement?: wafv2_WebAclRuleStatementRateBasedStatement;

  // Rule statement used to search web request components for a match against a single regular expression. See `regex_match_statement` below for details.
  regexMatchStatement?: wafv2_WebAclRuleStatementRegexMatchStatement;

  // Rule statement used to run the rules that are defined in an WAFv2 Rule Group. See `rule_group_reference_statement` below for details.
  ruleGroupReferenceStatement?: wafv2_WebAclRuleStatementRuleGroupReferenceStatement;

  // Rule statement that compares a number of bytes against the size of a request component, using a comparison operator, such as greater than (>) or less than (<). See `size_constraint_statement` below for more details.
  sizeConstraintStatement?: wafv2_WebAclRuleStatementSizeConstraintStatement;
}

export function wafv2_WebAclRuleStatement_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "managedRuleGroupStatement",
      "Rule statement used to run the rules that are defined in a managed rule group.  This statement can not be nested. See `managed_rule_group_statement` below for details.",
      () => wafv2_WebAclRuleStatementManagedRuleGroupStatement_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "geoMatchStatement",
      "Rule statement used to identify web requests based on country of origin. See `geo_match_statement` below for details.",
      () => wafv2_WebAclRuleStatementGeoMatchStatement_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "rateBasedStatement",
      "Rate-based rule tracks the rate of requests for each originating `IP address`, and triggers the rule action when the rate exceeds a limit that you specify on the number of requests in any `5-minute` time span. This statement can not be nested. See `rate_based_statement` below for details.",
      () => wafv2_WebAclRuleStatementRateBasedStatement_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "regexMatchStatement",
      "Rule statement used to search web request components for a match against a single regular expression. See `regex_match_statement` below for details.",
      () => wafv2_WebAclRuleStatementRegexMatchStatement_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ruleGroupReferenceStatement",
      "Rule statement used to run the rules that are defined in an WAFv2 Rule Group. See `rule_group_reference_statement` below for details.",
      () => wafv2_WebAclRuleStatementRuleGroupReferenceStatement_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "sizeConstraintStatement",
      "Rule statement that compares a number of bytes against the size of a request component, using a comparison operator, such as greater than (>) or less than (<). See `size_constraint_statement` below for more details.",
      () => wafv2_WebAclRuleStatementSizeConstraintStatement_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "xssMatchStatement",
      "Rule statement that defines a cross-site scripting (XSS) match search for AWS WAF to apply to web requests. See `xss_match_statement` below for details.",
      () => wafv2_WebAclRuleStatementXssMatchStatement_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "regexPatternSetReferenceStatement",
      "Rule statement used to search web request components for matches with regular expressions. See `regex_pattern_set_reference_statement` below for details.",
      () =>
        wafv2_WebAclRuleStatementRegexPatternSetReferenceStatement_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "labelMatchStatement",
      "Rule statement that defines a string match search against labels that have been added to the web request by rules that have already run in the web ACL. See `label_match_statement` below for details.",
      () => wafv2_WebAclRuleStatementLabelMatchStatement_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ipSetReferenceStatement",
      "Rule statement used to detect web requests coming from particular IP addresses or address ranges. See `ip_set_reference_statement` below for details.",
      () => wafv2_WebAclRuleStatementIpSetReferenceStatement_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "orStatement",
      "Logical rule statement used to combine other rule statements with OR logic. See `or_statement` below for details.",
      () => wafv2_WebAclRuleStatementOrStatement_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "byteMatchStatement",
      "Rule statement that defines a string match search for AWS WAF to apply to web requests. See `byte_match_statement` below for details.",
      () => wafv2_WebAclRuleStatementByteMatchStatement_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "notStatement",
      "Logical rule statement used to negate the results of another rule statement. See `not_statement` below for details.",
      () => wafv2_WebAclRuleStatementNotStatement_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "sqliMatchStatement",
      "An SQL injection match condition identifies the part of web requests, such as the URI or the query string, that you want AWS WAF to inspect. See `sqli_match_statement` below for details.",
      () => wafv2_WebAclRuleStatementSqliMatchStatement_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "andStatement",
      "Logical rule statement used to combine other rule statements with AND logic. See `and_statement` below for details.",
      () => wafv2_WebAclRuleStatementAndStatement_GetTypes(),
      false,
      false,
    ),
  ];
}
