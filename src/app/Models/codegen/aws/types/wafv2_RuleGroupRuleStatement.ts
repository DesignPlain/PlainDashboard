import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  wafv2_RuleGroupRuleStatementAndStatement,
  wafv2_RuleGroupRuleStatementAndStatement_GetTypes,
} from "./wafv2_RuleGroupRuleStatementAndStatement";
import {
  wafv2_RuleGroupRuleStatementIpSetReferenceStatement,
  wafv2_RuleGroupRuleStatementIpSetReferenceStatement_GetTypes,
} from "./wafv2_RuleGroupRuleStatementIpSetReferenceStatement";
import {
  wafv2_RuleGroupRuleStatementLabelMatchStatement,
  wafv2_RuleGroupRuleStatementLabelMatchStatement_GetTypes,
} from "./wafv2_RuleGroupRuleStatementLabelMatchStatement";
import {
  wafv2_RuleGroupRuleStatementNotStatement,
  wafv2_RuleGroupRuleStatementNotStatement_GetTypes,
} from "./wafv2_RuleGroupRuleStatementNotStatement";
import {
  wafv2_RuleGroupRuleStatementRegexMatchStatement,
  wafv2_RuleGroupRuleStatementRegexMatchStatement_GetTypes,
} from "./wafv2_RuleGroupRuleStatementRegexMatchStatement";
import {
  wafv2_RuleGroupRuleStatementSizeConstraintStatement,
  wafv2_RuleGroupRuleStatementSizeConstraintStatement_GetTypes,
} from "./wafv2_RuleGroupRuleStatementSizeConstraintStatement";
import {
  wafv2_RuleGroupRuleStatementSqliMatchStatement,
  wafv2_RuleGroupRuleStatementSqliMatchStatement_GetTypes,
} from "./wafv2_RuleGroupRuleStatementSqliMatchStatement";
import {
  wafv2_RuleGroupRuleStatementGeoMatchStatement,
  wafv2_RuleGroupRuleStatementGeoMatchStatement_GetTypes,
} from "./wafv2_RuleGroupRuleStatementGeoMatchStatement";
import {
  wafv2_RuleGroupRuleStatementOrStatement,
  wafv2_RuleGroupRuleStatementOrStatement_GetTypes,
} from "./wafv2_RuleGroupRuleStatementOrStatement";
import {
  wafv2_RuleGroupRuleStatementRateBasedStatement,
  wafv2_RuleGroupRuleStatementRateBasedStatement_GetTypes,
} from "./wafv2_RuleGroupRuleStatementRateBasedStatement";
import {
  wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatement,
  wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatement_GetTypes,
} from "./wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatement";
import {
  wafv2_RuleGroupRuleStatementXssMatchStatement,
  wafv2_RuleGroupRuleStatementXssMatchStatement_GetTypes,
} from "./wafv2_RuleGroupRuleStatementXssMatchStatement";
import {
  wafv2_RuleGroupRuleStatementByteMatchStatement,
  wafv2_RuleGroupRuleStatementByteMatchStatement_GetTypes,
} from "./wafv2_RuleGroupRuleStatementByteMatchStatement";

export interface wafv2_RuleGroupRuleStatement {
  // A rule statement used to identify web requests based on country of origin. See GEO Match Statement below for details.
  geoMatchStatement?: wafv2_RuleGroupRuleStatementGeoMatchStatement;

  // A rule statement used to detect web requests coming from particular IP addresses or address ranges. See IP Set Reference Statement below for details.
  ipSetReferenceStatement?: wafv2_RuleGroupRuleStatementIpSetReferenceStatement;

  // A logical rule statement used to combine other rule statements with OR logic. See OR Statement below for details.
  orStatement?: wafv2_RuleGroupRuleStatementOrStatement;

  // A rate-based rule tracks the rate of requests for each originating `IP address`, and triggers the rule action when the rate exceeds a limit that you specify on the number of requests in any `5-minute` time span. This statement can not be nested. See Rate Based Statement below for details.
  rateBasedStatement?: wafv2_RuleGroupRuleStatementRateBasedStatement;

  // A rule statement used to search web request components for matches with regular expressions. See Regex Pattern Set Reference Statement below for details.
  regexPatternSetReferenceStatement?: wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatement;

  // A rule statement that defines a cross-site scripting (XSS) match search for AWS WAF to apply to web requests. See XSS Match Statement below for details.
  xssMatchStatement?: wafv2_RuleGroupRuleStatementXssMatchStatement;

