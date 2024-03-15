import { TriggerBuildSecret } from "./TriggerBuildSecret";
import { TriggerBuildSource } from "./TriggerBuildSource";
import { TriggerBuildArtifacts } from "./TriggerBuildArtifacts";
import { TriggerBuildOptions } from "./TriggerBuildOptions";
import { TriggerBuildStep } from "./TriggerBuildStep";
import { TriggerBuildAvailableSecrets } from "./TriggerBuildAvailableSecrets";

export interface TriggerBuild {
  /*
Special options for this build.
Structure is documented below.
*/
  Options?: TriggerBuildOptions;

  /*
TTL in queue for this build. If provided and the build is enqueued longer than this value,
the build will expire and the build status will be EXPIRED.
The TTL starts ticking from createTime.
A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".
*/
  QueueTtl?: string;

  /*
The operations to be performed on the workspace.
Structure is documented below.
*/
  Steps?: Array<TriggerBuildStep>;

  // Tags for annotation of a Build. These are not docker tags.
  Tags?: Array<string>;

  /*
Amount of time that this build should be allowed to run, to second granularity.
If this amount of time elapses, work on the build will cease and the build status will be TIMEOUT.
This timeout must be equal to or greater than the sum of the timeouts for build steps within the build.
The expected format is the number of seconds followed by s.
Default time is ten minutes (600s).
*/
  Timeout?: string;

  /*
Secrets and secret environment variables.
Structure is documented below.
*/
  AvailableSecrets?: TriggerBuildAvailableSecrets;

  /*
Google Cloud Storage bucket where logs should be written.
Logs file names will be of the format ${logsBucket}/log-${build_id}.txt.
*/
  LogsBucket?: string;

  /*
Secrets to decrypt using Cloud Key Management Service.
Structure is documented below.
*/
  Secrets?: Array<TriggerBuildSecret>;

  /*
The location of the source files to build.
One of `storageSource` or `repoSource` must be provided.
Structure is documented below.
*/
  Source?: TriggerBuildSource;

  // Substitutions data for Build resource.
  Substitutions?: Map<string, string>;

  /*
Artifacts produced by the build that should be uploaded upon successful completion of all build steps.
Structure is documented below.
*/
  Artifacts?: TriggerBuildArtifacts;

  /*
A list of images to be pushed upon the successful completion of all build steps.
The images are pushed using the builder service account's credentials.
The digests of the pushed images will be stored in the Build resource's results field.
If any of the images fail to be pushed, the build status is marked FAILURE.
*/
  Images?: Array<string>;
}
