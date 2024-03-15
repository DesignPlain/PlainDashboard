export interface RegionBackendServiceCdnPolicyNegativeCachingPolicy {
  /*
The HTTP status code to define a TTL against. Only HTTP status codes 300, 301, 308, 404, 405, 410, 421, 451 and 501
can be specified as values, and you cannot specify a status code more than once.
*/
  Code?: number;

  /*
The TTL (in seconds) for which to cache responses with the corresponding status code. The maximum allowed value is 1800s
(30 minutes), noting that infrequently accessed objects may be evicted from the cache before the defined TTL.
*/
  Ttl?: number;
}
