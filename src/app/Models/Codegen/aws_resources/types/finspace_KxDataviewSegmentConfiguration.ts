import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface finspace_KxDataviewSegmentConfiguration {
  // The database path of the data that you want to place on each selected volume. Each segment must have a unique database path for each volume.
  dbPaths?: Array<string>;

  // The name of the volume that you want to attach to a dataview. This volume must be in the same availability zone as the dataview that you are attaching to.
  volumeName?: string;
}

export function finspace_KxDataviewSegmentConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "dbPaths",
      "The database path of the data that you want to place on each selected volume. Each segment must have a unique database path for each volume.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "volumeName",
      "The name of the volume that you want to attach to a dataview. This volume must be in the same availability zone as the dataview that you are attaching to.",
      [],
      true,
      false,
    ),
  ];
}
