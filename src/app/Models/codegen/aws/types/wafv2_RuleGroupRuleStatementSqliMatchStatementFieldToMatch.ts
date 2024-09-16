import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  wafv2_RuleGroupRuleStatementSqliMatchStatementFieldToMatchHeaderOrder,
  wafv2_RuleGroupRuleStatementSqliMatchStatementFieldToMatchHeaderOrder_GetTypes,
} from './wafv2_RuleGroupRuleStatementSqliMatchStatementFieldToMatchHeaderOrder';
import {
  wafv2_RuleGroupRuleStatementSqliMatchStatementFieldToMatchJsonBody,
  wafv2_RuleGroupRuleStatementSqliMatchStatementFieldToMatchJsonBody_GetTypes,
} from './wafv2_RuleGroupRuleStatementSqliMatchStatementFieldToMatchJsonBody';
import {
  wafv2_RuleGroupRuleStatementSqliMatchStatementFieldToMatchSingleQueryArgument,
  wafv2_RuleGroupRuleStatementSqliMatchStatementFieldToMatchSingleQueryArgument_GetTypes,
} from './wafv2_RuleGroupRuleStatementSqliMatchStatementFieldToMatchSingleQueryArgument';
import {
  wafv2_RuleGroupRuleStatementSqliMatchStatementFieldToMatchAllQueryArguments,
  wafv2_RuleGroupRuleStatementSqliMatchStatementFieldToMatchAllQueryArguments_GetTypes,
} from './wafv2_RuleGroupRuleStatementSqliMatchStatementFieldToMatchAllQueryArguments';
import {
  wafv2_RuleGroupRuleStatementSqliMatchStatementFieldToMatchBody,
  wafv2_RuleGroupRuleStatementSqliMatchStatementFieldToMatchBody_GetTypes,
} from './wafv2_RuleGroupRuleStatementSqliMatchStatementFieldToMatchBody';
import {
  wafv2_RuleGroupRuleStatementSqliMatchStatementFieldToMatchCookies,
  wafv2_RuleGroupRuleStatementSqliMatchStatementFieldToMatchCookies_GetTypes,
} from './wafv2_RuleGroupRuleStatementSqliMatchStatementFieldToMatchCookies';
import {
  wafv2_RuleGroupRuleStatementSqliMatchStatementFieldToMatchUriPath,
  wafv2_RuleGroupRuleStatementSqliMatchStatementFieldToMatchUriPath_GetTypes,
} from './wafv2_RuleGroupRuleStatementSqliMatchStatementFieldToMatchUriPath';
import {
  wafv2_RuleGroupRuleStatementSqliMatchStatementFieldToMatchQueryString,
  wafv2_RuleGroupRuleStatementSqliMatchStatementFieldToMatchQueryString_GetTypes,
} from './wafv2_RuleGroupRuleStatementSqliMatchStatementFieldToMatchQueryString';
import {
  wafv2_RuleGroupRuleStatementSqliMatchStatementFieldToMatchMethod,
  wafv2_RuleGroupRuleStatementSqliMatchStatementFieldToMatchMethod_GetTypes,
} from './wafv2_RuleGroupRuleStatementSqliMatchStatementFieldToMatchMethod';
import {
  wafv2_RuleGroupRuleStatementSqliMatchStatementFieldToMatchHeader,
  wafv2_RuleGroupRuleStatementSqliMatchStatementFieldToMatchHeader_GetTypes,
} from './wafv2_RuleGroupRuleStatementSqliMatchStatementFieldToMatchHeader';
import {
  wafv2_RuleGroupRuleStatementSqliMatchStatementFieldToMatchJa3Fingerprint,
  wafv2_RuleGroupRuleStatementSqliMatchStatementFieldToMatchJa3Fingerprint_GetTypes,
} from './wafv2_RuleGroupRuleStatementSqliMatchStatementFieldToMatchJa3Fingerprint';
import {
  wafv2_RuleGroupRuleStatementSqliMatchStatementFieldToMatchSingleHeader,
  wafv2_RuleGroupRuleStatementSqliMatchStatementFieldToMatchSingleHeader_GetTypes,
} from './wafv2_RuleGroupRuleStatementSqliMatchStatementFieldToMatchSingleHeader';

export interface wafv2_RuleGroupRuleStatementSqliMatchStatementFieldToMatch {
  // Inspect the HTTP method. The method indicates the type of operation that the request is asking the origin to perform.
  method?: wafv2_RuleGroupRuleStatementSqliMatchStatementFieldToMatchMethod;

