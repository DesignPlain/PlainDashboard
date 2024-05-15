import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Cloudrun_ServiceTemplateSpecVolumeEmptyDir,
  Cloudrun_ServiceTemplateSpecVolumeEmptyDir_GetTypes,
} from "./Cloudrun_ServiceTemplateSpecVolumeEmptyDir";
import {
  Cloudrun_ServiceTemplateSpecVolumeSecret,
  Cloudrun_ServiceTemplateSpecVolumeSecret_GetTypes,
} from "./Cloudrun_ServiceTemplateSpecVolumeSecret";
import {
  Cloudrun_ServiceTemplateSpecVolumeCsi,
  Cloudrun_ServiceTemplateSpecVolumeCsi_GetTypes,
} from "./Cloudrun_ServiceTemplateSpecVolumeCsi";

export interface Cloudrun_ServiceTemplateSpecVolume {
  /*
A filesystem specified by the Container Storage Interface (CSI).
Structure is documented below.
*/
  Csi?: Cloudrun_ServiceTemplateSpecVolumeCsi;

  /*
Ephemeral storage which can be backed by real disks (HD, SSD), network storage or memory (i.e. tmpfs). For now only in memory (tmpfs) is supported. It is ephemeral in the sense that when the sandbox is taken down, the data is destroyed with it (it does not persist across sandbox runs).
Structure is documented below.
*/
  EmptyDir?: Cloudrun_ServiceTemplateSpecVolumeEmptyDir;

  // Volume's name.
  Name?: string;

  /*
The secret's value will be presented as the content of a file whose
name is defined in the item path. If no items are defined, the name of
the file is the secret_name.
Structure is documented below.
*/
  Secret?: Cloudrun_ServiceTemplateSpecVolumeSecret;
}

export function Cloudrun_ServiceTemplateSpecVolume_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "EmptyDir",
      "Ephemeral storage which can be backed by real disks (HD, SSD), network storage or memory (i.e. tmpfs). For now only in memory (tmpfs) is supported. It is ephemeral in the sense that when the sandbox is taken down, the data is destroyed with it (it does not persist across sandbox runs).\nStructure is documented below.",
      Cloudrun_ServiceTemplateSpecVolumeEmptyDir_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Name",
      "Volume's name.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Secret",
      "The secret's value will be presented as the content of a file whose\nname is defined in the item path. If no items are defined, the name of\nthe file is the secret_name.\nStructure is documented below.",
      Cloudrun_ServiceTemplateSpecVolumeSecret_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Csi",
      "A filesystem specified by the Container Storage Interface (CSI).\nStructure is documented below.",
      Cloudrun_ServiceTemplateSpecVolumeCsi_GetTypes(),
      false,
      false,
    ),
  ];
}
