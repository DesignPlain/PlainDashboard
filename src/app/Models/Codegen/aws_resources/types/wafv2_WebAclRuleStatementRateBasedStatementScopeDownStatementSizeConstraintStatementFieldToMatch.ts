import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchUriPath,
  wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchUriPath_GetTypes,
} from "./wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchUriPath";
import {
  wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchHeader,
  wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchHeader_GetTypes,
} from "./wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchHeader";
import {
  wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchHeaderOrder,
  wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchHeaderOrder_GetTypes,
} from "./wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchHeaderOrder";
import {
  wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchJsonBody,
  wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchJsonBody_GetTypes,
} from "./wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchJsonBody";
import {
  wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchBody,
  wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchBody_GetTypes,
} from "./wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchBody";
import {
  wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchCookies,
  wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchCookies_GetTypes,
} from "./wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchCookies";
import {
  wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchSingleQueryArgument,
  wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchSingleQueryArgument_GetTypes,
} from "./wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchSingleQueryArgument";
import {
  wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchMethod,
  wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchMethod_GetTypes,
} from "./wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchMethod";
import {
  wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchSingleHeader,
  wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchSingleHeader_GetTypes,
} from "./wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchSingleHeader";
import {
  wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchJa3Fingerprint,
  wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchJa3Fingerprint_GetTypes,
} from "./wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchJa3Fingerprint";
import {
  wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchQueryString,
  wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchQueryString_GetTypes,
} from "./wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchQueryString";
import {
  wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchAllQueryArguments,
  wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchAllQueryArguments_GetTypes,
} from "./wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchAllQueryArguments";

export interface wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatch {
  // Inspect a single query argument. See `single_query_argument` below for details.
  singleQueryArgument?: wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchSingleQueryArgument;

  // Inspect the request URI path. This is the part of a web request that identifies a resource, for example, `/images/daily-ad.jpg`.
  uriPath?: wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchUriPath;

  // Inspect the request headers. See `headers` below for details.
  headers?: Array<wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchHeader>;

  // Inspect the HTTP method. The method indicates the type of operation that the request is asking the origin to perform.
  method?: wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchMethod;

  // Inspect a single header. See `single_header` below for details.
  singleHeader?: wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchSingleHeader;

  // Inspect a string containing the list of the request's header names, ordered as they appear in the web request that AWS WAF receives for inspection. See `header_order` below for details.
  headerOrders?: Array<wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchHeaderOrder>;

  // Inspect the JA3 fingerprint. See `ja3_fingerprint` below for details.
  ja3Fingerprint?: wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchJa3Fingerprint;

  // Inspect the request body as JSON. See `json_body` for details.
  jsonBody?: wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchJsonBody;

  // Inspect the query string. This is the part of a URL that appears after a `?` character, if any.
  queryString?: wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchQueryString;

  // Inspect all query arguments.
  allQueryArguments?: wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchAllQueryArguments;

  // Inspect the request body, which immediately follows the request headers. See `body` below for details.
  body?: wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchBody;

  // Inspect the cookies in the web request. See `cookies` below for details.
  cookies?: wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchCookies;
}

export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatch_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "singleHeader",
      "Inspect a single header. See `single_header` below for details.",
      wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchSingleHeader_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ja3Fingerprint",
      "Inspect the JA3 fingerprint. See `ja3_fingerprint` below for details.",
      wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchJa3Fingerprint_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "jsonBody",
      "Inspect the request body as JSON. See `json_body` for details.",
      wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchJsonBody_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "singleQueryArgument",
      "Inspect a single query argument. See `single_query_argument` below for details.",
      wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchSingleQueryArgument_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "uriPath",
      "Inspect the request URI path. This is the part of a web request that identifies a resource, for example, `/images/daily-ad.jpg`.",
      wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchUriPath_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "method",
      "Inspect the HTTP method. The method indicates the type of operation that the request is asking the origin to perform.",
      wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchMethod_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "allQueryArguments",
      "Inspect all query arguments.",
      wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchAllQueryArguments_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "body",
      "Inspect the request body, which immediately follows the request headers. See `body` below for details.",
      wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchBody_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "cookies",
      "Inspect the cookies in the web request. See `cookies` below for details.",
      wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchCookies_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "headers",
      "Inspect the request headers. See `headers` below for details.",
      wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchHeader_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "headerOrders",
      "Inspect a string containing the list of the request's header names, ordered as they appear in the web request that AWS WAF receives for inspection. See `header_order` below for details.",
      wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchHeaderOrder_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "queryString",
      "Inspect the query string. This is the part of a URL that appears after a `?` character, if any.",
      wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchQueryString_GetTypes(),
      false,
      false,
    ),
  ];
}
