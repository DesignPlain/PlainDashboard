import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Cloudbuild_getTriggerBuildStep,
  Cloudbuild_getTriggerBuildStep_GetTypes,
} from "./Cloudbuild_getTriggerBuildStep";
import {
  Cloudbuild_getTriggerBuildSource,
  Cloudbuild_getTriggerBuildSource_GetTypes,
} from "./Cloudbuild_getTriggerBuildSource";
import {
  Cloudbuild_getTriggerBuildArtifact,
  Cloudbuild_getTriggerBuildArtifact_GetTypes,
} from "./Cloudbuild_getTriggerBuildArtifact";
import {
  Cloudbuild_getTriggerBuildAvailableSecret,
  Cloudbuild_getTriggerBuildAvailableSecret_GetTypes,
} from "./Cloudbuild_getTriggerBuildAvailableSecret";
import {
  Cloudbuild_getTriggerBuildOption,
  Cloudbuild_getTriggerBuildOption_GetTypes,
} from "./Cloudbuild_getTriggerBuildOption";
import {
  Cloudbuild_getTriggerBuildSecret,
  Cloudbuild_getTriggerBuildSecret_GetTypes,
} from "./Cloudbuild_getTriggerBuildSecret";

export interface Cloudbuild_getTriggerBuild {
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

  /*
TTL in queue for this build. If provided and the build is enqueued longer than this value,
the build will expire and the build status will be EXPIRED.
The TTL starts ticking from createTime.
A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".
*/
  QueueTtl?: string;

  // The operations to be performed on the workspace.
  Steps?: Array<Cloudbuild_getTriggerBuildStep>;

  /*
The location of the source files to build.

One of 'storageSource' or 'repoSource' must be provided.
*/
  Sources?: Array<Cloudbuild_getTriggerBuildSource>;

  // Substitutions data for Build resource.
  Substitutions?: Map<string, string>;

  // Artifacts produced by the build that should be uploaded upon successful completion of all build steps.
  Artifacts?: Array<Cloudbuild_getTriggerBuildArtifact>;

  // Secrets and secret environment variables.
  AvailableSecrets?: Array<Cloudbuild_getTriggerBuildAvailableSecret>;

  // Special options for this build.
  Options?: Array<Cloudbuild_getTriggerBuildOption>;

  // Secrets to decrypt using Cloud Key Management Service.
  Secrets?: Array<Cloudbuild_getTriggerBuildSecret>;
}

export function Cloudbuild_getTriggerBuild_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "Tags",
      "Tags for annotation of a Build. These are not docker tags.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Timeout",
      "Amount of time that this build should be allowed to run, to second granularity.\nIf this amount of time elapses, work on the build will cease and the build status will be TIMEOUT.\nThis timeout must be equal to or greater than the sum of the timeouts for build steps within the build.\nThe expected format is the number of seconds followed by s.\nDefault time is ten minutes (600s).",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Images",
      "A list of images to be pushed upon the successful completion of all build steps.\nThe images are pushed using the builder service account's credentials.\nThe digests of the pushed images will be stored in the Build resource's results field.\nIf any of the images fail to be pushed, the build status is marked FAILURE.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "QueueTtl",
      "TTL in queue for this build. If provided and the build is enqueued longer than this value,\nthe build will expire and the build status will be EXPIRED.\nThe TTL starts ticking from createTime.\nA duration in seconds with up to nine fractional digits, terminated by 's'. Example: \"3.5s\".",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Steps",
      "The operations to be performed on the workspace.",
      Cloudbuild_getTriggerBuildStep_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "Substitutions",
      "Substitutions data for Build resource.",
      InputType_Map_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Secrets",
      "Secrets to decrypt using Cloud Key Management Service.",
      Cloudbuild_getTriggerBuildSecret_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "LogsBucket",
      "Google Cloud Storage bucket where logs should be written.\nLogs file names will be of the format ${logsBucket}/log-${build_id}.txt.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Sources",
      "The location of the source files to build.\n\nOne of 'storageSource' or 'repoSource' must be provided.",
      Cloudbuild_getTriggerBuildSource_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Artifacts",
      "Artifacts produced by the build that should be uploaded upon successful completion of all build steps.",
      Cloudbuild_getTriggerBuildArtifact_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "AvailableSecrets",
      "Secrets and secret environment variables.",
      Cloudbuild_getTriggerBuildAvailableSecret_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Options",
      "Special options for this build.",
      Cloudbuild_getTriggerBuildOption_GetTypes(),
      true,
      false,
    ),
  ];
}
