import { ServiceTemplateSpecVolumeEmptyDir } from "./ServiceTemplateSpecVolumeEmptyDir";
import { ServiceTemplateSpecVolumeSecret } from "./ServiceTemplateSpecVolumeSecret";
import { ServiceTemplateSpecVolumeCsi } from "./ServiceTemplateSpecVolumeCsi";

export interface ServiceTemplateSpecVolume {
  /*
Ephemeral storage which can be backed by real disks (HD, SSD), network storage or memory (i.e. tmpfs). For now only in memory (tmpfs) is supported. It is ephemeral in the sense that when the sandbox is taken down, the data is destroyed with it (it does not persist across sandbox runs).
Structure is documented below.
*/
  EmptyDir?: ServiceTemplateSpecVolumeEmptyDir;

  // Volume's name.
  Name?: string;

  /*
The secret's value will be presented as the content of a file whose
name is defined in the item path. If no items are defined, the name of
the file is the secret_name.
Structure is documented below.
*/
  Secret?: ServiceTemplateSpecVolumeSecret;

  /*
A filesystem specified by the Container Storage Interface (CSI).
Structure is documented below.
*/
  Csi?: ServiceTemplateSpecVolumeCsi;
}
