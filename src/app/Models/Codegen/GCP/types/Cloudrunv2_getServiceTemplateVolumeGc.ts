import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Cloudrunv2_getServiceTemplateVolumeGc {
  // GCS Bucket name
  Bucket?: string;

  // If true, mount the GCS bucket as read-only
  ReadOnly?: boolean;
}

export function Cloudrunv2_getServiceTemplateVolumeGc_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Bucket",
      "GCS Bucket name",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "ReadOnly",
      "If true, mount the GCS bucket as read-only",
      [],
      true,
      false,
    ),
  ];
}
