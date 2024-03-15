import { VolumeExportPolicyRule } from "./VolumeExportPolicyRule";

export interface VolumeExportPolicy {
  /*
Export rules (up to 5) control NFS volume access.
Structure is documented below.
*/
  Rules?: Array<VolumeExportPolicyRule>;
}
