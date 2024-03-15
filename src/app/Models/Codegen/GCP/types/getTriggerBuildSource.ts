import { getTriggerBuildSourceRepoSource } from "./getTriggerBuildSourceRepoSource";
import { getTriggerBuildSourceStorageSource } from "./getTriggerBuildSourceStorageSource";

export interface getTriggerBuildSource {
  // Location of the source in a Google Cloud Source Repository.
  RepoSources?: Array<getTriggerBuildSourceRepoSource>;

  // Location of the source in an archive file in Google Cloud Storage.
  StorageSources?: Array<getTriggerBuildSourceStorageSource>;
}
