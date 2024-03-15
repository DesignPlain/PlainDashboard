export interface ApplicationUrlDispatchRulesDispatchRule {
  /*
Domain name to match against. The wildcard "-" is supported if specified before a period: "-.".
Defaults to matching all domains: "-".
*/
  Domain?: string;

  /*
Pathname within the host. Must start with a "/". A single "-" can be included at the end of the path.
The sum of the lengths of the domain and path may not exceed 100 characters.
*/
  Path?: string;

  /*
Pathname within the host. Must start with a "/". A single "-" can be included at the end of the path.
The sum of the lengths of the domain and path may not exceed 100 characters.

- - -
*/
  Service?: string;
}
