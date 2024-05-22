import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface cloudbuild_getTriggerBuildArtifactNpmPackage {
  /*
Artifact Registry repository, in the form "https://$REGION-npm.pkg.dev/$PROJECT/$REPOSITORY"

Npm package in the workspace specified by path will be zipped and uploaded to Artifact Registry with this location as a prefix.
*/
  repository?: string;

  // Path to the package.json. e.g. workspace/path/to/package
  packagePath?: string;
}

export function cloudbuild_getTriggerBuildArtifactNpmPackage_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "repository",
      'Artifact Registry repository, in the form "https://$REGION-npm.pkg.dev/$PROJECT/$REPOSITORY"\n\nNpm package in the workspace specified by path will be zipped and uploaded to Artifact Registry with this location as a prefix.',
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "packagePath",
      "Path to the package.json. e.g. workspace/path/to/package",
      [],
      true,
      false,
    ),
  ];
}
