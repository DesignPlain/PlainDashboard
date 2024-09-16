import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface emr_ClusterStepHadoopJarStep {
  // List of command line arguments passed to the JAR file's main function when executed.
  args?: Array<string>;

  // Path to a JAR file run during the step.
  jar?: string;

  // Name of the main class in the specified Java file. If not specified, the JAR file should specify a Main-Class in its manifest file.
  mainClass?: string;

  // Key-Value map of Java properties that are set when the step runs. You can use these properties to pass key value pairs to your main function.
  properties?: Map<string, string>;
}

export function emr_ClusterStepHadoopJarStep_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'mainClass',
      'Name of the main class in the specified Java file. If not specified, the JAR file should specify a Main-Class in its manifest file.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Map,
      'properties',
      'Key-Value map of Java properties that are set when the step runs. You can use these properties to pass key value pairs to your main function.',
      () => InputType_Map_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      'args',
      "List of command line arguments passed to the JAR file's main function when executed.",
      () => InputType_String_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'jar',
      'Path to a JAR file run during the step.',
      () => [],
      true,
      true,
    ),
  ];
}
