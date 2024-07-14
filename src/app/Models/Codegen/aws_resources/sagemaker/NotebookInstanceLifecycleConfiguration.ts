import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface NotebookInstanceLifecycleConfigurationArgs {
  // The name of the lifecycle configuration (must be unique). If omitted, this provider will assign a random, unique name.
  name?: string;

  // A shell script (base64-encoded) that runs only once when the SageMaker Notebook Instance is created.
  onCreate?: string;

  // A shell script (base64-encoded) that runs every time the SageMaker Notebook Instance is started including the time it's created.
  onStart?: string;
}
export class NotebookInstanceLifecycleConfiguration extends Resource {
  // The Amazon Resource Name (ARN) assigned by AWS to this lifecycle configuration.
  public arn?: string;

  // The name of the lifecycle configuration (must be unique). If omitted, this provider will assign a random, unique name.
  public name?: string;

  // A shell script (base64-encoded) that runs only once when the SageMaker Notebook Instance is created.
  public onCreate?: string;

  // A shell script (base64-encoded) that runs every time the SageMaker Notebook Instance is started including the time it's created.
  public onStart?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the lifecycle configuration (must be unique). If omitted, this provider will assign a random, unique name.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "onCreate",
        "A shell script (base64-encoded) that runs only once when the SageMaker Notebook Instance is created.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "onStart",
        "A shell script (base64-encoded) that runs every time the SageMaker Notebook Instance is started including the time it's created.",
        [],
        false,
        false,
      ),
    ];
  }
}
