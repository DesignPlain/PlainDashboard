import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Ml_EngineModelDefaultVersion,
  Ml_EngineModelDefaultVersion_GetTypes,
} from "../types/Ml_EngineModelDefaultVersion";

export interface EngineModelArgs {
  /*
The default version of the model. This version will be used to handle
prediction requests that do not specify a version.
Structure is documented below.
*/
  DefaultVersion?: Ml_EngineModelDefaultVersion;

  // The description specified for the model when it was created.
  Description?: string;

  /*
One or more labels that you can add, to organize your models.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  /*
The name specified for the model.


- - -
*/
  Name?: string;

  // If true, online prediction nodes send stderr and stdout streams to Stackdriver Logging
  OnlinePredictionConsoleLogging?: boolean;

  // If true, online prediction access logs are sent to StackDriver Logging.
  OnlinePredictionLogging?: boolean;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
The list of regions where the model is going to be deployed.
Currently only one region per model is supported
*/
  Regions?: string;
}
export class EngineModel extends Resource {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
The default version of the model. This version will be used to handle
prediction requests that do not specify a version.
Structure is documented below.
*/
  public DefaultVersion?: Ml_EngineModelDefaultVersion;

  // The description specified for the model when it was created.
  public Description?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  /*
One or more labels that you can add, to organize your models.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  /*
The list of regions where the model is going to be deployed.
Currently only one region per model is supported
*/
  public Regions?: string;

  /*
The name specified for the model.


- - -
*/
  public Name?: string;

  // If true, online prediction nodes send stderr and stdout streams to Stackdriver Logging
  public OnlinePredictionConsoleLogging?: boolean;

  // If true, online prediction access logs are sent to StackDriver Logging.
  public OnlinePredictionLogging?: boolean;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Regions",
        "The list of regions where the model is going to be deployed.\nCurrently only one region per model is supported",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "DefaultVersion",
        "The default version of the model. This version will be used to handle\nprediction requests that do not specify a version.\nStructure is documented below.",
        Ml_EngineModelDefaultVersion_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "The description specified for the model when it was created.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "Labels",
        "One or more labels that you can add, to organize your models.\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The name specified for the model.\n\n\n- - -",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "OnlinePredictionConsoleLogging",
        "If true, online prediction nodes send stderr and stdout streams to Stackdriver Logging",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "OnlinePredictionLogging",
        "If true, online prediction access logs are sent to StackDriver Logging.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
    ];
  }
}
