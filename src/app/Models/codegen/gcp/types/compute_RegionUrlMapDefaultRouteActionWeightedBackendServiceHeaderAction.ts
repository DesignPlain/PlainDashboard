import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  compute_RegionUrlMapDefaultRouteActionWeightedBackendServiceHeaderActionRequestHeadersToAdd,
  compute_RegionUrlMapDefaultRouteActionWeightedBackendServiceHeaderActionRequestHeadersToAdd_GetTypes,
} from './compute_RegionUrlMapDefaultRouteActionWeightedBackendServiceHeaderActionRequestHeadersToAdd';
import {
  compute_RegionUrlMapDefaultRouteActionWeightedBackendServiceHeaderActionResponseHeadersToAdd,
  compute_RegionUrlMapDefaultRouteActionWeightedBackendServiceHeaderActionResponseHeadersToAdd_GetTypes,
} from './compute_RegionUrlMapDefaultRouteActionWeightedBackendServiceHeaderActionResponseHeadersToAdd';

export interface compute_RegionUrlMapDefaultRouteActionWeightedBackendServiceHeaderAction {
  /*
Headers to add to a matching request before forwarding the request to the backendService.
Structure is documented below.
*/
  requestHeadersToAdds?: Array<compute_RegionUrlMapDefaultRouteActionWeightedBackendServiceHeaderActionRequestHeadersToAdd>;

  // A list of header names for headers that need to be removed from the request before forwarding the request to the backendService.
  requestHeadersToRemoves?: Array<string>;

  /*
Headers to add the response before sending the response back to the client.
Structure is documented below.
*/
  responseHeadersToAdds?: Array<compute_RegionUrlMapDefaultRouteActionWeightedBackendServiceHeaderActionResponseHeadersToAdd>;

  // A list of header names for headers that need to be removed from the response before sending the response back to the client.
  responseHeadersToRemoves?: Array<string>;
}

export function compute_RegionUrlMapDefaultRouteActionWeightedBackendServiceHeaderAction_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'responseHeadersToRemoves',
      'A list of header names for headers that need to be removed from the response before sending the response back to the client.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'requestHeadersToAdds',
      'Headers to add to a matching request before forwarding the request to the backendService.\nStructure is documented below.',
      () =>
        compute_RegionUrlMapDefaultRouteActionWeightedBackendServiceHeaderActionRequestHeadersToAdd_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'requestHeadersToRemoves',
      'A list of header names for headers that need to be removed from the request before forwarding the request to the backendService.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'responseHeadersToAdds',
      'Headers to add the response before sending the response back to the client.\nStructure is documented below.',
      () =>
        compute_RegionUrlMapDefaultRouteActionWeightedBackendServiceHeaderActionResponseHeadersToAdd_GetTypes(),
      false,
      false,
    ),
  ];
}
