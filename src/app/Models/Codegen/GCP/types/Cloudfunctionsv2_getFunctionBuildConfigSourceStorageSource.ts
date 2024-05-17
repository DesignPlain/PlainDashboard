import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Cloudfunctionsv2_getFunctionBuildConfigSourceStorageSource {
  /*
Google Cloud Storage generation for the object. If the generation
is omitted, the latest generation will be used.
*/
  Generation?: number;

  // Google Cloud Storage object containing the source.
  Object?: string;

  // Google Cloud Storage bucket containing the source
  Bucket?: string;
}

export function Cloudfunctionsv2_getFunctionBuildConfigSourceStorageSource_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "Generation",
      "Google Cloud Storage generation for the object. If the generation\nis omitted, the latest generation will be used.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Object",
      "Google Cloud Storage object containing the source.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Bucket",
      "Google Cloud Storage bucket containing the source",
      [],
      true,
      false,
    ),
  ];
}
