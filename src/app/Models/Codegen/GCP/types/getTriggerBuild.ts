import { getTriggerBuildAvailableSecret } from "./getTriggerBuildAvailableSecret";
import { getTriggerBuildOption } from "./getTriggerBuildOption";
import { getTriggerBuildSecret } from "./getTriggerBuildSecret";
import { getTriggerBuildArtifact } from "./getTriggerBuildArtifact";
import { getTriggerBuildSource } from "./getTriggerBuildSource";
import { getTriggerBuildStep } from "./getTriggerBuildStep";

export interface getTriggerBuild {
  /*
Amount of time that this build should be allowed to run, to second granularity.
If this amount of time elapses, work on the build will cease and the build status will be TIMEOUT.
This timeout must be equal to or greater than the sum of the timeouts for build steps within the build.
The expected format is the number of seconds followed by s.
Default time is ten minutes (600s).
*/
  Timeout?: string;

  // Secrets and secret environment variables.
  AvailableSecrets?: Array<getTriggerBuildAvailableSecret>;

  /*
A list of images to be pushed upon the successful completion of all build steps.
The images are pushed using the builder service account's credentials.
The digests of the pushed images will be stored in the Build resource's results field.
If any of the images fail to be pushed, the build status is marked FAILURE.
*/
  Images?: Array<string>;

  /*
Google Cloud Storage bucket where logs should be written.
Logs file names will be of the format ${logsBucket}/log-${build_id}.txt.
*/
  LogsBucket?: string;

  // Special options for this build.
  Options?: Array<getTriggerBuildOption>;

  // Secrets to decrypt using Cloud Key Management Service.
  Secrets?: Array<getTriggerBuildSecret>;

  // Tags for annotation of a Build. These are not docker tags.
  Tags?: Array<string>;

  // Artifacts produced by the build that should be uploaded upon successful completion of all build steps.
  Artifacts?: Array<getTriggerBuildArtifact>;

  /*
TTL in queue for this build. If provided and the build is enqueued longer than this value,
the build will expire and the build status will be EXPIRED.
The TTL starts ticking from createTime.
A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".
*/
  QueueTtl?: string;

  /*
The location of the source files to build.

One of 'storageSource' or 'repoSource' must be provided.
*/
  Sources?: Array<getTriggerBuildSource>;

  // The operations to be performed on the workspace.
  Steps?: Array<getTriggerBuildStep>;

  // Substitutions data for Build resource.
  Substitutions?: Map<string, string>;
}
