import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Cloudfunctionsv2_getFunctionBuildConfigSourceRepoSource,
  Cloudfunctionsv2_getFunctionBuildConfigSourceRepoSource_GetTypes,
} from "./Cloudfunctionsv2_getFunctionBuildConfigSourceRepoSource";
import {
  Cloudfunctionsv2_getFunctionBuildConfigSourceStorageSource,
  Cloudfunctionsv2_getFunctionBuildConfigSourceStorageSource_GetTypes,
} from "./Cloudfunctionsv2_getFunctionBuildConfigSourceStorageSource";

export interface Cloudfunctionsv2_getFunctionBuildConfigSource {
  // If provided, get the source from this location in a Cloud Source Repository.
  RepoSources?: Array<Cloudfunctionsv2_getFunctionBuildConfigSourceRepoSource>;

  // If provided, get the source from this location in Google Cloud Storage.
  StorageSources?: Array<Cloudfunctionsv2_getFunctionBuildConfigSourceStorageSource>;
}

export function Cloudfunctionsv2_getFunctionBuildConfigSource_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "RepoSources",
      "If provided, get the source from this location in a Cloud Source Repository.",
      Cloudfunctionsv2_getFunctionBuildConfigSourceRepoSource_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "StorageSources",
      "If provided, get the source from this location in Google Cloud Storage.",
      Cloudfunctionsv2_getFunctionBuildConfigSourceStorageSource_GetTypes(),
      true,
      false,
    ),
  ];
}
