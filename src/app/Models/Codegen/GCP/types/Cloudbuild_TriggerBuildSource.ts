import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Cloudbuild_TriggerBuildSourceStorageSource,
  Cloudbuild_TriggerBuildSourceStorageSource_GetTypes,
} from "./Cloudbuild_TriggerBuildSourceStorageSource";
import {
  Cloudbuild_TriggerBuildSourceRepoSource,
  Cloudbuild_TriggerBuildSourceRepoSource_GetTypes,
} from "./Cloudbuild_TriggerBuildSourceRepoSource";

export interface Cloudbuild_TriggerBuildSource {
  /*
Location of the source in a Google Cloud Source Repository.
Structure is documented below.
*/
  RepoSource?: Cloudbuild_TriggerBuildSourceRepoSource;

  /*
Location of the source in an archive file in Google Cloud Storage.
Structure is documented below.
*/
  StorageSource?: Cloudbuild_TriggerBuildSourceStorageSource;
}

export function Cloudbuild_TriggerBuildSource_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "StorageSource",
      "Location of the source in an archive file in Google Cloud Storage.\nStructure is documented below.",
      Cloudbuild_TriggerBuildSourceStorageSource_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "RepoSource",
      "Location of the source in a Google Cloud Source Repository.\nStructure is documented below.",
      Cloudbuild_TriggerBuildSourceRepoSource_GetTypes(),
      false,
      false,
    ),
  ];
}
