export interface StandardAppVersionHandlerStaticFiles {
  // Path to the static files matched by the URL pattern, from the application root directory. The path can refer to text matched in groupings in the URL pattern.
  Path?: string;

  // Whether this handler should match the request if the file referenced by the handler does not exist.
  RequireMatchingFile?: boolean;

  // Regular expression that matches the file paths for all files that should be referenced by this handler.
  UploadPathRegex?: string;

  /*
Whether files should also be uploaded as code data. By default, files declared in static file handlers are uploaded as
static data and are only served to end users; they cannot be read by the application. If enabled, uploads are charged
against both your code and static data storage resource quotas.
*/
  ApplicationReadable?: boolean;

  /*
Time a static file served by this handler should be cached by web proxies and browsers.
A duration in seconds with up to nine fractional digits, terminated by 's'. Example "3.5s".
*/
  Expiration?: string;

  /*
HTTP headers to use for all responses from these URLs.
An object containing a list of "key:value" value pairs.".
*/
  HttpHeaders?: Map<string, string>;

  /*
MIME type used to serve all files served by this handler.
Defaults to file-specific MIME types, which are derived from each file's filename extension.
*/
  MimeType?: string;
}