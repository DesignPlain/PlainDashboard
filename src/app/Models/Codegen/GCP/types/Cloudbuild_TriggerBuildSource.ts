import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  cloudbuild_TriggerBuildSourceRepoSource,
  cloudbuild_TriggerBuildSourceRepoSource_GetTypes,
} from "./cloudbuild_TriggerBuildSourceRepoSource";
import {
  cloudbuild_TriggerBuildSourceStorageSource,
  cloudbuild_TriggerBuildSourceStorageSource_GetTypes,
} from "./cloudbuild_TriggerBuildSourceStorageSource";

export interface cloudbuild_TriggerBuildSource {
  /*
Location of the source in a Google Cloud Source Repository.
Structure is documented below.
*/
  repoSource?: cloudbuild_TriggerBuildSourceRepoSource;

  /*
Location of the source in an archive file in Google Cloud Storage.
Structure is documented below.
*/
  storageSource?: cloudbuild_TriggerBuildSourceStorageSource;
}

export function cloudbuild_TriggerBuildSource_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "repoSource",
      "Location of the source in a Google Cloud Source Repository.\nStructure is documented below.",
      cloudbuild_TriggerBuildSourceRepoSource_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "storageSource",
      "Location of the source in an archive file in Google Cloud Storage.\nStructure is documented below.",
      cloudbuild_TriggerBuildSourceStorageSource_GetTypes(),
      false,
      false,
    ),
  ];
}
