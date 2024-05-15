import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dataproc_WorkflowTemplateJobSparkRJobLoggingConfig,
  Dataproc_WorkflowTemplateJobSparkRJobLoggingConfig_GetTypes,
} from "./Dataproc_WorkflowTemplateJobSparkRJobLoggingConfig";

export interface Dataproc_WorkflowTemplateJobSparkRJob {
  // A mapping of property names to values, used to configure SparkR. Properties that conflict with values set by the Dataproc API may be overwritten. Can include properties set in /etc/spark/conf/spark-defaults.conf and classes in user code.
  Properties?: Map<string, string>;

  // HCFS URIs of archives to be extracted into the working directory of each executor. Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip.
  ArchiveUris?: Array<string>;

  // The arguments to pass to the driver. Do not include arguments, such as `--conf`, that can be set as job properties, since a collision may occur that causes an incorrect job submission.
  Args?: Array<string>;

  // HCFS URIs of files to be placed in the working directory of each executor. Useful for naively parallel tasks.
  FileUris?: Array<string>;

  // The runtime log config for job execution.
  LoggingConfig?: Dataproc_WorkflowTemplateJobSparkRJobLoggingConfig;

  // Required. The HCFS URI of the main R file to use as the driver. Must be a .R file.
  MainRFileUri?: string;
}

export function Dataproc_WorkflowTemplateJobSparkRJob_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Map,
      "Properties",
      "A mapping of property names to values, used to configure SparkR. Properties that conflict with values set by the Dataproc API may be overwritten. Can include properties set in /etc/spark/conf/spark-defaults.conf and classes in user code.",
      InputType_Map_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ArchiveUris",
      "HCFS URIs of archives to be extracted into the working directory of each executor. Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip.",
      InputType_String_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Args",
      "The arguments to pass to the driver. Do not include arguments, such as `--conf`, that can be set as job properties, since a collision may occur that causes an incorrect job submission.",
      InputType_String_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "FileUris",
      "HCFS URIs of files to be placed in the working directory of each executor. Useful for naively parallel tasks.",
      InputType_String_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "LoggingConfig",
      "The runtime log config for job execution.",
      Dataproc_WorkflowTemplateJobSparkRJobLoggingConfig_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "MainRFileUri",
      "Required. The HCFS URI of the main R file to use as the driver. Must be a .R file.",
      [],
      true,
      true,
    ),
  ];
}
