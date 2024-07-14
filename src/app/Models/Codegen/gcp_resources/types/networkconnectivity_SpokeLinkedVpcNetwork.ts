import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface networkconnectivity_SpokeLinkedVpcNetwork {
  // IP ranges encompassing the subnets to be excluded from peering.
  excludeExportRanges?: Array<string>;

  // The URI of the VPC network resource.
  uri?: string;
}

export function networkconnectivity_SpokeLinkedVpcNetwork_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "excludeExportRanges",
      "IP ranges encompassing the subnets to be excluded from peering.",
      InputType_String_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "uri",
      "The URI of the VPC network resource.",
      [],
      true,
      true,
    ),
  ];
}
