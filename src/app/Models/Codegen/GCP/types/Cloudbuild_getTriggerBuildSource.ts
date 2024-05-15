import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Cloudbuild_getTriggerBuildSourceRepoSource,
  Cloudbuild_getTriggerBuildSourceRepoSource_GetTypes,
} from "./Cloudbuild_getTriggerBuildSourceRepoSource";
import {
  Cloudbuild_getTriggerBuildSourceStorageSource,
  Cloudbuild_getTriggerBuildSourceStorageSource_GetTypes,
} from "./Cloudbuild_getTriggerBuildSourceStorageSource";

export interface Cloudbuild_getTriggerBuildSource {
  // Location of the source in a Google Cloud Source Repository.
  RepoSources?: Array<Cloudbuild_getTriggerBuildSourceRepoSource>;

  // Location of the source in an archive file in Google Cloud Storage.
  StorageSources?: Array<Cloudbuild_getTriggerBuildSourceStorageSource>;
}

export function Cloudbuild_getTriggerBuildSource_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "RepoSources",
      "Location of the source in a Google Cloud Source Repository.",
      Cloudbuild_getTriggerBuildSourceRepoSource_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "StorageSources",
      "Location of the source in an archive file in Google Cloud Storage.",
      Cloudbuild_getTriggerBuildSourceStorageSource_GetTypes(),
      true,
      false,
    ),
  ];
}
