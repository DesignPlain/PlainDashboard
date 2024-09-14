import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  cloudwatch_EventConnectionAuthParametersInvocationHttpParametersQueryString,
  cloudwatch_EventConnectionAuthParametersInvocationHttpParametersQueryString_GetTypes,
} from "./cloudwatch_EventConnectionAuthParametersInvocationHttpParametersQueryString";
import {
  cloudwatch_EventConnectionAuthParametersInvocationHttpParametersBody,
  cloudwatch_EventConnectionAuthParametersInvocationHttpParametersBody_GetTypes,
} from "./cloudwatch_EventConnectionAuthParametersInvocationHttpParametersBody";
import {
  cloudwatch_EventConnectionAuthParametersInvocationHttpParametersHeader,
  cloudwatch_EventConnectionAuthParametersInvocationHttpParametersHeader_GetTypes,
} from "./cloudwatch_EventConnectionAuthParametersInvocationHttpParametersHeader";

export interface cloudwatch_EventConnectionAuthParametersInvocationHttpParameters {
  // Contains additional body string parameters for the connection. You can include up to 100 additional body string parameters per request. Each additional parameter counts towards the event payload size, which cannot exceed 64 KB. Each parameter can contain the following:
  bodies?: Array<cloudwatch_EventConnectionAuthParametersInvocationHttpParametersBody>;

  // Contains additional header parameters for the connection. You can include up to 100 additional body string parameters per request. Each additional parameter counts towards the event payload size, which cannot exceed 64 KB. Each parameter can contain the following:
  headers?: Array<cloudwatch_EventConnectionAuthParametersInvocationHttpParametersHeader>;

  // Contains additional query string parameters for the connection. You can include up to 100 additional body string parameters per request. Each additional parameter counts towards the event payload size, which cannot exceed 64 KB. Each parameter can contain the following:
  queryStrings?: Array<cloudwatch_EventConnectionAuthParametersInvocationHttpParametersQueryString>;
}

export function cloudwatch_EventConnectionAuthParametersInvocationHttpParameters_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "bodies",
      "Contains additional body string parameters for the connection. You can include up to 100 additional body string parameters per request. Each additional parameter counts towards the event payload size, which cannot exceed 64 KB. Each parameter can contain the following:",
      () =>
        cloudwatch_EventConnectionAuthParametersInvocationHttpParametersBody_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "headers",
      "Contains additional header parameters for the connection. You can include up to 100 additional body string parameters per request. Each additional parameter counts towards the event payload size, which cannot exceed 64 KB. Each parameter can contain the following:",
      () =>
        cloudwatch_EventConnectionAuthParametersInvocationHttpParametersHeader_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "queryStrings",
      "Contains additional query string parameters for the connection. You can include up to 100 additional body string parameters per request. Each additional parameter counts towards the event payload size, which cannot exceed 64 KB. Each parameter can contain the following:",
      () =>
        cloudwatch_EventConnectionAuthParametersInvocationHttpParametersQueryString_GetTypes(),
      false,
      false,
    ),
  ];
}
