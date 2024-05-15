import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Appengine_FlexibleAppVersionResourcesVolume {
  // Unique name for the volume.
  Name?: string;

  // Volume size in gigabytes.
  SizeGb?: number;

  // Underlying volume type, e.g. 'tmpfs'.
  VolumeType?: string;
}

export function Appengine_FlexibleAppVersionResourcesVolume_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Name",
      "Unique name for the volume.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "SizeGb",
      "Volume size in gigabytes.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "VolumeType",
      "Underlying volume type, e.g. 'tmpfs'.",
      [],
      true,
      false,
    ),
  ];
}
