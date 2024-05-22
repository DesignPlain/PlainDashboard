import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  cloudrun_getServiceTemplateSpecVolumeCsi,
  cloudrun_getServiceTemplateSpecVolumeCsi_GetTypes,
} from "./cloudrun_getServiceTemplateSpecVolumeCsi";
import {
  cloudrun_getServiceTemplateSpecVolumeEmptyDir,
  cloudrun_getServiceTemplateSpecVolumeEmptyDir_GetTypes,
} from "./cloudrun_getServiceTemplateSpecVolumeEmptyDir";
import {
  cloudrun_getServiceTemplateSpecVolumeSecret,
  cloudrun_getServiceTemplateSpecVolumeSecret_GetTypes,
} from "./cloudrun_getServiceTemplateSpecVolumeSecret";

export interface cloudrun_getServiceTemplateSpecVolume {
  // A filesystem specified by the Container Storage Interface (CSI).
  csis?: Array<cloudrun_getServiceTemplateSpecVolumeCsi>;

  // Ephemeral storage which can be backed by real disks (HD, SSD), network storage or memory (i.e. tmpfs). For now only in memory (tmpfs) is supported. It is ephemeral in the sense that when the sandbox is taken down, the data is destroyed with it (it does not persist across sandbox runs).
  emptyDirs?: Array<cloudrun_getServiceTemplateSpecVolumeEmptyDir>;

  // The name of the Cloud Run Service.
  name?: string;

  /*
The secret's value will be presented as the content of a file whose
name is defined in the item path. If no items are defined, the name of
the file is the secret_name.
*/
  secrets?: Array<cloudrun_getServiceTemplateSpecVolumeSecret>;
}

export function cloudrun_getServiceTemplateSpecVolume_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "csis",
      "A filesystem specified by the Container Storage Interface (CSI).",
      cloudrun_getServiceTemplateSpecVolumeCsi_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "emptyDirs",
      "Ephemeral storage which can be backed by real disks (HD, SSD), network storage or memory (i.e. tmpfs). For now only in memory (tmpfs) is supported. It is ephemeral in the sense that when the sandbox is taken down, the data is destroyed with it (it does not persist across sandbox runs).",
      cloudrun_getServiceTemplateSpecVolumeEmptyDir_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "The name of the Cloud Run Service.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "secrets",
      "The secret's value will be presented as the content of a file whose\nname is defined in the item path. If no items are defined, the name of\nthe file is the secret_name.",
      cloudrun_getServiceTemplateSpecVolumeSecret_GetTypes(),
      true,
      false,
    ),
  ];
}
