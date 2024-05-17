import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Datastream_ConnectionProfileGcsProfile {
  // The Cloud Storage bucket name.
  Bucket?: string;

  // The root path inside the Cloud Storage bucket.
  RootPath?: string;
}

export function Datastream_ConnectionProfileGcsProfile_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "RootPath",
      "The root path inside the Cloud Storage bucket.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Bucket",
      "The Cloud Storage bucket name.",
      [],
      true,
      false,
    ),
  ];
}
