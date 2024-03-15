import { TriggerBuildSourceStorageSource } from "./TriggerBuildSourceStorageSource";
import { TriggerBuildSourceRepoSource } from "./TriggerBuildSourceRepoSource";

export interface TriggerBuildSource {
  /*
Location of the source in a Google Cloud Source Repository.
Structure is documented below.
*/
  RepoSource?: TriggerBuildSourceRepoSource;

  /*
Location of the source in an archive file in Google Cloud Storage.
Structure is documented below.
*/
  StorageSource?: TriggerBuildSourceStorageSource;
}
