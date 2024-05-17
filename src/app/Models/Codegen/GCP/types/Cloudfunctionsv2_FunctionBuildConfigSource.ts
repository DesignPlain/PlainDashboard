import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Cloudfunctionsv2_FunctionBuildConfigSourceStorageSource,
  Cloudfunctionsv2_FunctionBuildConfigSourceStorageSource_GetTypes,
} from "./Cloudfunctionsv2_FunctionBuildConfigSourceStorageSource";
import {
  Cloudfunctionsv2_FunctionBuildConfigSourceRepoSource,
  Cloudfunctionsv2_FunctionBuildConfigSourceRepoSource_GetTypes,
} from "./Cloudfunctionsv2_FunctionBuildConfigSourceRepoSource";

export interface Cloudfunctionsv2_FunctionBuildConfigSource {
  /*
If provided, get the source from this location in Google Cloud Storage.
Structure is documented below.
*/
  StorageSource?: Cloudfunctionsv2_FunctionBuildConfigSourceStorageSource;

  /*
If provided, get the source from this location in a Cloud Source Repository.
Structure is documented below.
*/
  RepoSource?: Cloudfunctionsv2_FunctionBuildConfigSourceRepoSource;
}

export function Cloudfunctionsv2_FunctionBuildConfigSource_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "StorageSource",
      "If provided, get the source from this location in Google Cloud Storage.\nStructure is documented below.",
      Cloudfunctionsv2_FunctionBuildConfigSourceStorageSource_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "RepoSource",
      "If provided, get the source from this location in a Cloud Source Repository.\nStructure is documented below.",
      Cloudfunctionsv2_FunctionBuildConfigSourceRepoSource_GetTypes(),
      false,
      false,
    ),
  ];
}
