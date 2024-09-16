import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  wafv2_RuleGroupRuleStatementRegexMatchStatementFieldToMatchBody,
  wafv2_RuleGroupRuleStatementRegexMatchStatementFieldToMatchBody_GetTypes,
} from './wafv2_RuleGroupRuleStatementRegexMatchStatementFieldToMatchBody';
import {
  wafv2_RuleGroupRuleStatementRegexMatchStatementFieldToMatchJsonBody,
  wafv2_RuleGroupRuleStatementRegexMatchStatementFieldToMatchJsonBody_GetTypes,
} from './wafv2_RuleGroupRuleStatementRegexMatchStatementFieldToMatchJsonBody';
import {
  wafv2_RuleGroupRuleStatementRegexMatchStatementFieldToMatchQueryString,
  wafv2_RuleGroupRuleStatementRegexMatchStatementFieldToMatchQueryString_GetTypes,
} from './wafv2_RuleGroupRuleStatementRegexMatchStatementFieldToMatchQueryString';
import {
  wafv2_RuleGroupRuleStatementRegexMatchStatementFieldToMatchSingleHeader,
  wafv2_RuleGroupRuleStatementRegexMatchStatementFieldToMatchSingleHeader_GetTypes,
} from './wafv2_RuleGroupRuleStatementRegexMatchStatementFieldToMatchSingleHeader';
import {
  wafv2_RuleGroupRuleStatementRegexMatchStatementFieldToMatchSingleQueryArgument,
  wafv2_RuleGroupRuleStatementRegexMatchStatementFieldToMatchSingleQueryArgument_GetTypes,
} from './wafv2_RuleGroupRuleStatementRegexMatchStatementFieldToMatchSingleQueryArgument';
import {
  wafv2_RuleGroupRuleStatementRegexMatchStatementFieldToMatchUriPath,
  wafv2_RuleGroupRuleStatementRegexMatchStatementFieldToMatchUriPath_GetTypes,
} from './wafv2_RuleGroupRuleStatementRegexMatchStatementFieldToMatchUriPath';
import {
  wafv2_RuleGroupRuleStatementRegexMatchStatementFieldToMatchAllQueryArguments,
  wafv2_RuleGroupRuleStatementRegexMatchStatementFieldToMatchAllQueryArguments_GetTypes,
} from './wafv2_RuleGroupRuleStatementRegexMatchStatementFieldToMatchAllQueryArguments';
import {
  wafv2_RuleGroupRuleStatementRegexMatchStatementFieldToMatchCookies,
  wafv2_RuleGroupRuleStatementRegexMatchStatementFieldToMatchCookies_GetTypes,
} from './wafv2_RuleGroupRuleStatementRegexMatchStatementFieldToMatchCookies';
import {
  wafv2_RuleGroupRuleStatementRegexMatchStatementFieldToMatchJa3Fingerprint,
  wafv2_RuleGroupRuleStatementRegexMatchStatementFieldToMatchJa3Fingerprint_GetTypes,
} from './wafv2_RuleGroupRuleStatementRegexMatchStatementFieldToMatchJa3Fingerprint';
import {
  wafv2_RuleGroupRuleStatementRegexMatchStatementFieldToMatchHeaderOrder,
  wafv2_RuleGroupRuleStatementRegexMatchStatementFieldToMatchHeaderOrder_GetTypes,
} from './wafv2_RuleGroupRuleStatementRegexMatchStatementFieldToMatchHeaderOrder';
import {
  wafv2_RuleGroupRuleStatementRegexMatchStatementFieldToMatchHeader,
  wafv2_RuleGroupRuleStatementRegexMatchStatementFieldToMatchHeader_GetTypes,
} from './wafv2_RuleGroupRuleStatementRegexMatchStatementFieldToMatchHeader';
import {
  wafv2_RuleGroupRuleStatementRegexMatchStatementFieldToMatchMethod,
  wafv2_RuleGroupRuleStatementRegexMatchStatementFieldToMatchMethod_GetTypes,
} from './wafv2_RuleGroupRuleStatementRegexMatchStatementFieldToMatchMethod';

export interface wafv2_RuleGroupRuleStatementRegexMatchStatementFieldToMatch {
  // Inspect the request body, which immediately follows the request headers.
  body?: wafv2_RuleGroupRuleStatementRegexMatchStatementFieldToMatchBody;

  // Inspect the cookies in the web request. See Cookies below for details.
  cookies?: wafv2_RuleGroupRuleStatementRegexMatchStatementFieldToMatchCookies;

