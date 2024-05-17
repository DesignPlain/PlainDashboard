import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Cloudbuild_TriggerBuildArtifacts,
  Cloudbuild_TriggerBuildArtifacts_GetTypes,
} from "./Cloudbuild_TriggerBuildArtifacts";
import {
  Cloudbuild_TriggerBuildAvailableSecrets,
  Cloudbuild_TriggerBuildAvailableSecrets_GetTypes,
} from "./Cloudbuild_TriggerBuildAvailableSecrets";
import {
  Cloudbuild_TriggerBuildSource,
  Cloudbuild_TriggerBuildSource_GetTypes,
} from "./Cloudbuild_TriggerBuildSource";
import {
  Cloudbuild_TriggerBuildStep,
  Cloudbuild_TriggerBuildStep_GetTypes,
} from "./Cloudbuild_TriggerBuildStep";
import {
  Cloudbuild_TriggerBuildOptions,
  Cloudbuild_TriggerBuildOptions_GetTypes,
} from "./Cloudbuild_TriggerBuildOptions";
import {
  Cloudbuild_TriggerBuildSecret,
  Cloudbuild_TriggerBuildSecret_GetTypes,
} from "./Cloudbuild_TriggerBuildSecret";

export interface Cloudbuild_TriggerBuild {
  /*
Special options for this build.
Structure is documented below.
*/
  Options?: Cloudbuild_TriggerBuildOptions;

  /*
TTL in queue for this build. If provided and the build is enqueued longer than this value,
the build will expire and the build status will be EXPIRED.
The TTL starts ticking from createTime.
A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".
*/
  QueueTtl?: string;

  /*
Secrets to decrypt using Cloud Key Management Service.
Structure is documented below.
*/
  Secrets?: Array<Cloudbuild_TriggerBuildSecret>;

  // Tags for annotation of a Build. These are not docker tags.
  Tags?: Array<string>;

  /*
Artifacts produced by the build that should be uploaded upon successful completion of all build steps.
Structure is documented below.
*/
  Artifacts?: Cloudbuild_TriggerBuildArtifacts;

  /*
Secrets and secret environment variables.
Structure is documented below.
*/
  AvailableSecrets?: Cloudbuild_TriggerBuildAvailableSecrets;

  /*
The location of the source files to build.
One of `storageSource` or `repoSource` must be provided.
Structure is documented below.
*/
  Source?: Cloudbuild_TriggerBuildSource;

  /*
The operations to be performed on the workspace.
Structure is documented below.
*/
  Steps?: Array<Cloudbuild_TriggerBuildStep>;

  // Substitutions data for Build resource.
  Substitutions?: Map<string, string>;

  /*
Amount of time that this build should be allowed to run, to second granularity.
If this amount of time elapses, work on the build will cease and the build status will be TIMEOUT.
This timeout must be equal to or greater than the sum of the timeouts for build steps within the build.
The expected format is the number of seconds followed by s.
Default time is ten minutes (600s).
*/
  Timeout?: string;

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
}

export function Cloudbuild_TriggerBuild_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "Tags",
      "Tags for annotation of a Build. These are not docker tags.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Steps",
      "The operations to be performed on the workspace.\nStructure is documented below.",
      Cloudbuild_TriggerBuildStep_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "Substitutions",
      "Substitutions data for Build resource.",
      InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Options",
      "Special options for this build.\nStructure is documented below.",
      Cloudbuild_TriggerBuildOptions_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Secrets",
      "Secrets to decrypt using Cloud Key Management Service.\nStructure is documented below.",
      Cloudbuild_TriggerBuildSecret_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Artifacts",
      "Artifacts produced by the build that should be uploaded upon successful completion of all build steps.\nStructure is documented below.",
      Cloudbuild_TriggerBuildArtifacts_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "AvailableSecrets",
      "Secrets and secret environment variables.\nStructure is documented below.",
      Cloudbuild_TriggerBuildAvailableSecrets_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Source",
      "The location of the source files to build.\nOne of `storageSource` or `repoSource` must be provided.\nStructure is documented below.",
      Cloudbuild_TriggerBuildSource_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Timeout",
      "Amount of time that this build should be allowed to run, to second granularity.\nIf this amount of time elapses, work on the build will cease and the build status will be TIMEOUT.\nThis timeout must be equal to or greater than the sum of the timeouts for build steps within the build.\nThe expected format is the number of seconds followed by s.\nDefault time is ten minutes (600s).",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Images",
      "A list of images to be pushed upon the successful completion of all build steps.\nThe images are pushed using the builder service account's credentials.\nThe digests of the pushed images will be stored in the Build resource's results field.\nIf any of the images fail to be pushed, the build status is marked FAILURE.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "LogsBucket",
      "Google Cloud Storage bucket where logs should be written.\nLogs file names will be of the format ${logsBucket}/log-${build_id}.txt.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "QueueTtl",
      "TTL in queue for this build. If provided and the build is enqueued longer than this value,\nthe build will expire and the build status will be EXPIRED.\nThe TTL starts ticking from createTime.\nA duration in seconds with up to nine fractional digits, terminated by 's'. Example: \"3.5s\".",
      [],
      false,
      false,
    ),
  ];
}
