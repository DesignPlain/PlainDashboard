export interface HostingVersionConfigRedirect {
  // The user-supplied glob to match against the request URL path.
  Glob?: string;

  /*
The value to put in the HTTP location header of the response.
The location can contain capture group values from the pattern using a : prefix to identify
the segment and an optional - to capture the rest of the URL. For example:
*/
  Location?: string;

  // The user-supplied RE2 regular expression to match against the request URL path.
  Regex?: string;

  // The status HTTP code to return in the response. It must be a valid 3xx status code.
  StatusCode?: number;
}
