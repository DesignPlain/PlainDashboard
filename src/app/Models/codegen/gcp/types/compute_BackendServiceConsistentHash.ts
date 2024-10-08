import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  compute_BackendServiceConsistentHashHttpCookie,
  compute_BackendServiceConsistentHashHttpCookie_GetTypes,
} from './compute_BackendServiceConsistentHashHttpCookie';

export interface compute_BackendServiceConsistentHash {
  /*
The minimum number of virtual nodes to use for the hash ring.
Larger ring sizes result in more granular load
distributions. If the number of hosts in the load balancing pool
is larger than the ring size, each host will be assigned a single
virtual node.
Defaults to 1024.
*/
  minimumRingSize?: number;

  /*
Hash is based on HTTP Cookie. This field describes a HTTP cookie
that will be used as the hash key for the consistent hash load
balancer. If the cookie is not present, it will be generated.
This field is applicable if the sessionAffinity is set to HTTP_COOKIE.
Structure is documented below.
*/
  httpCookie?: compute_BackendServiceConsistentHashHttpCookie;

  /*
The hash based on the value of the specified header field.
This field is applicable if the sessionAffinity is set to HEADER_FIELD.
*/
  httpHeaderName?: string;
}

export function compute_BackendServiceConsistentHash_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'minimumRingSize',
      'The minimum number of virtual nodes to use for the hash ring.\nLarger ring sizes result in more granular load\ndistributions. If the number of hosts in the load balancing pool\nis larger than the ring size, each host will be assigned a single\nvirtual node.\nDefaults to 1024.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'httpCookie',
      'Hash is based on HTTP Cookie. This field describes a HTTP cookie\nthat will be used as the hash key for the consistent hash load\nbalancer. If the cookie is not present, it will be generated.\nThis field is applicable if the sessionAffinity is set to HTTP_COOKIE.\nStructure is documented below.',
      () => compute_BackendServiceConsistentHashHttpCookie_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'httpHeaderName',
      'The hash based on the value of the specified header field.\nThis field is applicable if the sessionAffinity is set to HEADER_FIELD.',
      () => [],
      false,
      false,
    ),
  ];
}
