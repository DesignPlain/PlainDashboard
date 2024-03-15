import { HostingVersionConfigRedirect } from "./HostingVersionConfigRedirect";
import { HostingVersionConfigRewrite } from "./HostingVersionConfigRewrite";

export interface HostingVersionConfig {
  /*
An array of objects (called redirect rules), where each rule specifies a URL pattern that, if matched to the request URL path,
triggers Hosting to respond with a redirect to the specified destination path.
Structure is documented below.
*/
  Redirects?: Array<HostingVersionConfigRedirect>;

  /*
An array of objects (called rewrite rules), where each rule specifies a URL pattern that, if matched to the
request URL path, triggers Hosting to respond as if the service were given the specified destination URL.
Structure is documented below.
*/
  Rewrites?: Array<HostingVersionConfigRewrite>;
}
