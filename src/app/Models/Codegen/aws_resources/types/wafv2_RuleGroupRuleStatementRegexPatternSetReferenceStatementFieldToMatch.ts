import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments,
  wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments_GetTypes,
} from "./wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments";
import {
  wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchJsonBody,
  wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchJsonBody_GetTypes,
} from "./wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchJsonBody";
import {
  wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader,
  wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader_GetTypes,
} from "./wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader";
import {
  wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchUriPath,
  wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchUriPath_GetTypes,
} from "./wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchUriPath";
import {
  wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchHeader,
  wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchHeader_GetTypes,
} from "./wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchHeader";
import {
  wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchHeaderOrder,
  wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchHeaderOrder_GetTypes,
} from "./wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchHeaderOrder";
import {
  wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchQueryString,
  wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchQueryString_GetTypes,
} from "./wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchQueryString";
import {
  wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchBody,
  wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchBody_GetTypes,
} from "./wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchBody";
import {
  wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchCookies,
  wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchCookies_GetTypes,
} from "./wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchCookies";
import {
  wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchJa3Fingerprint,
  wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchJa3Fingerprint_GetTypes,
} from "./wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchJa3Fingerprint";
import {
  wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchMethod,
  wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchMethod_GetTypes,
} from "./wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchMethod";
import {
  wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument,
  wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument_GetTypes,
} from "./wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument";

export interface wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatch {
  // Inspect all query arguments.
  allQueryArguments?: wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments;

  // Inspect the request headers. See Header Order below for details.
  headerOrders?: Array<wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchHeaderOrder>;

  // Inspect the request body as JSON. See JSON Body for details.
  jsonBody?: wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchJsonBody;

  // Inspect the query string. This is the part of a URL that appears after a `?` character, if any.
  queryString?: wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchQueryString;

  // Inspect a single header. See Single Header below for details.
  singleHeader?: wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader;

  // Inspect the request URI path. This is the part of a web request that identifies a resource, for example, `/images/daily-ad.jpg`.
  uriPath?: wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchUriPath;

  // Inspect the request body, which immediately follows the request headers.
  body?: wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchBody;

  // Inspect the cookies in the web request. See Cookies below for details.
  cookies?: wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchCookies;

  // Inspect the request headers. See Headers below for details.
  headers?: Array<wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchHeader>;

  //
  ja3Fingerprint?: wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchJa3Fingerprint;

  // Inspect the HTTP method. The method indicates the type of operation that the request is asking the origin to perform.
  method?: wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchMethod;

  // Inspect a single query argument. See Single Query Argument below for details.
  singleQueryArgument?: wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument;
}

export function wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatch_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "queryString",
      "Inspect the query string. This is the part of a URL that appears after a `?` character, if any.",
      wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchQueryString_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ja3Fingerprint",
      "",
      wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchJa3Fingerprint_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "singleQueryArgument",
      "Inspect a single query argument. See Single Query Argument below for details.",
      wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "allQueryArguments",
      "Inspect all query arguments.",
      wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "jsonBody",
      "Inspect the request body as JSON. See JSON Body for details.",
      wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchJsonBody_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "uriPath",
      "Inspect the request URI path. This is the part of a web request that identifies a resource, for example, `/images/daily-ad.jpg`.",
      wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchUriPath_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "body",
      "Inspect the request body, which immediately follows the request headers.",
      wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchBody_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "cookies",
      "Inspect the cookies in the web request. See Cookies below for details.",
      wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchCookies_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "headers",
      "Inspect the request headers. See Headers below for details.",
      wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchHeader_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "method",
      "Inspect the HTTP method. The method indicates the type of operation that the request is asking the origin to perform.",
      wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchMethod_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "headerOrders",
      "Inspect the request headers. See Header Order below for details.",
      wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchHeaderOrder_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "singleHeader",
      "Inspect a single header. See Single Header below for details.",
      wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader_GetTypes(),
      false,
      false,
    ),
  ];
}
