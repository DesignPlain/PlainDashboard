import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Cloudbuild_getTriggerBuildArtifactMavenArtifact {
  // Maven groupId value used when uploading the artifact to Artifact Registry.
  GroupId?: string;

  // Path to an artifact in the build's workspace to be uploaded to Artifact Registry. This can be either an absolute path, e.g. /workspace/my-app/target/my-app-1.0.SNAPSHOT.jar or a relative path from /workspace, e.g. my-app/target/my-app-1.0.SNAPSHOT.jar.
  Path?: string;

  /*
Artifact Registry repository, in the form "https://$REGION-maven.pkg.dev/$PROJECT/$REPOSITORY"

Artifact in the workspace specified by path will be uploaded to Artifact Registry with this location as a prefix.
*/
  Repository?: string;

  // Maven version value used when uploading the artifact to Artifact Registry.
  Version?: string;

  // Maven artifactId value used when uploading the artifact to Artifact Registry.
  ArtifactId?: string;
}

export function Cloudbuild_getTriggerBuildArtifactMavenArtifact_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "GroupId",
      "Maven groupId value used when uploading the artifact to Artifact Registry.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Path",
      "Path to an artifact in the build's workspace to be uploaded to Artifact Registry. This can be either an absolute path, e.g. /workspace/my-app/target/my-app-1.0.SNAPSHOT.jar or a relative path from /workspace, e.g. my-app/target/my-app-1.0.SNAPSHOT.jar.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Repository",
      'Artifact Registry repository, in the form "https://$REGION-maven.pkg.dev/$PROJECT/$REPOSITORY"\n\nArtifact in the workspace specified by path will be uploaded to Artifact Registry with this location as a prefix.',
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Version",
      "Maven version value used when uploading the artifact to Artifact Registry.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ArtifactId",
      "Maven artifactId value used when uploading the artifact to Artifact Registry.",
      [],
      true,
      false,
    ),
  ];
}
