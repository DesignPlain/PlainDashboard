import { EdgeCacheOriginOriginOverrideActionHeaderAction } from "./EdgeCacheOriginOriginOverrideActionHeaderAction";
import { EdgeCacheOriginOriginOverrideActionUrlRewrite } from "./EdgeCacheOriginOriginOverrideActionUrlRewrite";

export interface EdgeCacheOriginOriginOverrideAction {
  /*
The header actions, including adding and removing
headers, for request handled by this origin.
Structure is documented below.
*/
  HeaderAction?: EdgeCacheOriginOriginOverrideActionHeaderAction;

  /*
The URL rewrite configuration for request that are
handled by this origin.
Structure is documented below.
*/
  UrlRewrite?: EdgeCacheOriginOriginOverrideActionUrlRewrite;
}
