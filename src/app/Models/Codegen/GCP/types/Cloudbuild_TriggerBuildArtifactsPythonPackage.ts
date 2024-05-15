import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Cloudbuild_TriggerBuildArtifactsPythonPackage {
  // Path globs used to match files in the build's workspace. For Python/ Twine, this is usually dist/-, and sometimes additionally an .asc file.
  Paths?: Array<string>;

  /*
Artifact Registry repository, in the form "https://$REGION-python.pkg.dev/$PROJECT/$REPOSITORY"
Files in the workspace matching any path pattern will be uploaded to Artifact Registry with this location as a prefix.
*/
  Repository?: string;
}

export function Cloudbuild_TriggerBuildArtifactsPythonPackage_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "Paths",
      "Path globs used to match files in the build's workspace. For Python/ Twine, this is usually dist/*, and sometimes additionally an .asc file.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Repository",
      'Artifact Registry repository, in the form "https://$REGION-python.pkg.dev/$PROJECT/$REPOSITORY"\nFiles in the workspace matching any path pattern will be uploaded to Artifact Registry with this location as a prefix.',
      [],
      false,
      false,
    ),
  ];
}
