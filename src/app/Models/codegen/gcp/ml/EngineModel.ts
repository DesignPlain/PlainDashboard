import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  ml_EngineModelDefaultVersion,
  ml_EngineModelDefaultVersion_GetTypes,
} from "../types/ml_EngineModelDefaultVersion";

export interface EngineModelArgs {
  // The description specified for the model when it was created.
  description?: string;

  /*
One or more labels that you can add, to organize your models.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  labels?: Map<string, string>;

  /*
The name specified for the model.


- - -
*/
  name?: string;

  // If true, online prediction nodes send stderr and stdout streams to Stackdriver Logging
  onlinePredictionConsoleLogging?: boolean;

  // If true, online prediction access logs are sent to StackDriver Logging.
  onlinePredictionLogging?: boolean;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
The list of regions where the model is going to be deployed.
Currently only one region per model is supported
*/
  regions?: string;

  /*
The default version of the model. This version will be used to handle
prediction requests that do not specify a version.
Structure is documented below.
*/
  defaultVersion?: ml_EngineModelDefaultVersion;
}
export class EngineModel extends DS_Resource {
  // If true, online prediction nodes send stderr and stdout streams to Stackdriver Logging
  public onlinePredictionConsoleLogging?: boolean;

  // If true, online prediction access logs are sent to StackDriver Logging.
  public onlinePredictionLogging?: boolean;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public effectiveLabels?: Map<string, string>;

  /*
One or more labels that you can add, to organize your models.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  /*
The name specified for the model.


- - -
*/
  public name?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public pulumiLabels?: Map<string, string>;

  /*
The list of regions where the model is going to be deployed.
Currently only one region per model is supported
*/
  public regions?: string;

  /*
The default version of the model. This version will be used to handle
prediction requests that do not specify a version.
Structure is documented below.
*/
  public defaultVersion?: ml_EngineModelDefaultVersion;

  // The description specified for the model when it was created.
  public description?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Bool,
        "onlinePredictionLogging",
        "If true, online prediction access logs are sent to StackDriver Logging.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "regions",
        "The list of regions where the model is going to be deployed.\nCurrently only one region per model is supported",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "defaultVersion",
        "The default version of the model. This version will be used to handle\nprediction requests that do not specify a version.\nStructure is documented below.",
        () => ml_EngineModelDefaultVersion_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "The description specified for the model when it was created.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "labels",
        "One or more labels that you can add, to organize your models.\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name specified for the model.\n\n\n- - -",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "onlinePredictionConsoleLogging",
        "If true, online prediction nodes send stderr and stdout streams to Stackdriver Logging",
        () => [],
        false,
        true,
      ),
    ];
  }
}
