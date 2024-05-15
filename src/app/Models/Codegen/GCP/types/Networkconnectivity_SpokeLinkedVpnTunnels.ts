import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Networkconnectivity_SpokeLinkedVpnTunnels {
  // A value that controls whether site-to-site data transfer is enabled for these resources. Note that data transfer is available only in supported locations.
  SiteToSiteDataTransfer?: boolean;

  // The URIs of linked VPN tunnel resources.
  Uris?: Array<string>;
}

export function Networkconnectivity_SpokeLinkedVpnTunnels_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "SiteToSiteDataTransfer",
      "A value that controls whether site-to-site data transfer is enabled for these resources. Note that data transfer is available only in supported locations.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Uris",
      "The URIs of linked VPN tunnel resources.",
      InputType_String_GetTypes(),
      true,
      true,
    ),
  ];
}