  // A rule statement that defines a string match search for AWS WAF to apply to web requests. See Byte Match Statement below for details.
  byteMatchStatement?: wafv2_RuleGroupRuleStatementByteMatchStatement;

  // A rule statement that defines a string match search against labels that have been added to the web request by rules that have already run in the web ACL. See Label Match Statement below for details.
  labelMatchStatement?: wafv2_RuleGroupRuleStatementLabelMatchStatement;

  // A logical rule statement used to negate the results of another rule statement. See NOT Statement below for details.
  notStatement?: wafv2_RuleGroupRuleStatementNotStatement;

  // A rule statement used to search web request components for a match against a single regular expression. See Regex Match Statement below for details.
  regexMatchStatement?: wafv2_RuleGroupRuleStatementRegexMatchStatement;

  // A rule statement that compares a number of bytes against the size of a request component, using a comparison operator, such as greater than (>) or less than (<). See Size Constraint Statement below for more details.
  sizeConstraintStatement?: wafv2_RuleGroupRuleStatementSizeConstraintStatement;

  // An SQL injection match condition identifies the part of web requests, such as the URI or the query string, that you want AWS WAF to inspect. See SQL Injection Match Statement below for details.
  sqliMatchStatement?: wafv2_RuleGroupRuleStatementSqliMatchStatement;

  // A logical rule statement used to combine other rule statements with AND logic. See AND Statement below for details.
  andStatement?: wafv2_RuleGroupRuleStatementAndStatement;
}

export function wafv2_RuleGroupRuleStatement_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "xssMatchStatement",
      "A rule statement that defines a cross-site scripting (XSS) match search for AWS WAF to apply to web requests. See XSS Match Statement below for details.",
      () => wafv2_RuleGroupRuleStatementXssMatchStatement_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "labelMatchStatement",
      "A rule statement that defines a string match search against labels that have been added to the web request by rules that have already run in the web ACL. See Label Match Statement below for details.",
      () => wafv2_RuleGroupRuleStatementLabelMatchStatement_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "notStatement",
      "A logical rule statement used to negate the results of another rule statement. See NOT Statement below for details.",
      () => wafv2_RuleGroupRuleStatementNotStatement_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "sqliMatchStatement",
      "An SQL injection match condition identifies the part of web requests, such as the URI or the query string, that you want AWS WAF to inspect. See SQL Injection Match Statement below for details.",
      () => wafv2_RuleGroupRuleStatementSqliMatchStatement_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ipSetReferenceStatement",
      "A rule statement used to detect web requests coming from particular IP addresses or address ranges. See IP Set Reference Statement below for details.",
      () => wafv2_RuleGroupRuleStatementIpSetReferenceStatement_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "rateBasedStatement",
      "A rate-based rule tracks the rate of requests for each originating `IP address`, and triggers the rule action when the rate exceeds a limit that you specify on the number of requests in any `5-minute` time span. This statement can not be nested. See Rate Based Statement below for details.",
      () => wafv2_RuleGroupRuleStatementRateBasedStatement_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "regexPatternSetReferenceStatement",
      "A rule statement used to search web request components for matches with regular expressions. See Regex Pattern Set Reference Statement below for details.",
      () =>
        wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatement_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "regexMatchStatement",
      "A rule statement used to search web request components for a match against a single regular expression. See Regex Match Statement below for details.",
      () => wafv2_RuleGroupRuleStatementRegexMatchStatement_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "sizeConstraintStatement",
      "A rule statement that compares a number of bytes against the size of a request component, using a comparison operator, such as greater than (>) or less than (<). See Size Constraint Statement below for more details.",
      () => wafv2_RuleGroupRuleStatementSizeConstraintStatement_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "andStatement",
      "A logical rule statement used to combine other rule statements with AND logic. See AND Statement below for details.",
      () => wafv2_RuleGroupRuleStatementAndStatement_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "geoMatchStatement",
      "A rule statement used to identify web requests based on country of origin. See GEO Match Statement below for details.",
      () => wafv2_RuleGroupRuleStatementGeoMatchStatement_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "orStatement",
      "A logical rule statement used to combine other rule statements with OR logic. See OR Statement below for details.",
      () => wafv2_RuleGroupRuleStatementOrStatement_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "byteMatchStatement",
      "A rule statement that defines a string match search for AWS WAF to apply to web requests. See Byte Match Statement below for details.",
      () => wafv2_RuleGroupRuleStatementByteMatchStatement_GetTypes(),
      false,
      false,
    ),
  ];
}
