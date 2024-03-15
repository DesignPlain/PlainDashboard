import { getFunctionBuildConfigSourceRepoSource } from "./getFunctionBuildConfigSourceRepoSource";
import { getFunctionBuildConfigSourceStorageSource } from "./getFunctionBuildConfigSourceStorageSource";

export interface getFunctionBuildConfigSource {
  // If provided, get the source from this location in a Cloud Source Repository.
  RepoSources?: Array<getFunctionBuildConfigSourceRepoSource>;

  // If provided, get the source from this location in Google Cloud Storage.
  StorageSources?: Array<getFunctionBuildConfigSourceStorageSource>;
}
