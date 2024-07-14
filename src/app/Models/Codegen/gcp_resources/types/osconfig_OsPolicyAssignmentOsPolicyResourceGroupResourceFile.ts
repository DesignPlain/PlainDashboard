import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceFileFile,
  osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceFileFile_GetTypes,
} from "./osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceFileFile";

export interface osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceFile {
  // The absolute path of the file within the VM.
  path?: string;

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
  permissions?: string;

  /*
Desired state of the file. Possible values are:
`DESIRED_STATE_UNSPECIFIED`, `PRESENT`, `ABSENT`, `CONTENTS_MATCH`.
*/
  state?: string;

  /*
A a file with this content. The size of the content
is limited to 1024 characters.
*/
  content?: string;

  /*
A remote or local source. Structure is
documented below.
*/
  file?: osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceFileFile;
}

export function osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceFile_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "path",
      "The absolute path of the file within the VM.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "permissions",
      "Consists of three octal digits which represent, in\norder, the permissions of the owner, group, and other users for the file\n(similarly to the numeric mode used in the linux chmod utility). Each digit\nrepresents a three bit number with the 4 bit corresponding to the read\npermissions, the 2 bit corresponds to the write bit, and the one bit\ncorresponds to the execute permission. Default behavior is 755. Below are\nsome examples of permissions and their associated values: read, write, and\nexecute: 7 read and execute: 5 read and write: 6 read only: 4",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "state",
      "Desired state of the file. Possible values are:\n`DESIRED_STATE_UNSPECIFIED`, `PRESENT`, `ABSENT`, `CONTENTS_MATCH`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "content",
      "A a file with this content. The size of the content\nis limited to 1024 characters.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "file",
      "A remote or local source. Structure is\ndocumented below.",
      osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceFileFile_GetTypes(),
      false,
      false,
    ),
  ];
}
