import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceFileFile,
  Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceFileFile_GetTypes,
} from "./Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceFileFile";

export interface Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceFile {
  /*
A remote or local source. Structure is
documented below.
*/
  File?: Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceFileFile;

  // The absolute path of the file within the VM.
  Path?: string;

  /*
Consists of three octal digits which represent, in
order, the permissions of the owner, group, and other users for the file
(similarly to the numeric mode used in the linux chmod utility). Each digit
represents a three bit number with the 4 bit corresponding to the read
permissions, the 2 bit corresponds to the write bit, and the one bit
corresponds to the execute permission. Default behavior is 755. Below are
some examples of permissions and their associated values: read, write, and
execute: 7 read and execute: 5 read and write: 6 read only: 4
*/
  Permissions?: string;

  /*
Desired state of the file. Possible values are:
`DESIRED_STATE_UNSPECIFIED`, `PRESENT`, `ABSENT`, `CONTENTS_MATCH`.
*/
  State?: string;

  /*
A a file with this content. The size of the content
is limited to 1024 characters.
*/
  Content?: string;
}

export function Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceFile_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "File",
      "A remote or local source. Structure is\ndocumented below.",
      Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceFileFile_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Path",
      "The absolute path of the file within the VM.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Permissions",
      "Consists of three octal digits which represent, in\norder, the permissions of the owner, group, and other users for the file\n(similarly to the numeric mode used in the linux chmod utility). Each digit\nrepresents a three bit number with the 4 bit corresponding to the read\npermissions, the 2 bit corresponds to the write bit, and the one bit\ncorresponds to the execute permission. Default behavior is 755. Below are\nsome examples of permissions and their associated values: read, write, and\nexecute: 7 read and execute: 5 read and write: 6 read only: 4",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "State",
      "Desired state of the file. Possible values are:\n`DESIRED_STATE_UNSPECIFIED`, `PRESENT`, `ABSENT`, `CONTENTS_MATCH`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Content",
      "A a file with this content. The size of the content\nis limited to 1024 characters.",
      [],
      false,
      false,
    ),
  ];
}
