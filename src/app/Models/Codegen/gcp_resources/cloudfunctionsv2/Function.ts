import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  cloudfunctionsv2_FunctionEventTrigger,
  cloudfunctionsv2_FunctionEventTrigger_GetTypes,
} from "../types/cloudfunctionsv2_FunctionEventTrigger";
import {
  cloudfunctionsv2_FunctionBuildConfig,
  cloudfunctionsv2_FunctionBuildConfig_GetTypes,
} from "../types/cloudfunctionsv2_FunctionBuildConfig";
import {
  cloudfunctionsv2_FunctionServiceConfig,
  cloudfunctionsv2_FunctionServiceConfig_GetTypes,
} from "../types/cloudfunctionsv2_FunctionServiceConfig";

export interface FunctionArgs {
  // User-provided description of a function.
  description?: string;

  /*
An Eventarc trigger managed by Google Cloud Functions that fires events in
response to a condition in another service.
Structure is documented below.
*/
  eventTrigger?: cloudfunctionsv2_FunctionEventTrigger;

  /*
The location of this cloud function.


- - -
*/
  location?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
Describes the Build step of the function that builds a container
from the given source.
Structure is documented below.
*/
  buildConfig?: cloudfunctionsv2_FunctionBuildConfig;

  /*
Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt function resources.
It must match the pattern projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}.
*/
  kmsKeyName?: string;

  /*
A set of key/value label pairs associated with this Cloud Function.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  labels?: Map<string, string>;

  /*
A user-defined name of the function. Function names must
be unique globally and match pattern `projects/-/locations/-/functions/-`.
*/
  name?: string;

  /*
Describes the Service being deployed.
Structure is documented below.
*/
  serviceConfig?: cloudfunctionsv2_FunctionServiceConfig;
}
export class Function extends Resource {
  // Describes the current state of the function.
  public state?: string;

  /*
Describes the Build step of the function that builds a container
from the given source.
Structure is documented below.
*/
  public buildConfig?: cloudfunctionsv2_FunctionBuildConfig;

  // User-provided description of a function.
  public description?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  // Output only. The deployed url for the function.
  public url?: string;

  /*
The location of this cloud function.


- - -
*/
  public location?: string;

  /*
A user-defined name of the function. Function names must
be unique globally and match pattern `projects/-/locations/-/functions/-`.
*/
  public name?: string;

  /*
An Eventarc trigger managed by Google Cloud Functions that fires events in
response to a condition in another service.
Structure is documented below.
*/
  public eventTrigger?: cloudfunctionsv2_FunctionEventTrigger;

  /*
Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt function resources.
It must match the pattern projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}.
*/
  public kmsKeyName?: string;

  /*
A set of key/value label pairs associated with this Cloud Function.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public pulumiLabels?: Map<string, string>;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public effectiveLabels?: Map<string, string>;

  // The environment the function is hosted on.
  public environment?: string;

  /*
Describes the Service being deployed.
Structure is documented below.
*/
  public serviceConfig?: cloudfunctionsv2_FunctionServiceConfig;

  // The last update timestamp of a Cloud Function.
  public updateTime?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "eventTrigger",
        "An Eventarc trigger managed by Google Cloud Functions that fires events in\nresponse to a condition in another service.\nStructure is documented below.",
        cloudfunctionsv2_FunctionEventTrigger_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "labels",
        "A set of key/value label pairs associated with this Cloud Function.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "serviceConfig",
        "Describes the Service being deployed.\nStructure is documented below.",
        cloudfunctionsv2_FunctionServiceConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "User-provided description of a function.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "location",
        "The location of this cloud function.\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "buildConfig",
        "Describes the Build step of the function that builds a container\nfrom the given source.\nStructure is documented below.",
        cloudfunctionsv2_FunctionBuildConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "kmsKeyName",
        "Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt function resources.\nIt must match the pattern projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "A user-defined name of the function. Function names must\nbe unique globally and match pattern `projects/*/locations/*/functions/*`.",
        [],
        false,
        true,
      ),
    ];
  }
}
