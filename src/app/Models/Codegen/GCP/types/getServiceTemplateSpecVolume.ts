import { getServiceTemplateSpecVolumeEmptyDir } from "./getServiceTemplateSpecVolumeEmptyDir";
import { getServiceTemplateSpecVolumeSecret } from "./getServiceTemplateSpecVolumeSecret";
import { getServiceTemplateSpecVolumeCsi } from "./getServiceTemplateSpecVolumeCsi";

export interface getServiceTemplateSpecVolume {
  // Ephemeral storage which can be backed by real disks (HD, SSD), network storage or memory (i.e. tmpfs). For now only in memory (tmpfs) is supported. It is ephemeral in the sense that when the sandbox is taken down, the data is destroyed with it (it does not persist across sandbox runs).
  EmptyDirs?: Array<getServiceTemplateSpecVolumeEmptyDir>;

  // The name of the Cloud Run Service.
  Name?: string;

  /*
The secret's value will be presented as the content of a file whose
name is defined in the item path. If no items are defined, the name of
the file is the secret_name.
*/
  Secrets?: Array<getServiceTemplateSpecVolumeSecret>;

  // A filesystem specified by the Container Storage Interface (CSI).
  Csis?: Array<getServiceTemplateSpecVolumeCsi>;
}
