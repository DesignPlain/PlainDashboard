import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceExecValidateFile,
  osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceExecValidateFile_GetTypes,
} from "./osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceExecValidateFile";

export interface osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceExecValidate {
  /*
Optional arguments to pass to the source during
execution.
*/
  args?: Array<string>;

  /*
A remote or local file. Structure is
documented below.
*/
  file?: osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceExecValidateFile;

  /*
The script interpreter to use. Possible values
are: `INTERPRETER_UNSPECIFIED`, `NONE`, `SHELL`, `POWERSHELL`.
*/
  interpreter?: string;

  /*
Only recorded for enforce Exec. Path to an
output file (that is created by this Exec) whose content will be recorded in
OSPolicyResourceCompliance after a successful run. Absence or failure to
read this file will result in this ExecResource being non-compliant. Output
file size is limited to 100K bytes.
*/
  outputFilePath?: string;

  /*
An inline script. The size of the script is limited to
1024 characters.
*/
  script?: string;
}

export function osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceExecValidate_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "args",
      "Optional arguments to pass to the source during\nexecution.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "file",
      "A remote or local file. Structure is\ndocumented below.",
      osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceExecValidateFile_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "interpreter",
      "The script interpreter to use. Possible values\nare: `INTERPRETER_UNSPECIFIED`, `NONE`, `SHELL`, `POWERSHELL`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "outputFilePath",
      "Only recorded for enforce Exec. Path to an\noutput file (that is created by this Exec) whose content will be recorded in\nOSPolicyResourceCompliance after a successful run. Absence or failure to\nread this file will result in this ExecResource being non-compliant. Output\nfile size is limited to 100K bytes.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "script",
      "An inline script. The size of the script is limited to\n1024 characters.",
      [],
      false,
      false,
    ),
  ];
}
