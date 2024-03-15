import { EdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAdd } from "./EdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAdd";

export interface EdgeCacheOriginOriginOverrideActionHeaderAction {
  /*
Describes a header to add.
You may add a maximum of 25 request headers.
Structure is documented below.
*/
  RequestHeadersToAdds?: Array<EdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAdd>;
}
