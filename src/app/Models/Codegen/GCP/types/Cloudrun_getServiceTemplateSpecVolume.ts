import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Cloudrun_getServiceTemplateSpecVolumeSecret,
  Cloudrun_getServiceTemplateSpecVolumeSecret_GetTypes,
} from "./Cloudrun_getServiceTemplateSpecVolumeSecret";
import {
  Cloudrun_getServiceTemplateSpecVolumeCsi,
  Cloudrun_getServiceTemplateSpecVolumeCsi_GetTypes,
} from "./Cloudrun_getServiceTemplateSpecVolumeCsi";
import {
  Cloudrun_getServiceTemplateSpecVolumeEmptyDir,
  Cloudrun_getServiceTemplateSpecVolumeEmptyDir_GetTypes,
} from "./Cloudrun_getServiceTemplateSpecVolumeEmptyDir";

export interface Cloudrun_getServiceTemplateSpecVolume {
  // The name of the Cloud Run Service.
  Name?: string;

  /*
The secret's value will be presented as the content of a file whose
name is defined in the item path. If no items are defined, the name of
the file is the secret_name.
*/
  Secrets?: Array<Cloudrun_getServiceTemplateSpecVolumeSecret>;

  // A filesystem specified by the Container Storage Interface (CSI).
  Csis?: Array<Cloudrun_getServiceTemplateSpecVolumeCsi>;

  // Ephemeral storage which can be backed by real disks (HD, SSD), network storage or memory (i.e. tmpfs). For now only in memory (tmpfs) is supported. It is ephemeral in the sense that when the sandbox is taken down, the data is destroyed with it (it does not persist across sandbox runs).
  EmptyDirs?: Array<Cloudrun_getServiceTemplateSpecVolumeEmptyDir>;
}

export function Cloudrun_getServiceTemplateSpecVolume_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "EmptyDirs",
      "Ephemeral storage which can be backed by real disks (HD, SSD), network storage or memory (i.e. tmpfs). For now only in memory (tmpfs) is supported. It is ephemeral in the sense that when the sandbox is taken down, the data is destroyed with it (it does not persist across sandbox runs).",
      Cloudrun_getServiceTemplateSpecVolumeEmptyDir_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Name",
      "The name of the Cloud Run Service.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Secrets",
      "The secret's value will be presented as the content of a file whose\nname is defined in the item path. If no items are defined, the name of\nthe file is the secret_name.",
      Cloudrun_getServiceTemplateSpecVolumeSecret_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Csis",
      "A filesystem specified by the Container Storage Interface (CSI).",
      Cloudrun_getServiceTemplateSpecVolumeCsi_GetTypes(),
      true,
      false,
    ),
  ];
}
