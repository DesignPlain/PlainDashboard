import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementGeoMatchStatement,
  wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementGeoMatchStatement_GetTypes,
} from "./wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementGeoMatchStatement";
import {
  wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementIpSetReferenceStatement,
  wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementIpSetReferenceStatement_GetTypes,
} from "./wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementIpSetReferenceStatement";
import {
  wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatement,
  wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatement_GetTypes,
} from "./wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatement";
import {
  wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatement,
  wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatement_GetTypes,
} from "./wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatement";
import {
  wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexMatchStatement,
  wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexMatchStatement_GetTypes,
} from "./wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexMatchStatement";
import {
  wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementByteMatchStatement,
  wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementByteMatchStatement_GetTypes,
} from "./wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementByteMatchStatement";
import {
  wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementLabelMatchStatement,
  wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementLabelMatchStatement_GetTypes,
} from "./wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementLabelMatchStatement";
import {
  wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatement,
  wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatement_GetTypes,
} from "./wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatement";
import {
  wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementAndStatement,
  wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementAndStatement_GetTypes,
} from "./wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementAndStatement";
import {
  wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatement,
  wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatement_GetTypes,
} from "./wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatement";
import {
  wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatement,
  wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatement_GetTypes,
} from "./wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatement";
import {
  wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatement,
  wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatement_GetTypes,
} from "./wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatement";

export interface wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatement {
  // Logical rule statement used to negate the results of another rule statement. See `not_statement` below for details.
  notStatement?: wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatement;

  // Logical rule statement used to combine other rule statements with OR logic. See `or_statement` below for details.
  orStatement?: wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatement;

  // Rule statement used to search web request components for a match against a single regular expression. See `regex_match_statement` below for details.
  regexMatchStatement?: wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexMatchStatement;

  // Logical rule statement used to combine other rule statements with AND logic. See `and_statement` below for details.
  andStatement?: wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementAndStatement;

  // Rule statement that defines a string match search for AWS WAF to apply to web requests. See `byte_match_statement` below for details.
  byteMatchStatement?: wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementByteMatchStatement;

  // Rule statement that defines a string match search against labels that have been added to the web request by rules that have already run in the web ACL. See `label_match_statement` below for details.
  labelMatchStatement?: wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementLabelMatchStatement;

  // Rule statement used to search web request components for matches with regular expressions. See `regex_pattern_set_reference_statement` below for details.
  regexPatternSetReferenceStatement?: wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatement;

  // Rule statement that compares a number of bytes against the size of a request component, using a comparison operator, such as greater than (>) or less than (<). See `size_constraint_statement` below for more details.
  sizeConstraintStatement?: wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatement;

  // An SQL injection match condition identifies the part of web requests, such as the URI or the query string, that you want AWS WAF to inspect. See `sqli_match_statement` below for details.
  sqliMatchStatement?: wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatement;

  // Rule statement that defines a cross-site scripting (XSS) match search for AWS WAF to apply to web requests. See `xss_match_statement` below for details.
  xssMatchStatement?: wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatement;

  // Rule statement used to identify web requests based on country of origin. See `geo_match_statement` below for details.
  geoMatchStatement?: wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementGeoMatchStatement;

  // Rule statement used to detect web requests coming from particular IP addresses or address ranges. See `ip_set_reference_statement` below for details.
  ipSetReferenceStatement?: wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementIpSetReferenceStatement;
}

export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatement_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "andStatement",
      "Logical rule statement used to combine other rule statements with AND logic. See `and_statement` below for details.",
      () =>
        wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementAndStatement_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "byteMatchStatement",
      "Rule statement that defines a string match search for AWS WAF to apply to web requests. See `byte_match_statement` below for details.",
      () =>
        wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementByteMatchStatement_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "regexPatternSetReferenceStatement",
      "Rule statement used to search web request components for matches with regular expressions. See `regex_pattern_set_reference_statement` below for details.",
      () =>
        wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatement_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "sizeConstraintStatement",
      "Rule statement that compares a number of bytes against the size of a request component, using a comparison operator, such as greater than (>) or less than (<). See `size_constraint_statement` below for more details.",
      () =>
        wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatement_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "sqliMatchStatement",
      "An SQL injection match condition identifies the part of web requests, such as the URI or the query string, that you want AWS WAF to inspect. See `sqli_match_statement` below for details.",
      () =>
        wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatement_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "xssMatchStatement",
      "Rule statement that defines a cross-site scripting (XSS) match search for AWS WAF to apply to web requests. See `xss_match_statement` below for details.",
      () =>
        wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatement_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "geoMatchStatement",
      "Rule statement used to identify web requests based on country of origin. See `geo_match_statement` below for details.",
      () =>
        wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementGeoMatchStatement_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "notStatement",
      "Logical rule statement used to negate the results of another rule statement. See `not_statement` below for details.",
      () =>
        wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatement_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "orStatement",
      "Logical rule statement used to combine other rule statements with OR logic. See `or_statement` below for details.",
      () =>
        wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatement_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "regexMatchStatement",
      "Rule statement used to search web request components for a match against a single regular expression. See `regex_match_statement` below for details.",
      () =>
        wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexMatchStatement_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "labelMatchStatement",
      "Rule statement that defines a string match search against labels that have been added to the web request by rules that have already run in the web ACL. See `label_match_statement` below for details.",
      () =>
        wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementLabelMatchStatement_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ipSetReferenceStatement",
      "Rule statement used to detect web requests coming from particular IP addresses or address ranges. See `ip_set_reference_statement` below for details.",
      () =>
        wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementIpSetReferenceStatement_GetTypes(),
      false,
      false,
    ),
  ];
}
