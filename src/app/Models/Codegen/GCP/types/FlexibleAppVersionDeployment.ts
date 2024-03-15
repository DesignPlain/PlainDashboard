import { FlexibleAppVersionDeploymentCloudBuildOptions } from "./FlexibleAppVersionDeploymentCloudBuildOptions";
import { FlexibleAppVersionDeploymentContainer } from "./FlexibleAppVersionDeploymentContainer";
import { FlexibleAppVersionDeploymentFile } from "./FlexibleAppVersionDeploymentFile";
import { FlexibleAppVersionDeploymentZip } from "./FlexibleAppVersionDeploymentZip";

export interface FlexibleAppVersionDeployment {
  /*
Options for the build operations performed as a part of the version deployment. Only applicable when creating a version using source code directly.
Structure is documented below.
*/
  CloudBuildOptions?: FlexibleAppVersionDeploymentCloudBuildOptions;

  /*
The Docker image for the container that runs the version.
Structure is documented below.
*/
  Container?: FlexibleAppVersionDeploymentContainer;

  /*
Manifest of the files stored in Google Cloud Storage that are included as part of this version.
All files must be readable using the credentials supplied with this call.
Structure is documented below.
*/
  Files?: Array<FlexibleAppVersionDeploymentFile>;

  /*
Zip File
Structure is documented below.
*/
  Zip?: FlexibleAppVersionDeploymentZip;
}
