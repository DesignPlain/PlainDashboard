import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface networkservices_EdgeCacheServiceRoutingHostRule {
  // The name of the pathMatcher associated with this hostRule.
  pathMatcher?: string;

  // A human-readable description of the hostRule.
  description?: string;

  /*
The list of host patterns to match.
Host patterns must be valid hostnames. Ports are not allowed. Wildcard hosts are supported in the suffix or prefix form. - matches any string of ([a-z0-9-.]-). It does not match the empty string.
When multiple hosts are specified, hosts are matched in the following priority:
1. Exact domain names: ``www.foo.com``.
2. Suffix domain wildcards: ``-.foo.com`` or ``--bar.foo.com``.
3. Prefix domain wildcards: ``foo.-`` or ``foo--``.
4. Special wildcard ``-`` matching any domain.
Notes:
The wildcard will not match the empty string. e.g. ``--bar.foo.com`` will match ``baz-bar.foo.com`` but not ``-bar.foo.com``. The longest wildcards match first. Only a single host in the entire service can match on ``-``. A domain must be unique across all configured hosts within a service.
Hosts are matched against the HTTP Host header, or for HTTP/2 and HTTP/3, the ":authority" header, from the incoming request.
You may specify up to 10 hosts.
*/
  hosts?: Array<string>;
}

export function networkservices_EdgeCacheServiceRoutingHostRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "pathMatcher",
      "The name of the pathMatcher associated with this hostRule.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "description",
      "A human-readable description of the hostRule.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "hosts",
      'The list of host patterns to match.\nHost patterns must be valid hostnames. Ports are not allowed. Wildcard hosts are supported in the suffix or prefix form. * matches any string of ([a-z0-9-.]*). It does not match the empty string.\nWhen multiple hosts are specified, hosts are matched in the following priority:\n1. Exact domain names: ``www.foo.com``.\n2. Suffix domain wildcards: ``*.foo.com`` or ``*-bar.foo.com``.\n3. Prefix domain wildcards: ``foo.*`` or ``foo-*``.\n4. Special wildcard ``*`` matching any domain.\nNotes:\nThe wildcard will not match the empty string. e.g. ``*-bar.foo.com`` will match ``baz-bar.foo.com`` but not ``-bar.foo.com``. The longest wildcards match first. Only a single host in the entire service can match on ``*``. A domain must be unique across all configured hosts within a service.\nHosts are matched against the HTTP Host header, or for HTTP/2 and HTTP/3, the ":authority" header, from the incoming request.\nYou may specify up to 10 hosts.',
      InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
