import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  wafv2_RuleGroupRuleStatementXssMatchStatementFieldToMatchMethod,
  wafv2_RuleGroupRuleStatementXssMatchStatementFieldToMatchMethod_GetTypes,
} from "./wafv2_RuleGroupRuleStatementXssMatchStatementFieldToMatchMethod";
import {
  wafv2_RuleGroupRuleStatementXssMatchStatementFieldToMatchSingleHeader,
  wafv2_RuleGroupRuleStatementXssMatchStatementFieldToMatchSingleHeader_GetTypes,
} from "./wafv2_RuleGroupRuleStatementXssMatchStatementFieldToMatchSingleHeader";
import {
  wafv2_RuleGroupRuleStatementXssMatchStatementFieldToMatchUriPath,
  wafv2_RuleGroupRuleStatementXssMatchStatementFieldToMatchUriPath_GetTypes,
} from "./wafv2_RuleGroupRuleStatementXssMatchStatementFieldToMatchUriPath";
import {
  wafv2_RuleGroupRuleStatementXssMatchStatementFieldToMatchAllQueryArguments,
  wafv2_RuleGroupRuleStatementXssMatchStatementFieldToMatchAllQueryArguments_GetTypes,
} from "./wafv2_RuleGroupRuleStatementXssMatchStatementFieldToMatchAllQueryArguments";
import {
  wafv2_RuleGroupRuleStatementXssMatchStatementFieldToMatchJa3Fingerprint,
  wafv2_RuleGroupRuleStatementXssMatchStatementFieldToMatchJa3Fingerprint_GetTypes,
} from "./wafv2_RuleGroupRuleStatementXssMatchStatementFieldToMatchJa3Fingerprint";
import {
  wafv2_RuleGroupRuleStatementXssMatchStatementFieldToMatchQueryString,
  wafv2_RuleGroupRuleStatementXssMatchStatementFieldToMatchQueryString_GetTypes,
} from "./wafv2_RuleGroupRuleStatementXssMatchStatementFieldToMatchQueryString";
import {
  wafv2_RuleGroupRuleStatementXssMatchStatementFieldToMatchCookies,
  wafv2_RuleGroupRuleStatementXssMatchStatementFieldToMatchCookies_GetTypes,
} from "./wafv2_RuleGroupRuleStatementXssMatchStatementFieldToMatchCookies";
import {
  wafv2_RuleGroupRuleStatementXssMatchStatementFieldToMatchHeaderOrder,
  wafv2_RuleGroupRuleStatementXssMatchStatementFieldToMatchHeaderOrder_GetTypes,
} from "./wafv2_RuleGroupRuleStatementXssMatchStatementFieldToMatchHeaderOrder";
import {
  wafv2_RuleGroupRuleStatementXssMatchStatementFieldToMatchSingleQueryArgument,
  wafv2_RuleGroupRuleStatementXssMatchStatementFieldToMatchSingleQueryArgument_GetTypes,
} from "./wafv2_RuleGroupRuleStatementXssMatchStatementFieldToMatchSingleQueryArgument";
import {
  wafv2_RuleGroupRuleStatementXssMatchStatementFieldToMatchBody,
  wafv2_RuleGroupRuleStatementXssMatchStatementFieldToMatchBody_GetTypes,
} from "./wafv2_RuleGroupRuleStatementXssMatchStatementFieldToMatchBody";
import {
  wafv2_RuleGroupRuleStatementXssMatchStatementFieldToMatchHeader,
  wafv2_RuleGroupRuleStatementXssMatchStatementFieldToMatchHeader_GetTypes,
} from "./wafv2_RuleGroupRuleStatementXssMatchStatementFieldToMatchHeader";
import {
  wafv2_RuleGroupRuleStatementXssMatchStatementFieldToMatchJsonBody,
  wafv2_RuleGroupRuleStatementXssMatchStatementFieldToMatchJsonBody_GetTypes,
} from "./wafv2_RuleGroupRuleStatementXssMatchStatementFieldToMatchJsonBody";

export interface wafv2_RuleGroupRuleStatementXssMatchStatementFieldToMatch {
  // Inspect the cookies in the web request. See Cookies below for details.
  cookies?: wafv2_RuleGroupRuleStatementXssMatchStatementFieldToMatchCookies;

