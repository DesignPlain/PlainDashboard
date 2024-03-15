import { JobAppEngineHttpTargetAppEngineRouting } from "./JobAppEngineHttpTargetAppEngineRouting";

export interface JobAppEngineHttpTarget {
  /*
App Engine Routing setting for the job.
Structure is documented below.
*/
  AppEngineRouting?: JobAppEngineHttpTargetAppEngineRouting;

  /*
HTTP request body.
A request body is allowed only if the HTTP method is POST or PUT.
It will result in invalid argument error to set a body on a job with an incompatible HttpMethod.
A base64-encoded string.
*/
  Body?: string;

  /*
HTTP request headers.
This map contains the header field names and values.
Headers can be set when the job is created.
*/
  Headers?: Map<string, string>;

  // Which HTTP method to use for the request.
  HttpMethod?: string;

  /*
The relative URI.
The relative URL must begin with "/" and must be a valid HTTP relative URL.
It can contain a path, query string arguments, and \# fragments.
If the relative URL is empty, then the root path "/" will be used.
No spaces are allowed, and the maximum length allowed is 2083 characters
*/
  RelativeUri?: string;
}
