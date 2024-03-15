import { URLMapPathMatcherHeaderActionRequestHeadersToAdd } from "./URLMapPathMatcherHeaderActionRequestHeadersToAdd";
import { URLMapPathMatcherHeaderActionResponseHeadersToAdd } from "./URLMapPathMatcherHeaderActionResponseHeadersToAdd";

export interface URLMapPathMatcherHeaderAction {
  /*
Headers to add to a matching request prior to forwarding the request to the backendService.
Structure is documented below.
*/
  RequestHeadersToAdds?: Array<URLMapPathMatcherHeaderActionRequestHeadersToAdd>;

  /*
A list of header names for headers that need to be removed from the request prior to
forwarding the request to the backendService.
*/
  RequestHeadersToRemoves?: Array<string>;

  /*
Headers to add the response prior to sending the response back to the client.
Structure is documented below.
*/
  ResponseHeadersToAdds?: Array<URLMapPathMatcherHeaderActionResponseHeadersToAdd>;

  /*
A list of header names for headers that need to be removed from the response prior to sending the
response back to the client.
*/
  ResponseHeadersToRemoves?: Array<string>;
}
