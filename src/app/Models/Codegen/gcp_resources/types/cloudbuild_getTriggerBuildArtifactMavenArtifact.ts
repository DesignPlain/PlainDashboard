import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface cloudbuild_getTriggerBuildArtifactMavenArtifact {
  // Path to an artifact in the build's workspace to be uploaded to Artifact Registry. This can be either an absolute path, e.g. /workspace/my-app/target/my-app-1.0.SNAPSHOT.jar or a relative path from /workspace, e.g. my-app/target/my-app-1.0.SNAPSHOT.jar.
  path?: string;

  /*
Artifact Registry repository, in the form "https://$REGION-maven.pkg.dev/$PROJECT/$REPOSITORY"

Artifact in the workspace specified by path will be uploaded to Artifact Registry with this location as a prefix.
*/
  repository?: string;

  // Maven version value used when uploading the artifact to Artifact Registry.
  version?: string;

  // Maven artifactId value used when uploading the artifact to Artifact Registry.
  artifactId?: string;

  // Maven groupId value used when uploading the artifact to Artifact Registry.
  groupId?: string;
}

export function cloudbuild_getTriggerBuildArtifactMavenArtifact_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "path",
      "Path to an artifact in the build's workspace to be uploaded to Artifact Registry. This can be either an absolute path, e.g. /workspace/my-app/target/my-app-1.0.SNAPSHOT.jar or a relative path from /workspace, e.g. my-app/target/my-app-1.0.SNAPSHOT.jar.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "repository",
      'Artifact Registry repository, in the form "https://$REGION-maven.pkg.dev/$PROJECT/$REPOSITORY"\n\nArtifact in the workspace specified by path will be uploaded to Artifact Registry with this location as a prefix.',
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "version",
      "Maven version value used when uploading the artifact to Artifact Registry.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "artifactId",
      "Maven artifactId value used when uploading the artifact to Artifact Registry.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "groupId",
      "Maven groupId value used when uploading the artifact to Artifact Registry.",
      [],
      true,
      false,
    ),
  ];
}
