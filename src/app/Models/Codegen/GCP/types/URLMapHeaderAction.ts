import { URLMapHeaderActionResponseHeadersToAdd } from "./URLMapHeaderActionResponseHeadersToAdd";
import { URLMapHeaderActionRequestHeadersToAdd } from "./URLMapHeaderActionRequestHeadersToAdd";

export interface URLMapHeaderAction {
  /*
Headers to add to a matching request prior to forwarding the request to the backendService.
Structure is documented below.
*/
  RequestHeadersToAdds?: Array<URLMapHeaderActionRequestHeadersToAdd>;

  /*
A list of header names for headers that need to be removed from the request prior to
forwarding the request to the backendService.
*/
  RequestHeadersToRemoves?: Array<string>;

  /*
Headers to add the response prior to sending the response back to the client.
Structure is documented below.
*/
  ResponseHeadersToAdds?: Array<URLMapHeaderActionResponseHeadersToAdd>;

  /*
A list of header names for headers that need to be removed from the response prior to sending the
response back to the client.
*/
  ResponseHeadersToRemoves?: Array<string>;
}
