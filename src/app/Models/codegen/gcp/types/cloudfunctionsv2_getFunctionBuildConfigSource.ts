import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  cloudfunctionsv2_getFunctionBuildConfigSourceStorageSource,
  cloudfunctionsv2_getFunctionBuildConfigSourceStorageSource_GetTypes,
} from "./cloudfunctionsv2_getFunctionBuildConfigSourceStorageSource";
import {
  cloudfunctionsv2_getFunctionBuildConfigSourceRepoSource,
  cloudfunctionsv2_getFunctionBuildConfigSourceRepoSource_GetTypes,
} from "./cloudfunctionsv2_getFunctionBuildConfigSourceRepoSource";

export interface cloudfunctionsv2_getFunctionBuildConfigSource {
  // If provided, get the source from this location in Google Cloud Storage.
  storageSources?: Array<cloudfunctionsv2_getFunctionBuildConfigSourceStorageSource>;

  // If provided, get the source from this location in a Cloud Source Repository.
  repoSources?: Array<cloudfunctionsv2_getFunctionBuildConfigSourceRepoSource>;
}

export function cloudfunctionsv2_getFunctionBuildConfigSource_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "storageSources",
      "If provided, get the source from this location in Google Cloud Storage.",
      () =>
        cloudfunctionsv2_getFunctionBuildConfigSourceStorageSource_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "repoSources",
      "If provided, get the source from this location in a Cloud Source Repository.",
      () => cloudfunctionsv2_getFunctionBuildConfigSourceRepoSource_GetTypes(),
      true,
      false,
    ),
  ];
}
