import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  cloudbuild_getTriggerBuildArtifactPythonPackage,
  cloudbuild_getTriggerBuildArtifactPythonPackage_GetTypes,
} from "./cloudbuild_getTriggerBuildArtifactPythonPackage";
import {
  cloudbuild_getTriggerBuildArtifactMavenArtifact,
  cloudbuild_getTriggerBuildArtifactMavenArtifact_GetTypes,
} from "./cloudbuild_getTriggerBuildArtifactMavenArtifact";
import {
  cloudbuild_getTriggerBuildArtifactNpmPackage,
  cloudbuild_getTriggerBuildArtifactNpmPackage_GetTypes,
} from "./cloudbuild_getTriggerBuildArtifactNpmPackage";
import {
  cloudbuild_getTriggerBuildArtifactObject,
  cloudbuild_getTriggerBuildArtifactObject_GetTypes,
} from "./cloudbuild_getTriggerBuildArtifactObject";

export interface cloudbuild_getTriggerBuildArtifact {
  /*
Npm package to upload to Artifact Registry upon successful completion of all build steps.

The location and generation of the uploaded objects will be stored in the Build resource's results field.

If any objects fail to be pushed, the build is marked FAILURE.
*/
  npmPackages?: Array<cloudbuild_getTriggerBuildArtifactNpmPackage>;

  /*
A list of objects to be uploaded to Cloud Storage upon successful completion of all build steps.

Files in the workspace matching specified paths globs will be uploaded to the
Cloud Storage location using the builder service account's credentials.

The location and generation of the uploaded objects will be stored in the Build resource's results field.

If any objects fail to be pushed, the build is marked FAILURE.
*/
  objects?: Array<cloudbuild_getTriggerBuildArtifactObject>;

  /*
Python package to upload to Artifact Registry upon successful completion of all build steps. A package can encapsulate multiple objects to be uploaded to a single repository.

The location and generation of the uploaded objects will be stored in the Build resource's results field.

If any objects fail to be pushed, the build is marked FAILURE.
*/
  pythonPackages?: Array<cloudbuild_getTriggerBuildArtifactPythonPackage>;

  /*
A list of images to be pushed upon the successful completion of all build steps.

The images will be pushed using the builder service account's credentials.

The digests of the pushed images will be stored in the Build resource's results field.

If any of the images fail to be pushed, the build is marked FAILURE.
*/
  images?: Array<string>;

  /*
A Maven artifact to upload to Artifact Registry upon successful completion of all build steps.

The location and generation of the uploaded objects will be stored in the Build resource's results field.

If any objects fail to be pushed, the build is marked FAILURE.
*/
  mavenArtifacts?: Array<cloudbuild_getTriggerBuildArtifactMavenArtifact>;
}

export function cloudbuild_getTriggerBuildArtifact_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "npmPackages",
      "Npm package to upload to Artifact Registry upon successful completion of all build steps.\n\nThe location and generation of the uploaded objects will be stored in the Build resource's results field.\n\nIf any objects fail to be pushed, the build is marked FAILURE.",
      cloudbuild_getTriggerBuildArtifactNpmPackage_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "objects",
      "A list of objects to be uploaded to Cloud Storage upon successful completion of all build steps.\n\nFiles in the workspace matching specified paths globs will be uploaded to the\nCloud Storage location using the builder service account's credentials.\n\nThe location and generation of the uploaded objects will be stored in the Build resource's results field.\n\nIf any objects fail to be pushed, the build is marked FAILURE.",
      cloudbuild_getTriggerBuildArtifactObject_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "pythonPackages",
      "Python package to upload to Artifact Registry upon successful completion of all build steps. A package can encapsulate multiple objects to be uploaded to a single repository.\n\nThe location and generation of the uploaded objects will be stored in the Build resource's results field.\n\nIf any objects fail to be pushed, the build is marked FAILURE.",
      cloudbuild_getTriggerBuildArtifactPythonPackage_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "images",
      "A list of images to be pushed upon the successful completion of all build steps.\n\nThe images will be pushed using the builder service account's credentials.\n\nThe digests of the pushed images will be stored in the Build resource's results field.\n\nIf any of the images fail to be pushed, the build is marked FAILURE.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "mavenArtifacts",
      "A Maven artifact to upload to Artifact Registry upon successful completion of all build steps.\n\nThe location and generation of the uploaded objects will be stored in the Build resource's results field.\n\nIf any objects fail to be pushed, the build is marked FAILURE.",
      cloudbuild_getTriggerBuildArtifactMavenArtifact_GetTypes(),
      true,
      false,
    ),
  ];
}
