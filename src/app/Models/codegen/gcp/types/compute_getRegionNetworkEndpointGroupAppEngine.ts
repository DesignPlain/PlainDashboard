import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface compute_getRegionNetworkEndpointGroupAppEngine {
  /*
Optional serving version.
The version must be 1-63 characters long, and comply with RFC1035.
Example value: "v1", "v2".
*/
  version?: string;

  /*
Optional serving service.
The service name must be 1-63 characters long, and comply with RFC1035.
Example value: "default", "my-service".
*/
  service?: string;

  /*
A template to parse service and version fields from a request URL.
URL mask allows for routing to multiple App Engine services without
having to create multiple Network Endpoint Groups and backend services.

For example, the request URLs "foo1-dot-appname.appspot.com/v1" and
"foo1-dot-appname.appspot.com/v2" can be backed by the same Serverless NEG with
URL mask "-dot-appname.appspot.com/". The URL mask will parse
them to { service = "foo1", version = "v1" } and { service = "foo1", version = "v2" } respectively.
*/
  urlMask?: string;
}

export function compute_getRegionNetworkEndpointGroupAppEngine_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'version',
      'Optional serving version.\nThe version must be 1-63 characters long, and comply with RFC1035.\nExample value: "v1", "v2".',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'service',
      'Optional serving service.\nThe service name must be 1-63 characters long, and comply with RFC1035.\nExample value: "default", "my-service".',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'urlMask',
      'A template to parse service and version fields from a request URL.\nURL mask allows for routing to multiple App Engine services without\nhaving to create multiple Network Endpoint Groups and backend services.\n\nFor example, the request URLs "foo1-dot-appname.appspot.com/v1" and\n"foo1-dot-appname.appspot.com/v2" can be backed by the same Serverless NEG with\nURL mask "-dot-appname.appspot.com/". The URL mask will parse\nthem to { service = "foo1", version = "v1" } and { service = "foo1", version = "v2" } respectively.',
      () => [],
      true,
      false,
    ),
  ];
}
