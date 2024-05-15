import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Networkconnectivity_SpokeLinkedVpcNetwork {
  // IP ranges encompassing the subnets to be excluded from peering.
  ExcludeExportRanges?: Array<string>;

  // The URI of the VPC network resource.
  Uri?: string;
}

export function Networkconnectivity_SpokeLinkedVpcNetwork_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "ExcludeExportRanges",
      "IP ranges encompassing the subnets to be excluded from peering.",
      InputType_String_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "Uri",
      "The URI of the VPC network resource.",
      [],
      true,
      true,
    ),
  ];
}
