import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatement,
  wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatement_GetTypes,
} from './wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatement';
import {
  wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatement,
  wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatement_GetTypes,
} from './wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatement';
import {
  wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementGeoMatchStatement,
  wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementGeoMatchStatement_GetTypes,
} from './wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementGeoMatchStatement';
import {
  wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementIpSetReferenceStatement,
  wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementIpSetReferenceStatement_GetTypes,
} from './wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementIpSetReferenceStatement';
import {
  wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementLabelMatchStatement,
  wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementLabelMatchStatement_GetTypes,
} from './wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementLabelMatchStatement';
import {
  wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementOrStatement,
  wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementOrStatement_GetTypes,
} from './wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementOrStatement';
import {
  wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatement,
  wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatement_GetTypes,
} from './wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatement';
import {
  wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatement,
  wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatement_GetTypes,
} from './wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatement';
import {
  wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatement,
  wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatement_GetTypes,
} from './wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatement';
import {
  wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementNotStatement,
  wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementNotStatement_GetTypes,
} from './wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementNotStatement';
import {
  wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementByteMatchStatement,
  wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementByteMatchStatement_GetTypes,
} from './wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementByteMatchStatement';
import {
  wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementXssMatchStatement,
  wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementXssMatchStatement_GetTypes,
} from './wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementXssMatchStatement';

export interface wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatement {
  // A rule statement used to search web request components for a match against a single regular expression. See Regex Match Statement below for details.
  regexMatchStatement?: wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatement;

  // A rule statement used to search web request components for matches with regular expressions. See Regex Pattern Set Reference Statement below for details.
  regexPatternSetReferenceStatement?: wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatement;

  // A rule statement that compares a number of bytes against the size of a request component, using a comparison operator, such as greater than (>) or less than (<). See Size Constraint Statement below for more details.
  sizeConstraintStatement?: wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatement;

  // An SQL injection match condition identifies the part of web requests, such as the URI or the query string, that you want AWS WAF to inspect. See SQL Injection Match Statement below for details.
  sqliMatchStatement?: wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatement;

  // A logical rule statement used to combine other rule statements with AND logic. See AND Statement below for details.
  andStatement?: wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatement;

  // A rule statement used to identify web requests based on country of origin. See GEO Match Statement below for details.
  geoMatchStatement?: wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementGeoMatchStatement;

  // A rule statement used to detect web requests coming from particular IP addresses or address ranges. See IP Set Reference Statement below for details.
  ipSetReferenceStatement?: wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementIpSetReferenceStatement;

  // A logical rule statement used to negate the results of another rule statement. See NOT Statement below for details.
  notStatement?: wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementNotStatement;

  // A rule statement that defines a string match search for AWS WAF to apply to web requests. See Byte Match Statement below for details.
  byteMatchStatement?: wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementByteMatchStatement;

  // A rule statement that defines a string match search against labels that have been added to the web request by rules that have already run in the web ACL. See Label Match Statement below for details.
  labelMatchStatement?: wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementLabelMatchStatement;

  // A logical rule statement used to combine other rule statements with OR logic. See OR Statement below for details.
  orStatement?: wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementOrStatement;

  // A rule statement that defines a cross-site scripting (XSS) match search for AWS WAF to apply to web requests. See XSS Match Statement below for details.
  xssMatchStatement?: wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementXssMatchStatement;
}

export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatement_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'regexMatchStatement',
      'A rule statement used to search web request components for a match against a single regular expression. See Regex Match Statement below for details.',
      () =>
        wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatement_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'regexPatternSetReferenceStatement',
      'A rule statement used to search web request components for matches with regular expressions. See Regex Pattern Set Reference Statement below for details.',
      () =>
        wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatement_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'sqliMatchStatement',
      'An SQL injection match condition identifies the part of web requests, such as the URI or the query string, that you want AWS WAF to inspect. See SQL Injection Match Statement below for details.',
      () =>
        wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatement_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'labelMatchStatement',
      'A rule statement that defines a string match search against labels that have been added to the web request by rules that have already run in the web ACL. See Label Match Statement below for details.',
      () =>
        wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementLabelMatchStatement_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'orStatement',
      'A logical rule statement used to combine other rule statements with OR logic. See OR Statement below for details.',
      () =>
        wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementOrStatement_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'xssMatchStatement',
      'A rule statement that defines a cross-site scripting (XSS) match search for AWS WAF to apply to web requests. See XSS Match Statement below for details.',
      () =>
        wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementXssMatchStatement_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'sizeConstraintStatement',
      'A rule statement that compares a number of bytes against the size of a request component, using a comparison operator, such as greater than (>) or less than (<). See Size Constraint Statement below for more details.',
      () =>
        wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatement_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'andStatement',
      'A logical rule statement used to combine other rule statements with AND logic. See AND Statement below for details.',
      () =>
        wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatement_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'geoMatchStatement',
      'A rule statement used to identify web requests based on country of origin. See GEO Match Statement below for details.',
      () =>
        wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementGeoMatchStatement_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'ipSetReferenceStatement',
      'A rule statement used to detect web requests coming from particular IP addresses or address ranges. See IP Set Reference Statement below for details.',
      () =>
        wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementIpSetReferenceStatement_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'notStatement',
      'A logical rule statement used to negate the results of another rule statement. See NOT Statement below for details.',
      () =>
        wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementNotStatement_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'byteMatchStatement',
      'A rule statement that defines a string match search for AWS WAF to apply to web requests. See Byte Match Statement below for details.',
      () =>
        wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementByteMatchStatement_GetTypes(),
      false,
      false,
    ),
  ];
}
