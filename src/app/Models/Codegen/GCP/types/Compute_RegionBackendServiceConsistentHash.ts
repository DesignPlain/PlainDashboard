import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Compute_RegionBackendServiceConsistentHashHttpCookie,
  Compute_RegionBackendServiceConsistentHashHttpCookie_GetTypes,
} from "./Compute_RegionBackendServiceConsistentHashHttpCookie";

export interface Compute_RegionBackendServiceConsistentHash {
  /*
Hash is based on HTTP Cookie. This field describes a HTTP cookie
that will be used as the hash key for the consistent hash load
balancer. If the cookie is not present, it will be generated.
This field is applicable if the sessionAffinity is set to HTTP_COOKIE.
Structure is documented below.
*/
  HttpCookie?: Compute_RegionBackendServiceConsistentHashHttpCookie;

  /*
The hash based on the value of the specified header field.
This field is applicable if the sessionAffinity is set to HEADER_FIELD.
*/
  HttpHeaderName?: string;

  /*
The minimum number of virtual nodes to use for the hash ring.
Larger ring sizes result in more granular load
distributions. If the number of hosts in the load balancing pool
is larger than the ring size, each host will be assigned a single
virtual node.
Defaults to 1024.
*/
  MinimumRingSize?: number;
}

export function Compute_RegionBackendServiceConsistentHash_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "HttpCookie",
      "Hash is based on HTTP Cookie. This field describes a HTTP cookie\nthat will be used as the hash key for the consistent hash load\nbalancer. If the cookie is not present, it will be generated.\nThis field is applicable if the sessionAffinity is set to HTTP_COOKIE.\nStructure is documented below.",
      Compute_RegionBackendServiceConsistentHashHttpCookie_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "HttpHeaderName",
      "The hash based on the value of the specified header field.\nThis field is applicable if the sessionAffinity is set to HEADER_FIELD.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "MinimumRingSize",
      "The minimum number of virtual nodes to use for the hash ring.\nLarger ring sizes result in more granular load\ndistributions. If the number of hosts in the load balancing pool\nis larger than the ring size, each host will be assigned a single\nvirtual node.\nDefaults to 1024.",
      [],
      false,
      false,
    ),
  ];
}
