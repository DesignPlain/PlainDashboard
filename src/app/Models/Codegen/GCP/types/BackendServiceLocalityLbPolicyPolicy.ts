export interface BackendServiceLocalityLbPolicyPolicy {
  /*
The name of a locality load balancer policy to be used. The value
should be one of the predefined ones as supported by localityLbPolicy,
although at the moment only ROUND_ROBIN is supported.
This field should only be populated when the customPolicy field is not
used.
Note that specifying the same policy more than once for a backend is
not a valid configuration and will be rejected.
The possible values are:
*/
  Name?: string;
}
