import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface WorkerConfigurationArgs {
  // A summary description of the worker configuration.
  description?: string;

  // The name of the worker configuration.
  name?: string;

  /*
Contents of connect-distributed.properties file. The value can be either base64 encoded or in raw format.

The following arguments are optional:
*/
  propertiesFileContent?: string;
}
export class WorkerConfiguration extends Resource {
  // A summary description of the worker configuration.
  public description?: string;

  // an ID of the latest successfully created revision of the worker configuration.
  public latestRevision?: number;

  // The name of the worker configuration.
  public name?: string;

  /*
Contents of connect-distributed.properties file. The value can be either base64 encoded or in raw format.

The following arguments are optional:
*/
  public propertiesFileContent?: string;

  // the Amazon Resource Name (ARN) of the worker configuration.
  public arn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "description",
        "A summary description of the worker configuration.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the worker configuration.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "propertiesFileContent",
        "Contents of connect-distributed.properties file. The value can be either base64 encoded or in raw format.\n\nThe following arguments are optional:",
        [],
        true,
        true,
      ),
    ];
  }
}
