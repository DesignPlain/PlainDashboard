import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  cloudbuild_getTriggerBuildAvailableSecret,
  cloudbuild_getTriggerBuildAvailableSecret_GetTypes,
} from "./cloudbuild_getTriggerBuildAvailableSecret";
import {
  cloudbuild_getTriggerBuildOption,
  cloudbuild_getTriggerBuildOption_GetTypes,
} from "./cloudbuild_getTriggerBuildOption";
import {
  cloudbuild_getTriggerBuildSource,
  cloudbuild_getTriggerBuildSource_GetTypes,
} from "./cloudbuild_getTriggerBuildSource";
import {
  cloudbuild_getTriggerBuildStep,
  cloudbuild_getTriggerBuildStep_GetTypes,
} from "./cloudbuild_getTriggerBuildStep";
import {
  cloudbuild_getTriggerBuildSecret,
  cloudbuild_getTriggerBuildSecret_GetTypes,
} from "./cloudbuild_getTriggerBuildSecret";
import {
  cloudbuild_getTriggerBuildArtifact,
  cloudbuild_getTriggerBuildArtifact_GetTypes,
} from "./cloudbuild_getTriggerBuildArtifact";

export interface cloudbuild_getTriggerBuild {
  // Substitutions data for Build resource.
  substitutions?: Map<string, string>;

  /*
Google Cloud Storage bucket where logs should be written.
Logs file names will be of the format ${logsBucket}/log-${build_id}.txt.
*/
  logsBucket?: string;

  // Special options for this build.
  options?: Array<cloudbuild_getTriggerBuildOption>;

  /*
The location of the source files to build.

One of 'storageSource' or 'repoSource' must be provided.
*/
  sources?: Array<cloudbuild_getTriggerBuildSource>;

  // The operations to be performed on the workspace.
  steps?: Array<cloudbuild_getTriggerBuildStep>;

  // Secrets to decrypt using Cloud Key Management Service.
  secrets?: Array<cloudbuild_getTriggerBuildSecret>;

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

  // Artifacts produced by the build that should be uploaded upon successful completion of all build steps.
  artifacts?: Array<cloudbuild_getTriggerBuildArtifact>;

  // Secrets and secret environment variables.
  availableSecrets?: Array<cloudbuild_getTriggerBuildAvailableSecret>;

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
}

export function cloudbuild_getTriggerBuild_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "secrets",
      "Secrets to decrypt using Cloud Key Management Service.",
      cloudbuild_getTriggerBuildSecret_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "tags",
      "Tags for annotation of a Build. These are not docker tags.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "timeout",
      "Amount of time that this build should be allowed to run, to second granularity.\nIf this amount of time elapses, work on the build will cease and the build status will be TIMEOUT.\nThis timeout must be equal to or greater than the sum of the timeouts for build steps within the build.\nThe expected format is the number of seconds followed by s.\nDefault time is ten minutes (600s).",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "artifacts",
      "Artifacts produced by the build that should be uploaded upon successful completion of all build steps.",
      cloudbuild_getTriggerBuildArtifact_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "images",
      "A list of images to be pushed upon the successful completion of all build steps.\nThe images are pushed using the builder service account's credentials.\nThe digests of the pushed images will be stored in the Build resource's results field.\nIf any of the images fail to be pushed, the build status is marked FAILURE.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "queueTtl",
      "TTL in queue for this build. If provided and the build is enqueued longer than this value,\nthe build will expire and the build status will be EXPIRED.\nThe TTL starts ticking from createTime.\nA duration in seconds with up to nine fractional digits, terminated by 's'. Example: \"3.5s\".",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "substitutions",
      "Substitutions data for Build resource.",
      InputType_Map_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "logsBucket",
      "Google Cloud Storage bucket where logs should be written.\nLogs file names will be of the format ${logsBucket}/log-${build_id}.txt.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "options",
      "Special options for this build.",
      cloudbuild_getTriggerBuildOption_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "sources",
      "The location of the source files to build.\n\nOne of 'storageSource' or 'repoSource' must be provided.",
      cloudbuild_getTriggerBuildSource_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "steps",
      "The operations to be performed on the workspace.",
      cloudbuild_getTriggerBuildStep_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "availableSecrets",
      "Secrets and secret environment variables.",
      cloudbuild_getTriggerBuildAvailableSecret_GetTypes(),
      true,
      false,
    ),
  ];
}