  //
  ja3Fingerprint?: wafv2_RuleGroupRuleStatementRegexMatchStatementFieldToMatchJa3Fingerprint;

  // Inspect the request body as JSON. See JSON Body for details.
  jsonBody?: wafv2_RuleGroupRuleStatementRegexMatchStatementFieldToMatchJsonBody;

  // Inspect the query string. This is the part of a URL that appears after a `?` character, if any.
  queryString?: wafv2_RuleGroupRuleStatementRegexMatchStatementFieldToMatchQueryString;

  // Inspect a single header. See Single Header below for details.
  singleHeader?: wafv2_RuleGroupRuleStatementRegexMatchStatementFieldToMatchSingleHeader;

  // Inspect a single query argument. See Single Query Argument below for details.
  singleQueryArgument?: wafv2_RuleGroupRuleStatementRegexMatchStatementFieldToMatchSingleQueryArgument;

  // Inspect the request URI path. This is the part of a web request that identifies a resource, for example, `/images/daily-ad.jpg`.
  uriPath?: wafv2_RuleGroupRuleStatementRegexMatchStatementFieldToMatchUriPath;

  // Inspect all query arguments.
  allQueryArguments?: wafv2_RuleGroupRuleStatementRegexMatchStatementFieldToMatchAllQueryArguments;

  // Inspect the request headers. See Header Order below for details.
  headerOrders?: Array<wafv2_RuleGroupRuleStatementRegexMatchStatementFieldToMatchHeaderOrder>;

  // Inspect the request headers. See Headers below for details.
  headers?: Array<wafv2_RuleGroupRuleStatementRegexMatchStatementFieldToMatchHeader>;

  // Inspect the HTTP method. The method indicates the type of operation that the request is asking the origin to perform.
  method?: wafv2_RuleGroupRuleStatementRegexMatchStatementFieldToMatchMethod;
}

export function wafv2_RuleGroupRuleStatementRegexMatchStatementFieldToMatch_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'headers',
      'Inspect the request headers. See Headers below for details.',
      () =>
        wafv2_RuleGroupRuleStatementRegexMatchStatementFieldToMatchHeader_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'cookies',
      'Inspect the cookies in the web request. See Cookies below for details.',
      () =>
        wafv2_RuleGroupRuleStatementRegexMatchStatementFieldToMatchCookies_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'ja3Fingerprint',
      '',
      () =>
        wafv2_RuleGroupRuleStatementRegexMatchStatementFieldToMatchJa3Fingerprint_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'jsonBody',
      'Inspect the request body as JSON. See JSON Body for details.',
      () =>
        wafv2_RuleGroupRuleStatementRegexMatchStatementFieldToMatchJsonBody_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'queryString',
      'Inspect the query string. This is the part of a URL that appears after a `?` character, if any.',
      () =>
        wafv2_RuleGroupRuleStatementRegexMatchStatementFieldToMatchQueryString_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'uriPath',
      'Inspect the request URI path. This is the part of a web request that identifies a resource, for example, `/images/daily-ad.jpg`.',
      () =>
        wafv2_RuleGroupRuleStatementRegexMatchStatementFieldToMatchUriPath_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'method',
      'Inspect the HTTP method. The method indicates the type of operation that the request is asking the origin to perform.',
      () =>
        wafv2_RuleGroupRuleStatementRegexMatchStatementFieldToMatchMethod_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'body',
      'Inspect the request body, which immediately follows the request headers.',
      () =>
        wafv2_RuleGroupRuleStatementRegexMatchStatementFieldToMatchBody_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'singleHeader',
      'Inspect a single header. See Single Header below for details.',
      () =>
        wafv2_RuleGroupRuleStatementRegexMatchStatementFieldToMatchSingleHeader_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'singleQueryArgument',
      'Inspect a single query argument. See Single Query Argument below for details.',
      () =>
        wafv2_RuleGroupRuleStatementRegexMatchStatementFieldToMatchSingleQueryArgument_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'allQueryArguments',
      'Inspect all query arguments.',
      () =>
        wafv2_RuleGroupRuleStatementRegexMatchStatementFieldToMatchAllQueryArguments_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'headerOrders',
      'Inspect the request headers. See Header Order below for details.',
      () =>
        wafv2_RuleGroupRuleStatementRegexMatchStatementFieldToMatchHeaderOrder_GetTypes(),
      false,
      false,
    ),
  ];
}
