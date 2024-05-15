import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Cloudscheduler_JobAppEngineHttpTargetAppEngineRouting,
  Cloudscheduler_JobAppEngineHttpTargetAppEngineRouting_GetTypes,
} from "./Cloudscheduler_JobAppEngineHttpTargetAppEngineRouting";

export interface Cloudscheduler_JobAppEngineHttpTarget {
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

  /*
App Engine Routing setting for the job.
Structure is documented below.
*/
  AppEngineRouting?: Cloudscheduler_JobAppEngineHttpTargetAppEngineRouting;

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
}

export function Cloudscheduler_JobAppEngineHttpTarget_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "RelativeUri",
      'The relative URI.\nThe relative URL must begin with "/" and must be a valid HTTP relative URL.\nIt can contain a path, query string arguments, and \\# fragments.\nIf the relative URL is empty, then the root path "/" will be used.\nNo spaces are allowed, and the maximum length allowed is 2083 characters',
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "AppEngineRouting",
      "App Engine Routing setting for the job.\nStructure is documented below.",
      Cloudscheduler_JobAppEngineHttpTargetAppEngineRouting_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Body",
      "HTTP request body.\nA request body is allowed only if the HTTP method is POST or PUT.\nIt will result in invalid argument error to set a body on a job with an incompatible HttpMethod.\nA base64-encoded string.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "Headers",
      "HTTP request headers.\nThis map contains the header field names and values.\nHeaders can be set when the job is created.",
      InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "HttpMethod",
      "Which HTTP method to use for the request.",
      [],
      false,
      false,
    ),
  ];
}
