import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface apigatewayv2_ApiCorsConfiguration {
  // Number of seconds that the browser should cache preflight request results.
  maxAge?: number;

  // Whether credentials are included in the CORS request.
  allowCredentials?: boolean;

  // Set of allowed HTTP headers.
  allowHeaders?: Array<string>;

  // Set of allowed HTTP methods.
  allowMethods?: Array<string>;

  // Set of allowed origins.
  allowOrigins?: Array<string>;

  // Set of exposed HTTP headers.
  exposeHeaders?: Array<string>;
}

export function apigatewayv2_ApiCorsConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'allowMethods',
      'Set of allowed HTTP methods.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'allowOrigins',
      'Set of allowed origins.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'exposeHeaders',
      'Set of exposed HTTP headers.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'maxAge',
      'Number of seconds that the browser should cache preflight request results.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'allowCredentials',
      'Whether credentials are included in the CORS request.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'allowHeaders',
      'Set of allowed HTTP headers.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
