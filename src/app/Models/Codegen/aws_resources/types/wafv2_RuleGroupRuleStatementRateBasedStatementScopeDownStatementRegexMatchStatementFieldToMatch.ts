import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchAllQueryArguments,
  wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchAllQueryArguments_GetTypes,
} from "./wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchAllQueryArguments";
import {
  wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchHeader,
  wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchHeader_GetTypes,
} from "./wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchHeader";
import {
  wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchUriPath,
  wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchUriPath_GetTypes,
} from "./wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchUriPath";
import {
  wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchCookies,
  wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchCookies_GetTypes,
} from "./wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchCookies";
import {
  wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchHeaderOrder,
  wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchHeaderOrder_GetTypes,
} from "./wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchHeaderOrder";
import {
  wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchJsonBody,
  wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchJsonBody_GetTypes,
} from "./wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchJsonBody";
import {
  wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchJa3Fingerprint,
  wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchJa3Fingerprint_GetTypes,
} from "./wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchJa3Fingerprint";
import {
  wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchMethod,
  wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchMethod_GetTypes,
} from "./wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchMethod";
import {
  wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchQueryString,
  wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchQueryString_GetTypes,
} from "./wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchQueryString";
import {
  wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchSingleQueryArgument,
  wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchSingleQueryArgument_GetTypes,
} from "./wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchSingleQueryArgument";
import {
  wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchBody,
  wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchBody_GetTypes,
} from "./wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchBody";
import {
  wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchSingleHeader,
  wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchSingleHeader_GetTypes,
} from "./wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchSingleHeader";

export interface wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatch {
  //
  ja3Fingerprint?: wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchJa3Fingerprint;

  // Inspect the HTTP method. The method indicates the type of operation that the request is asking the origin to perform.
  method?: wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchMethod;

  // Inspect the query string. This is the part of a URL that appears after a `?` character, if any.
  queryString?: wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchQueryString;

  // Inspect a single query argument. See Single Query Argument below for details.
  singleQueryArgument?: wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchSingleQueryArgument;

  // Inspect all query arguments.
  allQueryArguments?: wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchAllQueryArguments;

  // Inspect the request body, which immediately follows the request headers.
  body?: wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchBody;

  // Inspect the request headers. See Headers below for details.
  headers?: Array<wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchHeader>;

  // Inspect a single header. See Single Header below for details.
  singleHeader?: wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchSingleHeader;

  // Inspect the request URI path. This is the part of a web request that identifies a resource, for example, `/images/daily-ad.jpg`.
  uriPath?: wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchUriPath;

  // Inspect the cookies in the web request. See Cookies below for details.
  cookies?: wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchCookies;

  // Inspect the request headers. See Header Order below for details.
  headerOrders?: Array<wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchHeaderOrder>;

  // Inspect the request body as JSON. See JSON Body for details.
  jsonBody?: wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchJsonBody;
}

export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatch_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "singleQueryArgument",
      "Inspect a single query argument. See Single Query Argument below for details.",
      wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchSingleQueryArgument_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "allQueryArguments",
      "Inspect all query arguments.",
      wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchAllQueryArguments_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "uriPath",
      "Inspect the request URI path. This is the part of a web request that identifies a resource, for example, `/images/daily-ad.jpg`.",
      wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchUriPath_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "cookies",
      "Inspect the cookies in the web request. See Cookies below for details.",
      wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchCookies_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "headerOrders",
      "Inspect the request headers. See Header Order below for details.",
      wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchHeaderOrder_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "method",
      "Inspect the HTTP method. The method indicates the type of operation that the request is asking the origin to perform.",
      wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchMethod_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "queryString",
      "Inspect the query string. This is the part of a URL that appears after a `?` character, if any.",
      wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchQueryString_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "body",
      "Inspect the request body, which immediately follows the request headers.",
      wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchBody_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "headers",
      "Inspect the request headers. See Headers below for details.",
      wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchHeader_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "singleHeader",
      "Inspect a single header. See Single Header below for details.",
      wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchSingleHeader_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "jsonBody",
      "Inspect the request body as JSON. See JSON Body for details.",
      wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchJsonBody_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ja3Fingerprint",
      "",
      wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchJa3Fingerprint_GetTypes(),
      false,
      false,
    ),
  ];
}
