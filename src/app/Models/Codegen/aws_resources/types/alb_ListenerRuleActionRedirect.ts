import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface alb_ListenerRuleActionRedirect {
  // The protocol. Valid values are `HTTP`, `HTTPS`, or `#{protocol}`. Defaults to `#{protocol}`.
  protocol?: string;

  // The query parameters, URL-encoded when necessary, but not percent-encoded. Do not include the leading "?". Defaults to `#{query}`.
  query?: string;

  // The HTTP redirect code. The redirect is either permanent (`HTTP_301`) or temporary (`HTTP_302`).
  statusCode?: string;

  // The hostname. This component is not percent-encoded. The hostname can contain `#{host}`. Defaults to `#{host}`.
  host?: string;

  // The absolute path, starting with the leading "/". This component is not percent-encoded. The path can contain #{host}, #{path}, and #{port}. Defaults to `/#{path}`.
  path?: string;

  // The port. Specify a value from `1` to `65535` or `#{port}`. Defaults to `#{port}`.
  port?: string;
}

export function alb_ListenerRuleActionRedirect_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "protocol",
      "The protocol. Valid values are `HTTP`, `HTTPS`, or `#{protocol}`. Defaults to `#{protocol}`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "query",
      'The query parameters, URL-encoded when necessary, but not percent-encoded. Do not include the leading "?". Defaults to `#{query}`.',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "statusCode",
      "The HTTP redirect code. The redirect is either permanent (`HTTP_301`) or temporary (`HTTP_302`).",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "host",
      "The hostname. This component is not percent-encoded. The hostname can contain `#{host}`. Defaults to `#{host}`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "path",
      'The absolute path, starting with the leading "/". This component is not percent-encoded. The path can contain #{host}, #{path}, and #{port}. Defaults to `/#{path}`.',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "port",
      "The port. Specify a value from `1` to `65535` or `#{port}`. Defaults to `#{port}`.",
      [],
      false,
      false,
    ),
  ];
}
