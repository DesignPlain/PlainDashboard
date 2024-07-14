import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  dataproc_WorkflowTemplateJobPysparkJobLoggingConfig,
  dataproc_WorkflowTemplateJobPysparkJobLoggingConfig_GetTypes,
} from "./dataproc_WorkflowTemplateJobPysparkJobLoggingConfig";

export interface dataproc_WorkflowTemplateJobPysparkJob {
  // A mapping of property names to values, used to configure PySpark. Properties that conflict with values set by the Dataproc API may be overwritten. Can include properties set in /etc/spark/conf/spark-defaults.conf and classes in user code.
  properties?: Map<string, string>;

  // HCFS file URIs of Python files to pass to the PySpark framework. Supported file types: .py, .egg, and .zip.
  pythonFileUris?: Array<string>;

  // HCFS URIs of archives to be extracted into the working directory of each executor. Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip.
  archiveUris?: Array<string>;

  // The arguments to pass to the driver. Do not include arguments, such as `--conf`, that can be set as job properties, since a collision may occur that causes an incorrect job submission.
  args?: Array<string>;

  // HCFS URIs of files to be placed in the working directory of each executor. Useful for naively parallel tasks.
  fileUris?: Array<string>;

  // HCFS URIs of jar files to add to the CLASSPATHs of the Python driver and tasks.
  jarFileUris?: Array<string>;

  // The runtime log config for job execution.
  loggingConfig?: dataproc_WorkflowTemplateJobPysparkJobLoggingConfig;

  // Required. The HCFS URI of the main Python file to use as the driver. Must be a .py file.
  mainPythonFileUri?: string;
}

export function dataproc_WorkflowTemplateJobPysparkJob_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "fileUris",
      "HCFS URIs of files to be placed in the working directory of each executor. Useful for naively parallel tasks.",
      InputType_String_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "jarFileUris",
      "HCFS URIs of jar files to add to the CLASSPATHs of the Python driver and tasks.",
      InputType_String_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "loggingConfig",
      "The runtime log config for job execution.",
      dataproc_WorkflowTemplateJobPysparkJobLoggingConfig_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "mainPythonFileUri",
      "Required. The HCFS URI of the main Python file to use as the driver. Must be a .py file.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Map,
      "properties",
      "A mapping of property names to values, used to configure PySpark. Properties that conflict with values set by the Dataproc API may be overwritten. Can include properties set in /etc/spark/conf/spark-defaults.conf and classes in user code.",
      InputType_Map_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "pythonFileUris",
      "HCFS file URIs of Python files to pass to the PySpark framework. Supported file types: .py, .egg, and .zip.",
      InputType_String_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "archiveUris",
      "HCFS URIs of archives to be extracted into the working directory of each executor. Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip.",
      InputType_String_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "args",
      "The arguments to pass to the driver. Do not include arguments, such as `--conf`, that can be set as job properties, since a collision may occur that causes an incorrect job submission.",
      InputType_String_GetTypes(),
      false,
      true,
    ),
  ];
}
