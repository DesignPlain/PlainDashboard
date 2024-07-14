import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface cloudfront_DistributionOriginGroupMember {
  // Unique identifier of the member origin.
  originId?: string;
}

export function cloudfront_DistributionOriginGroupMember_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "originId",
      "Unique identifier of the member origin.",
      [],
      true,
      false,
    ),
  ];
}
