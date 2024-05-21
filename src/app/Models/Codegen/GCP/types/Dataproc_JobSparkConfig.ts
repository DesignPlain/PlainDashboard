import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  dataproc_JobSparkConfigLoggingConfig,
  dataproc_JobSparkConfigLoggingConfig_GetTypes,
} from "./dataproc_JobSparkConfigLoggingConfig";

export interface dataproc_JobSparkConfig {
  /*
The class containing the main method of the driver. Must be in a
provided jar or jar that is already on the classpath. Conflicts with `main_jar_file_uri`
*/
  mainClass?: string;

  /*
The HCFS URI of jar file containing
the driver jar. Conflicts with `main_class`
*/
  mainJarFileUri?: string;

  /*
A mapping of property names to values, used to configure Spark. Properties that conflict with values set by the Cloud Dataproc API may be overwritten. Can include properties set in `/etc/spark/conf/spark-defaults.conf` and classes in user code.

- `logging_config.driver_log_levels`- (Required) The per-package log levels for the driver. This may include 'root' package name to configure rootLogger. Examples: 'com.google = FATAL', 'root = INFO', 'org.apache = DEBUG'
*/
  properties?: Map<string, string>;

  // HCFS URIs of archives to be extracted in the working directory of .jar, .tar, .tar.gz, .tgz, and .zip.
  archiveUris?: Array<string>;

  // The arguments to pass to the driver.
  args?: Array<string>;

  // HCFS URIs of files to be copied to the working directory of Spark drivers and distributed tasks. Useful for naively parallel tasks.
  fileUris?: Array<string>;

  // HCFS URIs of jar files to add to the CLASSPATHs of the Spark driver and tasks.
  jarFileUris?: Array<string>;

  // The runtime logging config of the job
  loggingConfig?: dataproc_JobSparkConfigLoggingConfig;
}

export function dataproc_JobSparkConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Map,
      "properties",
      "A mapping of property names to values, used to configure Spark. Properties that conflict with values set by the Cloud Dataproc API may be overwritten. Can include properties set in `/etc/spark/conf/spark-defaults.conf` and classes in user code.\n\n* `logging_config.driver_log_levels`- (Required) The per-package log levels for the driver. This may include 'root' package name to configure rootLogger. Examples: 'com.google = FATAL', 'root = INFO', 'org.apache = DEBUG'",
      InputType_Map_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "archiveUris",
      "HCFS URIs of archives to be extracted in the working directory of .jar, .tar, .tar.gz, .tgz, and .zip.",
      InputType_String_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "args",
      "The arguments to pass to the driver.",
      InputType_String_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "fileUris",
      "HCFS URIs of files to be copied to the working directory of Spark drivers and distributed tasks. Useful for naively parallel tasks.",
      InputType_String_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "jarFileUris",
      "HCFS URIs of jar files to add to the CLASSPATHs of the Spark driver and tasks.",
      InputType_String_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "loggingConfig",
      "The runtime logging config of the job",
      dataproc_JobSparkConfigLoggingConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "mainClass",
      "The class containing the main method of the driver. Must be in a\nprovided jar or jar that is already on the classpath. Conflicts with `main_jar_file_uri`",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "mainJarFileUri",
      "The HCFS URI of jar file containing\nthe driver jar. Conflicts with `main_class`",
      [],
      false,
      true,
    ),
  ];
}
