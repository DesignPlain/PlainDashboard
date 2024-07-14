import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  cloudscheduler_JobHttpTargetOidcToken,
  cloudscheduler_JobHttpTargetOidcToken_GetTypes,
} from "./cloudscheduler_JobHttpTargetOidcToken";
import {
  cloudscheduler_JobHttpTargetOauthToken,
  cloudscheduler_JobHttpTargetOauthToken_GetTypes,
} from "./cloudscheduler_JobHttpTargetOauthToken";

export interface cloudscheduler_JobHttpTarget {
  /*
Contains information needed for generating an OpenID Connect token.
This type of authorization should be used when sending requests to third party endpoints or Cloud Run.
Structure is documented below.
*/
  oidcToken?: cloudscheduler_JobHttpTargetOidcToken;

  // The full URI path that the request will be sent to.
  uri?: string;

  /*
HTTP request body.
A request body is allowed only if the HTTP method is POST, PUT, or PATCH.
It is an error to set body on a job with an incompatible HttpMethod.
A base64-encoded string.
*/
  body?: string;

  /*
This map contains the header field names and values.
Repeated headers are not supported, but a header value can contain commas.
*/
  headers?: Map<string, string>;

  // Which HTTP method to use for the request.
  httpMethod?: string;

  /*
Contains information needed for generating an OAuth token.
This type of authorization should be used when sending requests to a GCP endpoint.
Structure is documented below.
*/
  oauthToken?: cloudscheduler_JobHttpTargetOauthToken;
}

export function cloudscheduler_JobHttpTarget_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "oidcToken",
      "Contains information needed for generating an OpenID Connect token.\nThis type of authorization should be used when sending requests to third party endpoints or Cloud Run.\nStructure is documented below.",
      cloudscheduler_JobHttpTargetOidcToken_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "uri",
      "The full URI path that the request will be sent to.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "body",
      "HTTP request body.\nA request body is allowed only if the HTTP method is POST, PUT, or PATCH.\nIt is an error to set body on a job with an incompatible HttpMethod.\nA base64-encoded string.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "headers",
      "This map contains the header field names and values.\nRepeated headers are not supported, but a header value can contain commas.",
      InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "httpMethod",
      "Which HTTP method to use for the request.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "oauthToken",
      "Contains information needed for generating an OAuth token.\nThis type of authorization should be used when sending requests to a GCP endpoint.\nStructure is documented below.",
      cloudscheduler_JobHttpTargetOauthToken_GetTypes(),
      false,
      false,
    ),
  ];
}
