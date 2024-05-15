import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceExecValidateFile,
  Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceExecValidateFile_GetTypes,
} from "./Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceExecValidateFile";

export interface Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceExecValidate {
  /*
Only recorded for enforce Exec. Path to an
output file (that is created by this Exec) whose content will be recorded in
OSPolicyResourceCompliance after a successful run. Absence or failure to
read this file will result in this ExecResource being non-compliant. Output
file size is limited to 100K bytes.
*/
  OutputFilePath?: string;

  /*
An inline script. The size of the script is limited to
1024 characters.
*/
  Script?: string;

  /*
Optional arguments to pass to the source during
execution.
*/
  Args?: Array<string>;

  /*
A remote or local file. Structure is
documented below.
*/
  File?: Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceExecValidateFile;

  /*
The script interpreter to use. Possible values
are: `INTERPRETER_UNSPECIFIED`, `NONE`, `SHELL`, `POWERSHELL`.
*/
  Interpreter?: string;
}

export function Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceExecValidate_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "OutputFilePath",
      "Only recorded for enforce Exec. Path to an\noutput file (that is created by this Exec) whose content will be recorded in\nOSPolicyResourceCompliance after a successful run. Absence or failure to\nread this file will result in this ExecResource being non-compliant. Output\nfile size is limited to 100K bytes.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Script",
      "An inline script. The size of the script is limited to\n1024 characters.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Args",
      "Optional arguments to pass to the source during\nexecution.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "File",
      "A remote or local file. Structure is\ndocumented below.",
      Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceExecValidateFile_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Interpreter",
      "The script interpreter to use. Possible values\nare: `INTERPRETER_UNSPECIFIED`, `NONE`, `SHELL`, `POWERSHELL`.",
      [],
      true,
      false,
    ),
  ];
}