  // Inspect the request headers. See Header Order below for details.
  headerOrders?: Array<wafv2_RuleGroupRuleStatementXssMatchStatementFieldToMatchHeaderOrder>;

  // Inspect the HTTP method. The method indicates the type of operation that the request is asking the origin to perform.
  method?: wafv2_RuleGroupRuleStatementXssMatchStatementFieldToMatchMethod;

  // Inspect a single header. See Single Header below for details.
  singleHeader?: wafv2_RuleGroupRuleStatementXssMatchStatementFieldToMatchSingleHeader;

  // Inspect a single query argument. See Single Query Argument below for details.
  singleQueryArgument?: wafv2_RuleGroupRuleStatementXssMatchStatementFieldToMatchSingleQueryArgument;

  // Inspect the request URI path. This is the part of a web request that identifies a resource, for example, `/images/daily-ad.jpg`.
  uriPath?: wafv2_RuleGroupRuleStatementXssMatchStatementFieldToMatchUriPath;

  // Inspect all query arguments.
  allQueryArguments?: wafv2_RuleGroupRuleStatementXssMatchStatementFieldToMatchAllQueryArguments;

  // Inspect the request body, which immediately follows the request headers.
  body?: wafv2_RuleGroupRuleStatementXssMatchStatementFieldToMatchBody;

  // Inspect the request headers. See Headers below for details.
  headers?: Array<wafv2_RuleGroupRuleStatementXssMatchStatementFieldToMatchHeader>;

  //
  ja3Fingerprint?: wafv2_RuleGroupRuleStatementXssMatchStatementFieldToMatchJa3Fingerprint;

  // Inspect the request body as JSON. See JSON Body for details.
  jsonBody?: wafv2_RuleGroupRuleStatementXssMatchStatementFieldToMatchJsonBody;

  // Inspect the query string. This is the part of a URL that appears after a `?` character, if any.
  queryString?: wafv2_RuleGroupRuleStatementXssMatchStatementFieldToMatchQueryString;
}

export function wafv2_RuleGroupRuleStatementXssMatchStatementFieldToMatch_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "cookies",
      "Inspect the cookies in the web request. See Cookies below for details.",
      wafv2_RuleGroupRuleStatementXssMatchStatementFieldToMatchCookies_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "headerOrders",
      "Inspect the request headers. See Header Order below for details.",
      wafv2_RuleGroupRuleStatementXssMatchStatementFieldToMatchHeaderOrder_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "method",
      "Inspect the HTTP method. The method indicates the type of operation that the request is asking the origin to perform.",
      wafv2_RuleGroupRuleStatementXssMatchStatementFieldToMatchMethod_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "singleQueryArgument",
      "Inspect a single query argument. See Single Query Argument below for details.",
      wafv2_RuleGroupRuleStatementXssMatchStatementFieldToMatchSingleQueryArgument_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "uriPath",
      "Inspect the request URI path. This is the part of a web request that identifies a resource, for example, `/images/daily-ad.jpg`.",
      wafv2_RuleGroupRuleStatementXssMatchStatementFieldToMatchUriPath_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "body",
      "Inspect the request body, which immediately follows the request headers.",
      wafv2_RuleGroupRuleStatementXssMatchStatementFieldToMatchBody_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "jsonBody",
      "Inspect the request body as JSON. See JSON Body for details.",
      wafv2_RuleGroupRuleStatementXssMatchStatementFieldToMatchJsonBody_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "singleHeader",
      "Inspect a single header. See Single Header below for details.",
      wafv2_RuleGroupRuleStatementXssMatchStatementFieldToMatchSingleHeader_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "allQueryArguments",
      "Inspect all query arguments.",
      wafv2_RuleGroupRuleStatementXssMatchStatementFieldToMatchAllQueryArguments_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "headers",
      "Inspect the request headers. See Headers below for details.",
      wafv2_RuleGroupRuleStatementXssMatchStatementFieldToMatchHeader_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ja3Fingerprint",
      "",
      wafv2_RuleGroupRuleStatementXssMatchStatementFieldToMatchJa3Fingerprint_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "queryString",
      "Inspect the query string. This is the part of a URL that appears after a `?` character, if any.",
      wafv2_RuleGroupRuleStatementXssMatchStatementFieldToMatchQueryString_GetTypes(),
      false,
      false,
    ),
  ];
}
