import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface lambda_FunctionUrlCors {
  // Whether to allow cookies or other credentials in requests to the function URL. The default is `false`.
  allowCredentials?: boolean;

  // The HTTP headers that origins can include in requests to the function URL. For example: `["date", "keep-alive", "x-custom-header"]`.
  allowHeaders?: Array<string>;

  // The HTTP methods that are allowed when calling the function URL. For example: `["GET", "POST", "DELETE"]`, or the wildcard character (`["-"]`).
  allowMethods?: Array<string>;

  // The origins that can access the function URL. You can list any number of specific origins (or the wildcard character (`"-"`)), separated by a comma. For example: `["https://www.example.com", "http://localhost:60905"]`.
  allowOrigins?: Array<string>;

  // The HTTP headers in your function response that you want to expose to origins that call the function URL.
  exposeHeaders?: Array<string>;

  // The maximum amount of time, in seconds, that web browsers can cache results of a preflight request. By default, this is set to `0`, which means that the browser doesn't cache results. The maximum value is `86400`.
  maxAge?: number;
}

export function lambda_FunctionUrlCors_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "allowOrigins",
      'The origins that can access the function URL. You can list any number of specific origins (or the wildcard character (`"*"`)), separated by a comma. For example: `["https://www.example.com", "http://localhost:60905"]`.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "exposeHeaders",
      "The HTTP headers in your function response that you want to expose to origins that call the function URL.",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "maxAge",
      "The maximum amount of time, in seconds, that web browsers can cache results of a preflight request. By default, this is set to `0`, which means that the browser doesn't cache results. The maximum value is `86400`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "allowCredentials",
      "Whether to allow cookies or other credentials in requests to the function URL. The default is `false`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "allowHeaders",
      'The HTTP headers that origins can include in requests to the function URL. For example: `["date", "keep-alive", "x-custom-header"]`.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "allowMethods",
      'The HTTP methods that are allowed when calling the function URL. For example: `["GET", "POST", "DELETE"]`, or the wildcard character (`["*"]`).',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