  // Inspect a single query argument. See Single Query Argument below for details.
  singleQueryArgument?: wafv2_RuleGroupRuleStatementSqliMatchStatementFieldToMatchSingleQueryArgument;

  // Inspect all query arguments.
  allQueryArguments?: wafv2_RuleGroupRuleStatementSqliMatchStatementFieldToMatchAllQueryArguments;

  // Inspect the request body, which immediately follows the request headers.
  body?: wafv2_RuleGroupRuleStatementSqliMatchStatementFieldToMatchBody;

  // Inspect the request headers. See Headers below for details.
  headers?: Array<wafv2_RuleGroupRuleStatementSqliMatchStatementFieldToMatchHeader>;

  //
  ja3Fingerprint?: wafv2_RuleGroupRuleStatementSqliMatchStatementFieldToMatchJa3Fingerprint;

  // Inspect a single header. See Single Header below for details.
  singleHeader?: wafv2_RuleGroupRuleStatementSqliMatchStatementFieldToMatchSingleHeader;

  // Inspect the request URI path. This is the part of a web request that identifies a resource, for example, `/images/daily-ad.jpg`.
  uriPath?: wafv2_RuleGroupRuleStatementSqliMatchStatementFieldToMatchUriPath;

  // Inspect the cookies in the web request. See Cookies below for details.
  cookies?: wafv2_RuleGroupRuleStatementSqliMatchStatementFieldToMatchCookies;

  // Inspect the request headers. See Header Order below for details.
  headerOrders?: Array<wafv2_RuleGroupRuleStatementSqliMatchStatementFieldToMatchHeaderOrder>;

  // Inspect the request body as JSON. See JSON Body for details.
  jsonBody?: wafv2_RuleGroupRuleStatementSqliMatchStatementFieldToMatchJsonBody;

  // Inspect the query string. This is the part of a URL that appears after a `?` character, if any.
  queryString?: wafv2_RuleGroupRuleStatementSqliMatchStatementFieldToMatchQueryString;
}

export function wafv2_RuleGroupRuleStatementSqliMatchStatementFieldToMatch_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'method',
      'Inspect the HTTP method. The method indicates the type of operation that the request is asking the origin to perform.',
      () =>
        wafv2_RuleGroupRuleStatementSqliMatchStatementFieldToMatchMethod_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'singleQueryArgument',
      'Inspect a single query argument. See Single Query Argument below for details.',
      () =>
        wafv2_RuleGroupRuleStatementSqliMatchStatementFieldToMatchSingleQueryArgument_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'allQueryArguments',
      'Inspect all query arguments.',
      () =>
        wafv2_RuleGroupRuleStatementSqliMatchStatementFieldToMatchAllQueryArguments_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'body',
      'Inspect the request body, which immediately follows the request headers.',
      () =>
        wafv2_RuleGroupRuleStatementSqliMatchStatementFieldToMatchBody_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'headers',
      'Inspect the request headers. See Headers below for details.',
      () =>
        wafv2_RuleGroupRuleStatementSqliMatchStatementFieldToMatchHeader_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'uriPath',
      'Inspect the request URI path. This is the part of a web request that identifies a resource, for example, `/images/daily-ad.jpg`.',
      () =>
        wafv2_RuleGroupRuleStatementSqliMatchStatementFieldToMatchUriPath_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'jsonBody',
      'Inspect the request body as JSON. See JSON Body for details.',
      () =>
        wafv2_RuleGroupRuleStatementSqliMatchStatementFieldToMatchJsonBody_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'ja3Fingerprint',
      '',
      () =>
        wafv2_RuleGroupRuleStatementSqliMatchStatementFieldToMatchJa3Fingerprint_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'singleHeader',
      'Inspect a single header. See Single Header below for details.',
      () =>
        wafv2_RuleGroupRuleStatementSqliMatchStatementFieldToMatchSingleHeader_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'cookies',
      'Inspect the cookies in the web request. See Cookies below for details.',
      () =>
        wafv2_RuleGroupRuleStatementSqliMatchStatementFieldToMatchCookies_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'headerOrders',
      'Inspect the request headers. See Header Order below for details.',
      () =>
        wafv2_RuleGroupRuleStatementSqliMatchStatementFieldToMatchHeaderOrder_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'queryString',
      'Inspect the query string. This is the part of a URL that appears after a `?` character, if any.',
      () =>
        wafv2_RuleGroupRuleStatementSqliMatchStatementFieldToMatchQueryString_GetTypes(),
      false,
      false,
    ),
  ];
}
