import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  compute_URLMapPathMatcherDefaultRouteActionWeightedBackendServiceHeaderActionResponseHeadersToAdd,
  compute_URLMapPathMatcherDefaultRouteActionWeightedBackendServiceHeaderActionResponseHeadersToAdd_GetTypes,
} from './compute_URLMapPathMatcherDefaultRouteActionWeightedBackendServiceHeaderActionResponseHeadersToAdd';
import {
  compute_URLMapPathMatcherDefaultRouteActionWeightedBackendServiceHeaderActionRequestHeadersToAdd,
  compute_URLMapPathMatcherDefaultRouteActionWeightedBackendServiceHeaderActionRequestHeadersToAdd_GetTypes,
} from './compute_URLMapPathMatcherDefaultRouteActionWeightedBackendServiceHeaderActionRequestHeadersToAdd';

export interface compute_URLMapPathMatcherDefaultRouteActionWeightedBackendServiceHeaderAction {
  /*
A list of header names for headers that need to be removed from the request prior to
forwarding the request to the backendService.
*/
  requestHeadersToRemoves?: Array<string>;

  /*
Headers to add the response prior to sending the response back to the client.
Structure is documented below.
*/
  responseHeadersToAdds?: Array<compute_URLMapPathMatcherDefaultRouteActionWeightedBackendServiceHeaderActionResponseHeadersToAdd>;

  /*
A list of header names for headers that need to be removed from the response prior to sending the
response back to the client.
*/
  responseHeadersToRemoves?: Array<string>;

  /*
Headers to add to a matching request prior to forwarding the request to the backendService.
Structure is documented below.
*/
  requestHeadersToAdds?: Array<compute_URLMapPathMatcherDefaultRouteActionWeightedBackendServiceHeaderActionRequestHeadersToAdd>;
}

export function compute_URLMapPathMatcherDefaultRouteActionWeightedBackendServiceHeaderAction_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'responseHeadersToAdds',
      'Headers to add the response prior to sending the response back to the client.\nStructure is documented below.',
      () =>
        compute_URLMapPathMatcherDefaultRouteActionWeightedBackendServiceHeaderActionResponseHeadersToAdd_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'responseHeadersToRemoves',
      'A list of header names for headers that need to be removed from the response prior to sending the\nresponse back to the client.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'requestHeadersToAdds',
      'Headers to add to a matching request prior to forwarding the request to the backendService.\nStructure is documented below.',
      () =>
        compute_URLMapPathMatcherDefaultRouteActionWeightedBackendServiceHeaderActionRequestHeadersToAdd_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'requestHeadersToRemoves',
      'A list of header names for headers that need to be removed from the request prior to\nforwarding the request to the backendService.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
