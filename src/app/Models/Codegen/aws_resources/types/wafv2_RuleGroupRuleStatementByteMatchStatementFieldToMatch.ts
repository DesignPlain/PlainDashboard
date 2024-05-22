import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  wafv2_RuleGroupRuleStatementByteMatchStatementFieldToMatchCookies,
  wafv2_RuleGroupRuleStatementByteMatchStatementFieldToMatchCookies_GetTypes,
} from "./wafv2_RuleGroupRuleStatementByteMatchStatementFieldToMatchCookies";
import {
  wafv2_RuleGroupRuleStatementByteMatchStatementFieldToMatchHeaderOrder,
  wafv2_RuleGroupRuleStatementByteMatchStatementFieldToMatchHeaderOrder_GetTypes,
} from "./wafv2_RuleGroupRuleStatementByteMatchStatementFieldToMatchHeaderOrder";
import {
  wafv2_RuleGroupRuleStatementByteMatchStatementFieldToMatchJa3Fingerprint,
  wafv2_RuleGroupRuleStatementByteMatchStatementFieldToMatchJa3Fingerprint_GetTypes,
} from "./wafv2_RuleGroupRuleStatementByteMatchStatementFieldToMatchJa3Fingerprint";
import {
  wafv2_RuleGroupRuleStatementByteMatchStatementFieldToMatchUriPath,
  wafv2_RuleGroupRuleStatementByteMatchStatementFieldToMatchUriPath_GetTypes,
} from "./wafv2_RuleGroupRuleStatementByteMatchStatementFieldToMatchUriPath";
import {
  wafv2_RuleGroupRuleStatementByteMatchStatementFieldToMatchAllQueryArguments,
  wafv2_RuleGroupRuleStatementByteMatchStatementFieldToMatchAllQueryArguments_GetTypes,
} from "./wafv2_RuleGroupRuleStatementByteMatchStatementFieldToMatchAllQueryArguments";
import {
  wafv2_RuleGroupRuleStatementByteMatchStatementFieldToMatchBody,
  wafv2_RuleGroupRuleStatementByteMatchStatementFieldToMatchBody_GetTypes,
} from "./wafv2_RuleGroupRuleStatementByteMatchStatementFieldToMatchBody";
import {
  wafv2_RuleGroupRuleStatementByteMatchStatementFieldToMatchHeader,
  wafv2_RuleGroupRuleStatementByteMatchStatementFieldToMatchHeader_GetTypes,
} from "./wafv2_RuleGroupRuleStatementByteMatchStatementFieldToMatchHeader";
import {
  wafv2_RuleGroupRuleStatementByteMatchStatementFieldToMatchJsonBody,
  wafv2_RuleGroupRuleStatementByteMatchStatementFieldToMatchJsonBody_GetTypes,
} from "./wafv2_RuleGroupRuleStatementByteMatchStatementFieldToMatchJsonBody";
import {
  wafv2_RuleGroupRuleStatementByteMatchStatementFieldToMatchMethod,
  wafv2_RuleGroupRuleStatementByteMatchStatementFieldToMatchMethod_GetTypes,
} from "./wafv2_RuleGroupRuleStatementByteMatchStatementFieldToMatchMethod";
import {
  wafv2_RuleGroupRuleStatementByteMatchStatementFieldToMatchQueryString,
  wafv2_RuleGroupRuleStatementByteMatchStatementFieldToMatchQueryString_GetTypes,
} from "./wafv2_RuleGroupRuleStatementByteMatchStatementFieldToMatchQueryString";
import {
  wafv2_RuleGroupRuleStatementByteMatchStatementFieldToMatchSingleHeader,
  wafv2_RuleGroupRuleStatementByteMatchStatementFieldToMatchSingleHeader_GetTypes,
} from "./wafv2_RuleGroupRuleStatementByteMatchStatementFieldToMatchSingleHeader";
import {
  wafv2_RuleGroupRuleStatementByteMatchStatementFieldToMatchSingleQueryArgument,
  wafv2_RuleGroupRuleStatementByteMatchStatementFieldToMatchSingleQueryArgument_GetTypes,
} from "./wafv2_RuleGroupRuleStatementByteMatchStatementFieldToMatchSingleQueryArgument";

export interface wafv2_RuleGroupRuleStatementByteMatchStatementFieldToMatch {
  // Inspect all query arguments.
  allQueryArguments?: wafv2_RuleGroupRuleStatementByteMatchStatementFieldToMatchAllQueryArguments;

