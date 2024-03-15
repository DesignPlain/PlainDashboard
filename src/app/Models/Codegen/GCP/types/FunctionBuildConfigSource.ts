import { FunctionBuildConfigSourceRepoSource } from "./FunctionBuildConfigSourceRepoSource";
import { FunctionBuildConfigSourceStorageSource } from "./FunctionBuildConfigSourceStorageSource";

export interface FunctionBuildConfigSource {
  /*
If provided, get the source from this location in a Cloud Source Repository.
Structure is documented below.
*/
  RepoSource?: FunctionBuildConfigSourceRepoSource;

  /*
If provided, get the source from this location in Google Cloud Storage.
Structure is documented below.
*/
  StorageSource?: FunctionBuildConfigSourceStorageSource;
}
