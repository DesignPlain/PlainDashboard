import { HostingVersionConfigRewriteRun } from "./HostingVersionConfigRewriteRun";

export interface HostingVersionConfigRewrite {
  // The user-supplied glob to match against the request URL path.
  Glob?: string;

  // The user-supplied RE2 regular expression to match against the request URL path.
  Regex?: string;

  /*
The request will be forwarded to Cloud Run.
Structure is documented below.
*/
  Run?: HostingVersionConfigRewriteRun;

  // The function to proxy requests to. Must match the exported function name exactly.
  Function?: string;
}
