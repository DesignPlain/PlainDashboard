import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface cloudbuild_getTriggerBuildArtifactNpmPackage {
  // Path to the package.json. e.g. workspace/path/to/package
  packagePath?: string;

  /*
Artifact Registry repository, in the form "https://$REGION-npm.pkg.dev/$PROJECT/$REPOSITORY"

Npm package in the workspace specified by path will be zipped and uploaded to Artifact Registry with this location as a prefix.
*/
  repository?: string;
}

export function cloudbuild_getTriggerBuildArtifactNpmPackage_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "packagePath",
      "Path to the package.json. e.g. workspace/path/to/package",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "repository",
      'Artifact Registry repository, in the form "https://$REGION-npm.pkg.dev/$PROJECT/$REPOSITORY"\n\nNpm package in the workspace specified by path will be zipped and uploaded to Artifact Registry with this location as a prefix.',
      () => [],
      true,
      false,
    ),
  ];
}
