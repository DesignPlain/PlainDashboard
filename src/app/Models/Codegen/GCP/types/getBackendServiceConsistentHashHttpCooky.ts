import { getBackendServiceConsistentHashHttpCookyTtl } from "./getBackendServiceConsistentHashHttpCookyTtl";

export interface getBackendServiceConsistentHashHttpCooky {
  /*
The name of the Backend Service.

- - -
*/
  Name?: string;

  // Path to set for the cookie.
  Path?: string;

  // Lifetime of the cookie.
  Ttls?: Array<getBackendServiceConsistentHashHttpCookyTtl>;
}
