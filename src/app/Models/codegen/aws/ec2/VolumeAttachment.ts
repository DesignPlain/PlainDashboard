import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface VolumeAttachmentArgs {
  /*
Set to `true` if you want to force the
volume to detach. Useful if previous attempts failed, but use this option only
as a last resort, as this can result in --data loss--. See
[Detaching an Amazon EBS Volume from an Instance](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-detaching-volume.html) for more information.
*/
  forceDetach?: boolean;

  // ID of the Instance to attach to
  instanceId?: string;

  /*
Set this to true if you do not wish
to detach the volume from the instance to which it is attached at destroy
time, and instead just remove the attachment from this provider state. This is
useful when destroying an instance which has volumes created by some other
means attached.
*/
  skipDestroy?: boolean;

  /*
Set this to true to ensure that the target instance is stopped
before trying to detach the volume. Stops the instance, if it is not already stopped.
*/
  stopInstanceBeforeDetaching?: boolean;

  // ID of the Volume to be attached
  volumeId?: string;

  /*
The device name to expose to the instance (for
example, `/dev/sdh` or `xvdh`).  See [Device Naming on Linux Instances](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/device_naming.html#available-ec2-device-names) and [Device Naming on Windows Instances](https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/device_naming.html#available-ec2-device-names) for more information.
*/
  deviceName?: string;
}
export class VolumeAttachment extends DS_Resource {
  /*
Set this to true to ensure that the target instance is stopped
before trying to detach the volume. Stops the instance, if it is not already stopped.
*/
  public stopInstanceBeforeDetaching?: boolean;

  // ID of the Volume to be attached
  public volumeId?: string;

  /*
The device name to expose to the instance (for
example, `/dev/sdh` or `xvdh`).  See [Device Naming on Linux Instances](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/device_naming.html#available-ec2-device-names) and [Device Naming on Windows Instances](https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/device_naming.html#available-ec2-device-names) for more information.
*/
  public deviceName?: string;

  /*
Set to `true` if you want to force the
volume to detach. Useful if previous attempts failed, but use this option only
as a last resort, as this can result in --data loss--. See
[Detaching an Amazon EBS Volume from an Instance](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-detaching-volume.html) for more information.
*/
  public forceDetach?: boolean;

  // ID of the Instance to attach to
  public instanceId?: string;

  /*
Set this to true if you do not wish
to detach the volume from the instance to which it is attached at destroy
time, and instead just remove the attachment from this provider state. This is
useful when destroying an instance which has volumes created by some other
means attached.
*/
  public skipDestroy?: boolean;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "deviceName",
        "The device name to expose to the instance (for\nexample, `/dev/sdh` or `xvdh`).  See [Device Naming on Linux Instances](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/device_naming.html#available-ec2-device-names) and [Device Naming on Windows Instances](https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/device_naming.html#available-ec2-device-names) for more information.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "forceDetach",
        "Set to `true` if you want to force the\nvolume to detach. Useful if previous attempts failed, but use this option only\nas a last resort, as this can result in **data loss**. See\n[Detaching an Amazon EBS Volume from an Instance](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-detaching-volume.html) for more information.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "instanceId",
        "ID of the Instance to attach to",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "skipDestroy",
        "Set this to true if you do not wish\nto detach the volume from the instance to which it is attached at destroy\ntime, and instead just remove the attachment from this provider state. This is\nuseful when destroying an instance which has volumes created by some other\nmeans attached.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "stopInstanceBeforeDetaching",
        "Set this to true to ensure that the target instance is stopped\nbefore trying to detach the volume. Stops the instance, if it is not already stopped.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "volumeId",
        "ID of the Volume to be attached",
        () => [],
        true,
        true,
      ),
    ];
  }
}
