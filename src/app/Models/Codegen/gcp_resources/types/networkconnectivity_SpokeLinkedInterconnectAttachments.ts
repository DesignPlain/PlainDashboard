import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface networkconnectivity_SpokeLinkedInterconnectAttachments {
  // The URIs of linked interconnect attachment resources
  uris?: Array<string>;

  // A value that controls whether site-to-site data transfer is enabled for these resources. Note that data transfer is available only in supported locations.
  siteToSiteDataTransfer?: boolean;
}

export function networkconnectivity_SpokeLinkedInterconnectAttachments_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "siteToSiteDataTransfer",
      "A value that controls whether site-to-site data transfer is enabled for these resources. Note that data transfer is available only in supported locations.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "uris",
      "The URIs of linked interconnect attachment resources",
      InputType_String_GetTypes(),
      true,
      true,
    ),
  ];
}