  // Inspect the cookies in the web request. See Cookies below for details.
  cookies?: wafv2_RuleGroupRuleStatementByteMatchStatementFieldToMatchCookies;

  // Inspect the request headers. See Header Order below for details.
  headerOrders?: Array<wafv2_RuleGroupRuleStatementByteMatchStatementFieldToMatchHeaderOrder>;

  //
  ja3Fingerprint?: wafv2_RuleGroupRuleStatementByteMatchStatementFieldToMatchJa3Fingerprint;

  // Inspect a single query argument. See Single Query Argument below for details.
  singleQueryArgument?: wafv2_RuleGroupRuleStatementByteMatchStatementFieldToMatchSingleQueryArgument;

  // Inspect the request body, which immediately follows the request headers.
  body?: wafv2_RuleGroupRuleStatementByteMatchStatementFieldToMatchBody;

  // Inspect the request headers. See Headers below for details.
  headers?: Array<wafv2_RuleGroupRuleStatementByteMatchStatementFieldToMatchHeader>;

  // Inspect the request body as JSON. See JSON Body for details.
  jsonBody?: wafv2_RuleGroupRuleStatementByteMatchStatementFieldToMatchJsonBody;

  // Inspect the HTTP method. The method indicates the type of operation that the request is asking the origin to perform.
  method?: wafv2_RuleGroupRuleStatementByteMatchStatementFieldToMatchMethod;

  // Inspect the query string. This is the part of a URL that appears after a `?` character, if any.
  queryString?: wafv2_RuleGroupRuleStatementByteMatchStatementFieldToMatchQueryString;

  // Inspect a single header. See Single Header below for details.
  singleHeader?: wafv2_RuleGroupRuleStatementByteMatchStatementFieldToMatchSingleHeader;

  // Inspect the request URI path. This is the part of a web request that identifies a resource, for example, `/images/daily-ad.jpg`.
  uriPath?: wafv2_RuleGroupRuleStatementByteMatchStatementFieldToMatchUriPath;
}

export function wafv2_RuleGroupRuleStatementByteMatchStatementFieldToMatch_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "queryString",
      "Inspect the query string. This is the part of a URL that appears after a `?` character, if any.",
      wafv2_RuleGroupRuleStatementByteMatchStatementFieldToMatchQueryString_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "singleHeader",
      "Inspect a single header. See Single Header below for details.",
      wafv2_RuleGroupRuleStatementByteMatchStatementFieldToMatchSingleHeader_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "uriPath",
      "Inspect the request URI path. This is the part of a web request that identifies a resource, for example, `/images/daily-ad.jpg`.",
      wafv2_RuleGroupRuleStatementByteMatchStatementFieldToMatchUriPath_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "cookies",
      "Inspect the cookies in the web request. See Cookies below for details.",
      wafv2_RuleGroupRuleStatementByteMatchStatementFieldToMatchCookies_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "headerOrders",
      "Inspect the request headers. See Header Order below for details.",
      wafv2_RuleGroupRuleStatementByteMatchStatementFieldToMatchHeaderOrder_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "body",
      "Inspect the request body, which immediately follows the request headers.",
      wafv2_RuleGroupRuleStatementByteMatchStatementFieldToMatchBody_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "jsonBody",
      "Inspect the request body as JSON. See JSON Body for details.",
      wafv2_RuleGroupRuleStatementByteMatchStatementFieldToMatchJsonBody_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "method",
      "Inspect the HTTP method. The method indicates the type of operation that the request is asking the origin to perform.",
      wafv2_RuleGroupRuleStatementByteMatchStatementFieldToMatchMethod_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "allQueryArguments",
      "Inspect all query arguments.",
      wafv2_RuleGroupRuleStatementByteMatchStatementFieldToMatchAllQueryArguments_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ja3Fingerprint",
      "",
      wafv2_RuleGroupRuleStatementByteMatchStatementFieldToMatchJa3Fingerprint_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "singleQueryArgument",
      "Inspect a single query argument. See Single Query Argument below for details.",
      wafv2_RuleGroupRuleStatementByteMatchStatementFieldToMatchSingleQueryArgument_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "headers",
      "Inspect the request headers. See Headers below for details.",
      wafv2_RuleGroupRuleStatementByteMatchStatementFieldToMatchHeader_GetTypes(),
      false,
      false,
    ),
  ];
}
