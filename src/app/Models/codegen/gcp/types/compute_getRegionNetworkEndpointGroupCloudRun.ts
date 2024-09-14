import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface compute_getRegionNetworkEndpointGroupCloudRun {
  /*
Cloud Run service is the main resource of Cloud Run.
The service must be 1-63 characters long, and comply with RFC1035.
Example value: "run-service".
*/
  service?: string;

  /*
Cloud Run tag represents the "named-revision" to provide
additional fine-grained traffic routing information.
The tag must be 1-63 characters long, and comply with RFC1035.
Example value: "revision-0010".
*/
  tag?: string;

  /*
A template to parse service and tag fields from a request URL.
URL mask allows for routing to multiple Run services without having
to create multiple network endpoint groups and backend services.

For example, request URLs "foo1.domain.com/bar1" and "foo1.domain.com/bar2"
an be backed by the same Serverless Network Endpoint Group (NEG) with
URL mask ".domain.com/". The URL mask will parse them to { service="bar1", tag="foo1" }
and { service="bar2", tag="foo2" } respectively.
*/
  urlMask?: string;
}

export function compute_getRegionNetworkEndpointGroupCloudRun_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "service",
      'Cloud Run service is the main resource of Cloud Run.\nThe service must be 1-63 characters long, and comply with RFC1035.\nExample value: "run-service".',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "tag",
      'Cloud Run tag represents the "named-revision" to provide\nadditional fine-grained traffic routing information.\nThe tag must be 1-63 characters long, and comply with RFC1035.\nExample value: "revision-0010".',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "urlMask",
      'A template to parse service and tag fields from a request URL.\nURL mask allows for routing to multiple Run services without having\nto create multiple network endpoint groups and backend services.\n\nFor example, request URLs "foo1.domain.com/bar1" and "foo1.domain.com/bar2"\nan be backed by the same Serverless Network Endpoint Group (NEG) with\nURL mask ".domain.com/". The URL mask will parse them to { service="bar1", tag="foo1" }\nand { service="bar2", tag="foo2" } respectively.',
      () => [],
      true,
      false,
    ),
  ];
}
