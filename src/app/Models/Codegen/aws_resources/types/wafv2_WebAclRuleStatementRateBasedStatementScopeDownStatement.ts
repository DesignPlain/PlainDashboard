import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatement,
  wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatement_GetTypes,
} from "./wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatement";
import {
  wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatement,
  wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatement_GetTypes,
} from "./wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatement";
import {
  wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementIpSetReferenceStatement,
  wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementIpSetReferenceStatement_GetTypes,
} from "./wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementIpSetReferenceStatement";
import {
  wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementGeoMatchStatement,
  wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementGeoMatchStatement_GetTypes,
} from "./wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementGeoMatchStatement";
import {
  wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatement,
  wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatement_GetTypes,
} from "./wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatement";
import {
  wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementByteMatchStatement,
  wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementByteMatchStatement_GetTypes,
} from "./wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementByteMatchStatement";
import {
  wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementLabelMatchStatement,
  wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementLabelMatchStatement_GetTypes,
} from "./wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementLabelMatchStatement";
import {
  wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementNotStatement,
  wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementNotStatement_GetTypes,
} from "./wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementNotStatement";
import {
  wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatement,
  wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatement_GetTypes,
} from "./wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatement";
import {
  wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatement,
  wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatement_GetTypes,
} from "./wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatement";
import {
  wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatement,
  wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatement_GetTypes,
} from "./wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatement";
import {
  wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatement,
  wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatement_GetTypes,
} from "./wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatement";

export interface wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatement {
  // Rule statement used to search web request components for a match against a single regular expression. See `regex_match_statement` below for details.
  regexMatchStatement?: wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatement;

  // Rule statement that defines a cross-site scripting (XSS) match search for AWS WAF to apply to web requests. See `xss_match_statement` below for details.
  xssMatchStatement?: wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatement;

  // Rule statement that defines a string match search for AWS WAF to apply to web requests. See `byte_match_statement` below for details.
  byteMatchStatement?: wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementByteMatchStatement;

  // Rule statement used to identify web requests based on country of origin. See `geo_match_statement` below for details.
  geoMatchStatement?: wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementGeoMatchStatement;

  // Rule statement that defines a string match search against labels that have been added to the web request by rules that have already run in the web ACL. See `label_match_statement` below for details.
  labelMatchStatement?: wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementLabelMatchStatement;

  // Logical rule statement used to negate the results of another rule statement. See `not_statement` below for details.
  notStatement?: wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementNotStatement;

  // Logical rule statement used to combine other rule statements with OR logic. See `or_statement` below for details.
  orStatement?: wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatement;

  // Rule statement used to search web request components for matches with regular expressions. See `regex_pattern_set_reference_statement` below for details.
  regexPatternSetReferenceStatement?: wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatement;

  // Rule statement that compares a number of bytes against the size of a request component, using a comparison operator, such as greater than (>) or less than (<). See `size_constraint_statement` below for more details.
  sizeConstraintStatement?: wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatement;

  // An SQL injection match condition identifies the part of web requests, such as the URI or the query string, that you want AWS WAF to inspect. See `sqli_match_statement` below for details.
  sqliMatchStatement?: wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatement;

  // Logical rule statement used to combine other rule statements with AND logic. See `and_statement` below for details.
  andStatement?: wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatement;

  // Rule statement used to detect web requests coming from particular IP addresses or address ranges. See `ip_set_reference_statement` below for details.
  ipSetReferenceStatement?: wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementIpSetReferenceStatement;
}

export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatement_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "sqliMatchStatement",
      "An SQL injection match condition identifies the part of web requests, such as the URI or the query string, that you want AWS WAF to inspect. See `sqli_match_statement` below for details.",
      wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatement_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "andStatement",
      "Logical rule statement used to combine other rule statements with AND logic. See `and_statement` below for details.",
      [],//wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatement_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "xssMatchStatement",
      "Rule statement that defines a cross-site scripting (XSS) match search for AWS WAF to apply to web requests. See `xss_match_statement` below for details.",
      wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatement_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "byteMatchStatement",
      "Rule statement that defines a string match search for AWS WAF to apply to web requests. See `byte_match_statement` below for details.",
      wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementByteMatchStatement_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "labelMatchStatement",
      "Rule statement that defines a string match search against labels that have been added to the web request by rules that have already run in the web ACL. See `label_match_statement` below for details.",
      wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementLabelMatchStatement_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "notStatement",
      "Logical rule statement used to negate the results of another rule statement. See `not_statement` below for details.",
      [],//wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementNotStatement_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "regexPatternSetReferenceStatement",
      "Rule statement used to search web request components for matches with regular expressions. See `regex_pattern_set_reference_statement` below for details.",
      wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatement_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "sizeConstraintStatement",
      "Rule statement that compares a number of bytes against the size of a request component, using a comparison operator, such as greater than (>) or less than (<). See `size_constraint_statement` below for more details.",
      wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatement_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ipSetReferenceStatement",
      "Rule statement used to detect web requests coming from particular IP addresses or address ranges. See `ip_set_reference_statement` below for details.",
      wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementIpSetReferenceStatement_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "regexMatchStatement",
      "Rule statement used to search web request components for a match against a single regular expression. See `regex_match_statement` below for details.",
      wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatement_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "geoMatchStatement",
      "Rule statement used to identify web requests based on country of origin. See `geo_match_statement` below for details.",
      wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementGeoMatchStatement_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "orStatement",
      "Logical rule statement used to combine other rule statements with OR logic. See `or_statement` below for details.",
      [],//wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatement_GetTypes(),
      false,
      false,
    ),
  ];
}
