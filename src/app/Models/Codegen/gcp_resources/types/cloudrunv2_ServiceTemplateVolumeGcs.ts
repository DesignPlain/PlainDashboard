import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface cloudrunv2_ServiceTemplateVolumeGcs {
  // GCS Bucket name
  bucket?: string;

  // If true, mount the GCS bucket as read-only
  readOnly?: boolean;
}

export function cloudrunv2_ServiceTemplateVolumeGcs_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "bucket",
      "GCS Bucket name",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "readOnly",
      "If true, mount the GCS bucket as read-only",
      [],
      false,
      false,
    ),
  ];
}
