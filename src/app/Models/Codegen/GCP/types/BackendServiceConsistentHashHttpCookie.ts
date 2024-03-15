import { BackendServiceConsistentHashHttpCookieTtl } from "./BackendServiceConsistentHashHttpCookieTtl";

export interface BackendServiceConsistentHashHttpCookie {
  // Name of the cookie.
  Name?: string;

  // Path to set for the cookie.
  Path?: string;

  /*
Lifetime of the cookie.
Structure is documented below.
*/
  Ttl?: BackendServiceConsistentHashHttpCookieTtl;
}
