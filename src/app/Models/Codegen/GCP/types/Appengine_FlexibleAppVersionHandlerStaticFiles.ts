import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface appengine_FlexibleAppVersionHandlerStaticFiles {
  /*
Whether files should also be uploaded as code data. By default, files declared in static file handlers are
uploaded as static data and are only served to end users; they cannot be read by the application. If enabled,
uploads are charged against both your code and static data storage resource quotas.
*/
  applicationReadable?: boolean;

  /*
Time a static file served by this handler should be cached by web proxies and browsers.
A duration in seconds with up to nine fractional digits, terminated by 's'. Example "3.5s".
Default is '0s'
*/
  expiration?: string;

  /*
HTTP headers to use for all responses from these URLs.
An object containing a list of "key:value" value pairs.".
*/
  httpHeaders?: Map<string, string>;

  /*
MIME type used to serve all files served by this handler.
Defaults to file-specific MIME types, which are derived from each file's filename extension.
*/
  mimeType?: string;

  /*
Path to the static files matched by the URL pattern, from the application root directory.
The path can refer to text matched in groupings in the URL pattern.
*/
  path?: string;

  // Whether this handler should match the request if the file referenced by the handler does not exist.
  requireMatchingFile?: boolean;

  // Regular expression that matches the file paths for all files that should be referenced by this handler.
  uploadPathRegex?: string;
}

export function appengine_FlexibleAppVersionHandlerStaticFiles_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "requireMatchingFile",
      "Whether this handler should match the request if the file referenced by the handler does not exist.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "uploadPathRegex",
      "Regular expression that matches the file paths for all files that should be referenced by this handler.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "applicationReadable",
      "Whether files should also be uploaded as code data. By default, files declared in static file handlers are\nuploaded as static data and are only served to end users; they cannot be read by the application. If enabled,\nuploads are charged against both your code and static data storage resource quotas.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "expiration",
      "Time a static file served by this handler should be cached by web proxies and browsers.\nA duration in seconds with up to nine fractional digits, terminated by 's'. Example \"3.5s\".\nDefault is '0s'",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "httpHeaders",
      'HTTP headers to use for all responses from these URLs.\nAn object containing a list of "key:value" value pairs.".',
      InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "mimeType",
      "MIME type used to serve all files served by this handler.\nDefaults to file-specific MIME types, which are derived from each file's filename extension.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "path",
      "Path to the static files matched by the URL pattern, from the application root directory.\nThe path can refer to text matched in groupings in the URL pattern.",
      [],
      false,
      false,
    ),
  ];
}
