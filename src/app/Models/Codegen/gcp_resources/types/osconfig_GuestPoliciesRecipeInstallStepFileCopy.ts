import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface osconfig_GuestPoliciesRecipeInstallStepFileCopy {
  // The id of the relevant artifact in the recipe.
  artifactId?: string;

  // The absolute path on the instance to put the file.
  destination?: string;

  /*
Whether to allow this step to overwrite existing files.If this is false and the file already exists the file
is not overwritten and the step is considered a success. Defaults to false.
*/
  overwrite?: boolean;

  /*
Consists of three octal digits which represent, in order, the permissions of the owner, group, and other users
for the file (similarly to the numeric mode used in the linux chmod utility). Each digit represents a three bit
number with the 4 bit corresponding to the read permissions, the 2 bit corresponds to the write bit, and the one
bit corresponds to the execute permission. Default behavior is 755.
Below are some examples of permissions and their associated values:
read, write, and execute: 7 read and execute: 5 read and write: 6 read only: 4
*/
  permissions?: string;
}

export function osconfig_GuestPoliciesRecipeInstallStepFileCopy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "destination",
      "The absolute path on the instance to put the file.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "overwrite",
      "Whether to allow this step to overwrite existing files.If this is false and the file already exists the file\nis not overwritten and the step is considered a success. Defaults to false.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "permissions",
      "Consists of three octal digits which represent, in order, the permissions of the owner, group, and other users\nfor the file (similarly to the numeric mode used in the linux chmod utility). Each digit represents a three bit\nnumber with the 4 bit corresponding to the read permissions, the 2 bit corresponds to the write bit, and the one\nbit corresponds to the execute permission. Default behavior is 755.\nBelow are some examples of permissions and their associated values:\nread, write, and execute: 7 read and execute: 5 read and write: 6 read only: 4",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "artifactId",
      "The id of the relevant artifact in the recipe.",
      [],
      true,
      false,
    ),
  ];
}
