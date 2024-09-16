import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface networkconnectivity_SpokeLinkedVpnTunnels {
  // The URIs of linked VPN tunnel resources.
  uris?: Array<string>;

  // A value that controls whether site-to-site data transfer is enabled for these resources. Note that data transfer is available only in supported locations.
  siteToSiteDataTransfer?: boolean;
}

export function networkconnectivity_SpokeLinkedVpnTunnels_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'uris',
      'The URIs of linked VPN tunnel resources.',
      () => InputType_String_GetTypes(),
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'siteToSiteDataTransfer',
      'A value that controls whether site-to-site data transfer is enabled for these resources. Note that data transfer is available only in supported locations.',
      () => [],
      true,
      true,
    ),
  ];
}
