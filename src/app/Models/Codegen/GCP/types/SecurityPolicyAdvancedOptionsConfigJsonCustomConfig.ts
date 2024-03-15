export interface SecurityPolicyAdvancedOptionsConfigJsonCustomConfig {
  /*
A list of custom Content-Type header values to apply the JSON parsing. The
format of the Content-Type header values is defined in
[RFC 1341](https://www.ietf.org/rfc/rfc1341.txt). When configuring a custom Content-Type header
value, only the type/subtype needs to be specified, and the parameters should be excluded.
*/
  ContentTypes?: Array<string>;
}
