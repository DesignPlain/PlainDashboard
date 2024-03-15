import { StandardAppVersionDeploymentFile } from "./StandardAppVersionDeploymentFile";
import { StandardAppVersionDeploymentZip } from "./StandardAppVersionDeploymentZip";

export interface StandardAppVersionDeployment {
  /*
Manifest of the files stored in Google Cloud Storage that are included as part of this version.
All files must be readable using the credentials supplied with this call.
Structure is documented below.
*/
  Files?: Array<StandardAppVersionDeploymentFile>;

  /*
Zip File
Structure is documented below.
*/
  Zip?: StandardAppVersionDeploymentZip;
}
