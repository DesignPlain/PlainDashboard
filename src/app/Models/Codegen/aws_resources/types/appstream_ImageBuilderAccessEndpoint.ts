import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface appstream_ImageBuilderAccessEndpoint {
  // Type of interface endpoint.
  endpointType?: string;

  // Identifier (ID) of the VPC in which the interface endpoint is used.
  vpceId?: string;
}

export function appstream_ImageBuilderAccessEndpoint_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "endpointType",
      "Type of interface endpoint.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "vpceId",
      "Identifier (ID) of the VPC in which the interface endpoint is used.",
      [],
      false,
      false,
    ),
  ];
}
