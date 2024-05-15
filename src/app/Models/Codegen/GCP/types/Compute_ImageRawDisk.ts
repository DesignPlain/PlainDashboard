import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_ImageRawDisk {
  /*
An optional SHA1 checksum of the disk image before unpackaging.
This is provided by the client when the disk image is created.
*/
  Sha1?: string;

  /*
The full Google Cloud Storage URL where disk storage is stored
You must provide either this property or the sourceDisk property
but not both.
*/
  Source?: string;

  /*
The format used to encode and transmit the block device, which
should be TAR. This is just a container and transmission format
and not a runtime format. Provided by the client when the disk
image is created.
Default value is `TAR`.
Possible values are: `TAR`.
*/
  ContainerType?: string;
}

export function Compute_ImageRawDisk_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Sha1",
      "An optional SHA1 checksum of the disk image before unpackaging.\nThis is provided by the client when the disk image is created.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "Source",
      "The full Google Cloud Storage URL where disk storage is stored\nYou must provide either this property or the sourceDisk property\nbut not both.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "ContainerType",
      "The format used to encode and transmit the block device, which\nshould be TAR. This is just a container and transmission format\nand not a runtime format. Provided by the client when the disk\nimage is created.\nDefault value is `TAR`.\nPossible values are: `TAR`.",
      [],
      false,
      true,
    ),
  ];
}
