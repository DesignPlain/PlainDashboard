import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface cloudrunv2_getServiceTemplateVolumeGc {
  // GCS Bucket name
  bucket?: string;

  // If true, mount the GCS bucket as read-only
  readOnly?: boolean;
}

export function cloudrunv2_getServiceTemplateVolumeGc_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "bucket",
      "GCS Bucket name",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "readOnly",
      "If true, mount the GCS bucket as read-only",
      () => [],
      true,
      false,
    ),
  ];
}
