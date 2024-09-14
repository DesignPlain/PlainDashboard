import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface compute_PerInstanceConfigPreservedStateDisk {
  /*
The mode of the disk.
Default value is `READ_WRITE`.
Possible values are: `READ_ONLY`, `READ_WRITE`.
*/
  mode?: string;

  /*
The URI of an existing persistent disk to attach under the specified device-name in the format
`projects/project-id/zones/zone/disks/disk-name`.
*/
  source?: string;

  /*
A value that prescribes what should happen to the stateful disk when the VM instance is deleted.
The available options are `NEVER` and `ON_PERMANENT_INSTANCE_DELETION`.
`NEVER` - detach the disk when the VM is deleted, but do not delete the disk.
`ON_PERMANENT_INSTANCE_DELETION` will delete the stateful disk when the VM is permanently
deleted from the instance group.
Default value is `NEVER`.
Possible values are: `NEVER`, `ON_PERMANENT_INSTANCE_DELETION`.
*/
  deleteRule?: string;

  // A unique device name that is reflected into the /dev/ tree of a Linux operating system running within the instance.
  deviceName?: string;
}

export function compute_PerInstanceConfigPreservedStateDisk_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "mode",
      "The mode of the disk.\nDefault value is `READ_WRITE`.\nPossible values are: `READ_ONLY`, `READ_WRITE`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "source",
      "The URI of an existing persistent disk to attach under the specified device-name in the format\n`projects/project-id/zones/zone/disks/disk-name`.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "deleteRule",
      "A value that prescribes what should happen to the stateful disk when the VM instance is deleted.\nThe available options are `NEVER` and `ON_PERMANENT_INSTANCE_DELETION`.\n`NEVER` - detach the disk when the VM is deleted, but do not delete the disk.\n`ON_PERMANENT_INSTANCE_DELETION` will delete the stateful disk when the VM is permanently\ndeleted from the instance group.\nDefault value is `NEVER`.\nPossible values are: `NEVER`, `ON_PERMANENT_INSTANCE_DELETION`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "deviceName",
      "A unique device name that is reflected into the /dev/ tree of a Linux operating system running within the instance.",
      () => [],
      true,
      false,
    ),
  ];
}
