import { RegionBackendServiceConsistentHashHttpCookieTtl } from "./RegionBackendServiceConsistentHashHttpCookieTtl";

export interface RegionBackendServiceConsistentHashHttpCookie {
  // Name of the cookie.
  Name?: string;

  // Path to set for the cookie.
  Path?: string;

  /*
Lifetime of the cookie.
Structure is documented below.
*/
  Ttl?: RegionBackendServiceConsistentHashHttpCookieTtl;
}
