import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface lb_ListenerDefaultActionRedirect {
  // Hostname. This component is not percent-encoded. The hostname can contain `#{host}`. Defaults to `#{host}`.
  host?: string;

  // Absolute path, starting with the leading "/". This component is not percent-encoded. The path can contain #{host}, #{path}, and #{port}. Defaults to `/#{path}`.
  path?: string;

  // Port. Specify a value from `1` to `65535` or `#{port}`. Defaults to `#{port}`.
  port?: string;

  // Protocol. Valid values are `HTTP`, `HTTPS`, or `#{protocol}`. Defaults to `#{protocol}`.
  protocol?: string;

  // Query parameters, URL-encoded when necessary, but not percent-encoded. Do not include the leading "?". Defaults to `#{query}`.
  query?: string;

  /*
HTTP redirect code. The redirect is either permanent (`HTTP_301`) or temporary (`HTTP_302`).

The following arguments are optional:
*/
  statusCode?: string;
}

export function lb_ListenerDefaultActionRedirect_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "protocol",
      "Protocol. Valid values are `HTTP`, `HTTPS`, or `#{protocol}`. Defaults to `#{protocol}`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "query",
      'Query parameters, URL-encoded when necessary, but not percent-encoded. Do not include the leading "?". Defaults to `#{query}`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "statusCode",
      "HTTP redirect code. The redirect is either permanent (`HTTP_301`) or temporary (`HTTP_302`).\n\nThe following arguments are optional:",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "host",
      "Hostname. This component is not percent-encoded. The hostname can contain `#{host}`. Defaults to `#{host}`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "path",
      'Absolute path, starting with the leading "/". This component is not percent-encoded. The path can contain #{host}, #{path}, and #{port}. Defaults to `/#{path}`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "port",
      "Port. Specify a value from `1` to `65535` or `#{port}`. Defaults to `#{port}`.",
      () => [],
      false,
      false,
    ),
  ];
}
