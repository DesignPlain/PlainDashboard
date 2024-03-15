import { OsPolicyAssignmentOsPolicyResourceGroupResourceExecEnforceFile } from "./OsPolicyAssignmentOsPolicyResourceGroupResourceExecEnforceFile";

export interface OsPolicyAssignmentOsPolicyResourceGroupResourceExecEnforce {
  /*
The script interpreter to use. Possible values
are: `INTERPRETER_UNSPECIFIED`, `NONE`, `SHELL`, `POWERSHELL`.
*/
  Interpreter?: string;

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
  File?: OsPolicyAssignmentOsPolicyResourceGroupResourceExecEnforceFile;
}
