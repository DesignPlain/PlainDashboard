import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  cloudbuild_getTriggerBuildSourceRepoSource,
  cloudbuild_getTriggerBuildSourceRepoSource_GetTypes,
} from "./cloudbuild_getTriggerBuildSourceRepoSource";
import {
  cloudbuild_getTriggerBuildSourceStorageSource,
  cloudbuild_getTriggerBuildSourceStorageSource_GetTypes,
} from "./cloudbuild_getTriggerBuildSourceStorageSource";

export interface cloudbuild_getTriggerBuildSource {
  // Location of the source in a Google Cloud Source Repository.
  repoSources?: Array<cloudbuild_getTriggerBuildSourceRepoSource>;

  // Location of the source in an archive file in Google Cloud Storage.
  storageSources?: Array<cloudbuild_getTriggerBuildSourceStorageSource>;
}

export function cloudbuild_getTriggerBuildSource_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "repoSources",
      "Location of the source in a Google Cloud Source Repository.",
      cloudbuild_getTriggerBuildSourceRepoSource_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "storageSources",
      "Location of the source in an archive file in Google Cloud Storage.",
      cloudbuild_getTriggerBuildSourceStorageSource_GetTypes(),
      true,
      false,
    ),
  ];
}
