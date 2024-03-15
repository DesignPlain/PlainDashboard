import { getTriggerBuildArtifactObject } from "./getTriggerBuildArtifactObject";
import { getTriggerBuildArtifactPythonPackage } from "./getTriggerBuildArtifactPythonPackage";
import { getTriggerBuildArtifactMavenArtifact } from "./getTriggerBuildArtifactMavenArtifact";
import { getTriggerBuildArtifactNpmPackage } from "./getTriggerBuildArtifactNpmPackage";

export interface getTriggerBuildArtifact {
  /*
A list of images to be pushed upon the successful completion of all build steps.

The images will be pushed using the builder service account's credentials.

The digests of the pushed images will be stored in the Build resource's results field.

If any of the images fail to be pushed, the build is marked FAILURE.
*/
  Images?: Array<string>;

  /*
A Maven artifact to upload to Artifact Registry upon successful completion of all build steps.

The location and generation of the uploaded objects will be stored in the Build resource's results field.

If any objects fail to be pushed, the build is marked FAILURE.
*/
  MavenArtifacts?: Array<getTriggerBuildArtifactMavenArtifact>;

  /*
Npm package to upload to Artifact Registry upon successful completion of all build steps.

The location and generation of the uploaded objects will be stored in the Build resource's results field.

If any objects fail to be pushed, the build is marked FAILURE.
*/
  NpmPackages?: Array<getTriggerBuildArtifactNpmPackage>;

  /*
A list of objects to be uploaded to Cloud Storage upon successful completion of all build steps.

Files in the workspace matching specified paths globs will be uploaded to the
Cloud Storage location using the builder service account's credentials.

The location and generation of the uploaded objects will be stored in the Build resource's results field.

If any objects fail to be pushed, the build is marked FAILURE.
*/
  Objects?: Array<getTriggerBuildArtifactObject>;

  /*
Python package to upload to Artifact Registry upon successful completion of all build steps. A package can encapsulate multiple objects to be uploaded to a single repository.

The location and generation of the uploaded objects will be stored in the Build resource's results field.

If any objects fail to be pushed, the build is marked FAILURE.
*/
  PythonPackages?: Array<getTriggerBuildArtifactPythonPackage>;
}
