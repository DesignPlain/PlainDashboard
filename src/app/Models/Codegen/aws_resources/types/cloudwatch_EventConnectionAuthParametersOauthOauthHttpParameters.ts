import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  cloudwatch_EventConnectionAuthParametersOauthOauthHttpParametersQueryString,
  cloudwatch_EventConnectionAuthParametersOauthOauthHttpParametersQueryString_GetTypes,
} from "./cloudwatch_EventConnectionAuthParametersOauthOauthHttpParametersQueryString";
import {
  cloudwatch_EventConnectionAuthParametersOauthOauthHttpParametersBody,
  cloudwatch_EventConnectionAuthParametersOauthOauthHttpParametersBody_GetTypes,
} from "./cloudwatch_EventConnectionAuthParametersOauthOauthHttpParametersBody";
import {
  cloudwatch_EventConnectionAuthParametersOauthOauthHttpParametersHeader,
  cloudwatch_EventConnectionAuthParametersOauthOauthHttpParametersHeader_GetTypes,
} from "./cloudwatch_EventConnectionAuthParametersOauthOauthHttpParametersHeader";

export interface cloudwatch_EventConnectionAuthParametersOauthOauthHttpParameters {
  // Contains additional query string parameters for the connection. You can include up to 100 additional body string parameters per request. Each additional parameter counts towards the event payload size, which cannot exceed 64 KB. Each parameter can contain the following:
  queryStrings?: Array<cloudwatch_EventConnectionAuthParametersOauthOauthHttpParametersQueryString>;

  // Contains additional body string parameters for the connection. You can include up to 100 additional body string parameters per request. Each additional parameter counts towards the event payload size, which cannot exceed 64 KB. Each parameter can contain the following:
  bodies?: Array<cloudwatch_EventConnectionAuthParametersOauthOauthHttpParametersBody>;

  // Contains additional header parameters for the connection. You can include up to 100 additional body string parameters per request. Each additional parameter counts towards the event payload size, which cannot exceed 64 KB. Each parameter can contain the following:
  headers?: Array<cloudwatch_EventConnectionAuthParametersOauthOauthHttpParametersHeader>;
}

export function cloudwatch_EventConnectionAuthParametersOauthOauthHttpParameters_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "queryStrings",
      "Contains additional query string parameters for the connection. You can include up to 100 additional body string parameters per request. Each additional parameter counts towards the event payload size, which cannot exceed 64 KB. Each parameter can contain the following:",
      cloudwatch_EventConnectionAuthParametersOauthOauthHttpParametersQueryString_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "bodies",
      "Contains additional body string parameters for the connection. You can include up to 100 additional body string parameters per request. Each additional parameter counts towards the event payload size, which cannot exceed 64 KB. Each parameter can contain the following:",
      cloudwatch_EventConnectionAuthParametersOauthOauthHttpParametersBody_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "headers",
      "Contains additional header parameters for the connection. You can include up to 100 additional body string parameters per request. Each additional parameter counts towards the event payload size, which cannot exceed 64 KB. Each parameter can contain the following:",
      cloudwatch_EventConnectionAuthParametersOauthOauthHttpParametersHeader_GetTypes(),
      false,
      false,
    ),
  ];
}
