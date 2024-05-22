import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface notebooks_RuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams {
  /*
Specifies the disk name. If not specified, the default is
to use the name of the instance. If the disk with the
instance name exists already in the given zone/region, a
new name will be automatically generated.
*/
  diskName?: string;

  /*
Specifies the size of the disk in base-2 GB. If not
specified, the disk will be the same size as the image
(usually 10GB). If specified, the size must be equal to
or larger than 10GB. Default 100 GB.
*/
  diskSizeGb?: number;

  /*
The type of the boot disk attached to this runtime,
defaults to standard persistent disk. For valid values,
see `https://cloud.google.com/vertex-ai/docs/workbench/
reference/rest/v1/projects.locations.runtimes#disktype`
*/
  diskType?: string;

  /*
Labels to apply to this disk. These can be later modified
by the disks.setLabels method. This field is only
applicable for persistent disks.
*/
  labels?: Map<string, string>;

  // Provide this property when creating the disk.
  description?: string;
}

export function notebooks_RuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "diskName",
      "Specifies the disk name. If not specified, the default is\nto use the name of the instance. If the disk with the\ninstance name exists already in the given zone/region, a\nnew name will be automatically generated.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "diskSizeGb",
      "Specifies the size of the disk in base-2 GB. If not\nspecified, the disk will be the same size as the image\n(usually 10GB). If specified, the size must be equal to\nor larger than 10GB. Default 100 GB.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "diskType",
      "The type of the boot disk attached to this runtime,\ndefaults to standard persistent disk. For valid values,\nsee `https://cloud.google.com/vertex-ai/docs/workbench/\nreference/rest/v1/projects.locations.runtimes#disktype`",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "labels",
      "Labels to apply to this disk. These can be later modified\nby the disks.setLabels method. This field is only\napplicable for persistent disks.",
      InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "description",
      "Provide this property when creating the disk.",
      [],
      false,
      false,
    ),
  ];
}
