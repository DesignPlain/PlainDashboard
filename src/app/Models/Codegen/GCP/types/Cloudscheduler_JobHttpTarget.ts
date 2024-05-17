import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Cloudscheduler_JobHttpTargetOauthToken,
  Cloudscheduler_JobHttpTargetOauthToken_GetTypes,
} from "./Cloudscheduler_JobHttpTargetOauthToken";
import {
  Cloudscheduler_JobHttpTargetOidcToken,
  Cloudscheduler_JobHttpTargetOidcToken_GetTypes,
} from "./Cloudscheduler_JobHttpTargetOidcToken";

export interface Cloudscheduler_JobHttpTarget {
  /*
Contains information needed for generating an OAuth token.
This type of authorization should be used when sending requests to a GCP endpoint.
Structure is documented below.
*/
  OauthToken?: Cloudscheduler_JobHttpTargetOauthToken;

  /*
Contains information needed for generating an OpenID Connect token.
This type of authorization should be used when sending requests to third party endpoints or Cloud Run.
Structure is documented below.
*/
  OidcToken?: Cloudscheduler_JobHttpTargetOidcToken;

  // The full URI path that the request will be sent to.
  Uri?: string;

  /*
HTTP request body.
A request body is allowed only if the HTTP method is POST, PUT, or PATCH.
It is an error to set body on a job with an incompatible HttpMethod.
A base64-encoded string.
*/
  Body?: string;

  /*
This map contains the header field names and values.
Repeated headers are not supported, but a header value can contain commas.
*/
  Headers?: Map<string, string>;

  // Which HTTP method to use for the request.
  HttpMethod?: string;
}

export function Cloudscheduler_JobHttpTarget_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "HttpMethod",
      "Which HTTP method to use for the request.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "OauthToken",
      "Contains information needed for generating an OAuth token.\nThis type of authorization should be used when sending requests to a GCP endpoint.\nStructure is documented below.",
      Cloudscheduler_JobHttpTargetOauthToken_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "OidcToken",
      "Contains information needed for generating an OpenID Connect token.\nThis type of authorization should be used when sending requests to third party endpoints or Cloud Run.\nStructure is documented below.",
      Cloudscheduler_JobHttpTargetOidcToken_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Uri",
      "The full URI path that the request will be sent to.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Body",
      "HTTP request body.\nA request body is allowed only if the HTTP method is POST, PUT, or PATCH.\nIt is an error to set body on a job with an incompatible HttpMethod.\nA base64-encoded string.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "Headers",
      "This map contains the header field names and values.\nRepeated headers are not supported, but a header value can contain commas.",
      InputType_Map_GetTypes(),
      false,
      false,
    ),
  ];
}
