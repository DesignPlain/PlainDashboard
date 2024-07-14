import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface appengine_FlexibleAppVersionResourcesVolume {
  // Underlying volume type, e.g. 'tmpfs'.
  volumeType?: string;

  // Unique name for the volume.
  name?: string;

  // Volume size in gigabytes.
  sizeGb?: number;
}

export function appengine_FlexibleAppVersionResourcesVolume_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "volumeType",
      "Underlying volume type, e.g. 'tmpfs'.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "Unique name for the volume.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "sizeGb",
      "Volume size in gigabytes.",
      [],
      true,
      false,
    ),
  ];
}
