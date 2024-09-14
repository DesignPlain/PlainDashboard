import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  cloudrun_ServiceTemplateSpecVolumeSecret,
  cloudrun_ServiceTemplateSpecVolumeSecret_GetTypes,
} from "./cloudrun_ServiceTemplateSpecVolumeSecret";
import {
  cloudrun_ServiceTemplateSpecVolumeCsi,
  cloudrun_ServiceTemplateSpecVolumeCsi_GetTypes,
} from "./cloudrun_ServiceTemplateSpecVolumeCsi";
import {
  cloudrun_ServiceTemplateSpecVolumeEmptyDir,
  cloudrun_ServiceTemplateSpecVolumeEmptyDir_GetTypes,
} from "./cloudrun_ServiceTemplateSpecVolumeEmptyDir";

export interface cloudrun_ServiceTemplateSpecVolume {
  // Volume's name.
  name?: string;

  /*
The secret's value will be presented as the content of a file whose
name is defined in the item path. If no items are defined, the name of
the file is the secret_name.
Structure is documented below.
*/
  secret?: cloudrun_ServiceTemplateSpecVolumeSecret;

  /*
A filesystem specified by the Container Storage Interface (CSI).
Structure is documented below.
*/
  csi?: cloudrun_ServiceTemplateSpecVolumeCsi;

  /*
Ephemeral storage which can be backed by real disks (HD, SSD), network storage or memory (i.e. tmpfs). For now only in memory (tmpfs) is supported. It is ephemeral in the sense that when the sandbox is taken down, the data is destroyed with it (it does not persist across sandbox runs).
Structure is documented below.
*/
  emptyDir?: cloudrun_ServiceTemplateSpecVolumeEmptyDir;
}

export function cloudrun_ServiceTemplateSpecVolume_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "csi",
      "A filesystem specified by the Container Storage Interface (CSI).\nStructure is documented below.",
      () => cloudrun_ServiceTemplateSpecVolumeCsi_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "emptyDir",
      "Ephemeral storage which can be backed by real disks (HD, SSD), network storage or memory (i.e. tmpfs). For now only in memory (tmpfs) is supported. It is ephemeral in the sense that when the sandbox is taken down, the data is destroyed with it (it does not persist across sandbox runs).\nStructure is documented below.",
      () => cloudrun_ServiceTemplateSpecVolumeEmptyDir_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "Volume's name.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "secret",
      "The secret's value will be presented as the content of a file whose\nname is defined in the item path. If no items are defined, the name of\nthe file is the secret_name.\nStructure is documented below.",
      () => cloudrun_ServiceTemplateSpecVolumeSecret_GetTypes(),
      false,
      false,
    ),
  ];
}
