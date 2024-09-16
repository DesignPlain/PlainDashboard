import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface cloudbuild_getTriggerBuildArtifactPythonPackage {
  // Path globs used to match files in the build's workspace. For Python/ Twine, this is usually dist/-, and sometimes additionally an .asc file.
  paths?: Array<string>;

  /*
Artifact Registry repository, in the form "https://$REGION-python.pkg.dev/$PROJECT/$REPOSITORY"

Files in the workspace matching any path pattern will be uploaded to Artifact Registry with this location as a prefix.
*/
  repository?: string;
}

export function cloudbuild_getTriggerBuildArtifactPythonPackage_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'paths',
      "Path globs used to match files in the build's workspace. For Python/ Twine, this is usually dist/*, and sometimes additionally an .asc file.",
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'repository',
      'Artifact Registry repository, in the form "https://$REGION-python.pkg.dev/$PROJECT/$REPOSITORY"\n\nFiles in the workspace matching any path pattern will be uploaded to Artifact Registry with this location as a prefix.',
      () => [],
      true,
      false,
    ),
  ];
}
