import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  cloudbuild_TriggerBuildArtifactsMavenArtifact,
  cloudbuild_TriggerBuildArtifactsMavenArtifact_GetTypes,
} from "./cloudbuild_TriggerBuildArtifactsMavenArtifact";
import {
  cloudbuild_TriggerBuildArtifactsNpmPackage,
  cloudbuild_TriggerBuildArtifactsNpmPackage_GetTypes,
} from "./cloudbuild_TriggerBuildArtifactsNpmPackage";
import {
  cloudbuild_TriggerBuildArtifactsObjects,
  cloudbuild_TriggerBuildArtifactsObjects_GetTypes,
} from "./cloudbuild_TriggerBuildArtifactsObjects";
import {
  cloudbuild_TriggerBuildArtifactsPythonPackage,
  cloudbuild_TriggerBuildArtifactsPythonPackage_GetTypes,
} from "./cloudbuild_TriggerBuildArtifactsPythonPackage";

export interface cloudbuild_TriggerBuildArtifacts {
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
Structure is documented below.
*/
  mavenArtifacts?: Array<cloudbuild_TriggerBuildArtifactsMavenArtifact>;

  /*
Npm package to upload to Artifact Registry upon successful completion of all build steps.
The location and generation of the uploaded objects will be stored in the Build resource's results field.
If any objects fail to be pushed, the build is marked FAILURE.
Structure is documented below.
*/
  npmPackages?: Array<cloudbuild_TriggerBuildArtifactsNpmPackage>;

  /*
A list of objects to be uploaded to Cloud Storage upon successful completion of all build steps.
Files in the workspace matching specified paths globs will be uploaded to the
Cloud Storage location using the builder service account's credentials.
The location and generation of the uploaded objects will be stored in the Build resource's results field.
If any objects fail to be pushed, the build is marked FAILURE.
Structure is documented below.
*/
  objects?: cloudbuild_TriggerBuildArtifactsObjects;

  /*
Python package to upload to Artifact Registry upon successful completion of all build steps. A package can encapsulate multiple objects to be uploaded to a single repository.
The location and generation of the uploaded objects will be stored in the Build resource's results field.
If any objects fail to be pushed, the build is marked FAILURE.
Structure is documented below.
*/
  pythonPackages?: Array<cloudbuild_TriggerBuildArtifactsPythonPackage>;
}

export function cloudbuild_TriggerBuildArtifacts_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "pythonPackages",
      "Python package to upload to Artifact Registry upon successful completion of all build steps. A package can encapsulate multiple objects to be uploaded to a single repository.\nThe location and generation of the uploaded objects will be stored in the Build resource's results field.\nIf any objects fail to be pushed, the build is marked FAILURE.\nStructure is documented below.",
      cloudbuild_TriggerBuildArtifactsPythonPackage_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "images",
      "A list of images to be pushed upon the successful completion of all build steps.\nThe images will be pushed using the builder service account's credentials.\nThe digests of the pushed images will be stored in the Build resource's results field.\nIf any of the images fail to be pushed, the build is marked FAILURE.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "mavenArtifacts",
      "A Maven artifact to upload to Artifact Registry upon successful completion of all build steps.\nThe location and generation of the uploaded objects will be stored in the Build resource's results field.\nIf any objects fail to be pushed, the build is marked FAILURE.\nStructure is documented below.",
      cloudbuild_TriggerBuildArtifactsMavenArtifact_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "npmPackages",
      "Npm package to upload to Artifact Registry upon successful completion of all build steps.\nThe location and generation of the uploaded objects will be stored in the Build resource's results field.\nIf any objects fail to be pushed, the build is marked FAILURE.\nStructure is documented below.",
      cloudbuild_TriggerBuildArtifactsNpmPackage_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "objects",
      "A list of objects to be uploaded to Cloud Storage upon successful completion of all build steps.\nFiles in the workspace matching specified paths globs will be uploaded to the\nCloud Storage location using the builder service account's credentials.\nThe location and generation of the uploaded objects will be stored in the Build resource's results field.\nIf any objects fail to be pushed, the build is marked FAILURE.\nStructure is documented below.",
      cloudbuild_TriggerBuildArtifactsObjects_GetTypes(),
      false,
      false,
    ),
  ];
}
