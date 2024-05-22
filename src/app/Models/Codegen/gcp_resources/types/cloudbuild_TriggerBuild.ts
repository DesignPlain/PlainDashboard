import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  cloudbuild_TriggerBuildStep,
  cloudbuild_TriggerBuildStep_GetTypes,
} from "./cloudbuild_TriggerBuildStep";
import {
  cloudbuild_TriggerBuildArtifacts,
  cloudbuild_TriggerBuildArtifacts_GetTypes,
} from "./cloudbuild_TriggerBuildArtifacts";
import {
  cloudbuild_TriggerBuildAvailableSecrets,
  cloudbuild_TriggerBuildAvailableSecrets_GetTypes,
} from "./cloudbuild_TriggerBuildAvailableSecrets";
import {
  cloudbuild_TriggerBuildOptions,
  cloudbuild_TriggerBuildOptions_GetTypes,
} from "./cloudbuild_TriggerBuildOptions";
import {
  cloudbuild_TriggerBuildSecret,
  cloudbuild_TriggerBuildSecret_GetTypes,
} from "./cloudbuild_TriggerBuildSecret";
import {
  cloudbuild_TriggerBuildSource,
  cloudbuild_TriggerBuildSource_GetTypes,
} from "./cloudbuild_TriggerBuildSource";

export interface cloudbuild_TriggerBuild {
  // Tags for annotation of a Build. These are not docker tags.
  tags?: Array<string>;

  /*
Amount of time that this build should be allowed to run, to second granularity.
If this amount of time elapses, work on the build will cease and the build status will be TIMEOUT.
This timeout must be equal to or greater than the sum of the timeouts for build steps within the build.
The expected format is the number of seconds followed by s.
Default time is ten minutes (600s).
*/
  timeout?: string;

  /*
Google Cloud Storage bucket where logs should be written.
Logs file names will be of the format ${logsBucket}/log-${build_id}.txt.
*/
  logsBucket?: string;

  /*
Special options for this build.
Structure is documented below.
*/
  options?: cloudbuild_TriggerBuildOptions;

  /*
Secrets to decrypt using Cloud Key Management Service.
Structure is documented below.
*/
  secrets?: Array<cloudbuild_TriggerBuildSecret>;

  /*
The location of the source files to build.
One of `storageSource` or `repoSource` must be provided.
Structure is documented below.
*/
  source?: cloudbuild_TriggerBuildSource;

  /*
The operations to be performed on the workspace.
Structure is documented below.
*/
  steps?: Array<cloudbuild_TriggerBuildStep>;

  /*
Artifacts produced by the build that should be uploaded upon successful completion of all build steps.
Structure is documented below.
*/
  artifacts?: cloudbuild_TriggerBuildArtifacts;

  /*
Secrets and secret environment variables.
Structure is documented below.
*/
  availableSecrets?: cloudbuild_TriggerBuildAvailableSecrets;

  /*
A list of images to be pushed upon the successful completion of all build steps.
The images are pushed using the builder service account's credentials.
The digests of the pushed images will be stored in the Build resource's results field.
If any of the images fail to be pushed, the build status is marked FAILURE.
*/
  images?: Array<string>;

  /*
TTL in queue for this build. If provided and the build is enqueued longer than this value,
the build will expire and the build status will be EXPIRED.
The TTL starts ticking from createTime.
A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".
*/
  queueTtl?: string;

  // Substitutions data for Build resource.
  substitutions?: Map<string, string>;
}

export function cloudbuild_TriggerBuild_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "steps",
      "The operations to be performed on the workspace.\nStructure is documented below.",
      cloudbuild_TriggerBuildStep_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "artifacts",
      "Artifacts produced by the build that should be uploaded upon successful completion of all build steps.\nStructure is documented below.",
      cloudbuild_TriggerBuildArtifacts_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "availableSecrets",
      "Secrets and secret environment variables.\nStructure is documented below.",
      cloudbuild_TriggerBuildAvailableSecrets_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "images",
      "A list of images to be pushed upon the successful completion of all build steps.\nThe images are pushed using the builder service account's credentials.\nThe digests of the pushed images will be stored in the Build resource's results field.\nIf any of the images fail to be pushed, the build status is marked FAILURE.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "tags",
      "Tags for annotation of a Build. These are not docker tags.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "timeout",
      "Amount of time that this build should be allowed to run, to second granularity.\nIf this amount of time elapses, work on the build will cease and the build status will be TIMEOUT.\nThis timeout must be equal to or greater than the sum of the timeouts for build steps within the build.\nThe expected format is the number of seconds followed by s.\nDefault time is ten minutes (600s).",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "secrets",
      "Secrets to decrypt using Cloud Key Management Service.\nStructure is documented below.",
      cloudbuild_TriggerBuildSecret_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "source",
      "The location of the source files to build.\nOne of `storageSource` or `repoSource` must be provided.\nStructure is documented below.",
      cloudbuild_TriggerBuildSource_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "logsBucket",
      "Google Cloud Storage bucket where logs should be written.\nLogs file names will be of the format ${logsBucket}/log-${build_id}.txt.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "options",
      "Special options for this build.\nStructure is documented below.",
      cloudbuild_TriggerBuildOptions_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "queueTtl",
      "TTL in queue for this build. If provided and the build is enqueued longer than this value,\nthe build will expire and the build status will be EXPIRED.\nThe TTL starts ticking from createTime.\nA duration in seconds with up to nine fractional digits, terminated by 's'. Example: \"3.5s\".",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "substitutions",
      "Substitutions data for Build resource.",
      InputType_Map_GetTypes(),
      false,
      false,
    ),
  ];
}
