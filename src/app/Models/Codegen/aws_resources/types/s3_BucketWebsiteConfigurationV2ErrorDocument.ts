import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface s3_BucketWebsiteConfigurationV2ErrorDocument {
  // Object key name to use when a 4XX class error occurs.
  key?: string;
}

export function s3_BucketWebsiteConfigurationV2ErrorDocument_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "key",
      "Object key name to use when a 4XX class error occurs.",
      [],
      true,
      false,
    ),
  ];
}
