import { JobHttpTargetOauthToken } from "./JobHttpTargetOauthToken";
import { JobHttpTargetOidcToken } from "./JobHttpTargetOidcToken";

export interface JobHttpTarget {
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

  /*
Contains information needed for generating an OAuth token.
This type of authorization should be used when sending requests to a GCP endpoint.
Structure is documented below.
*/
  OauthToken?: JobHttpTargetOauthToken;

  /*
Contains information needed for generating an OpenID Connect token.
This type of authorization should be used when sending requests to third party endpoints or Cloud Run.
Structure is documented below.
*/
  OidcToken?: JobHttpTargetOidcToken;
}
