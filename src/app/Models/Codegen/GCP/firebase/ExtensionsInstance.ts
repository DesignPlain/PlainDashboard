import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Firebase_ExtensionsInstanceRuntimeData,
  Firebase_ExtensionsInstanceRuntimeData_GetTypes,
} from "../types/Firebase_ExtensionsInstanceRuntimeData";
import {
  Firebase_ExtensionsInstanceConfig,
  Firebase_ExtensionsInstanceConfig_GetTypes,
} from "../types/Firebase_ExtensionsInstanceConfig";
import {
  Firebase_ExtensionsInstanceErrorStatus,
  Firebase_ExtensionsInstanceErrorStatus_GetTypes,
} from "../types/Firebase_ExtensionsInstanceErrorStatus";

export interface ExtensionsInstanceArgs {
  /*
The current Config of the Extension Instance.
Structure is documented below.
*/
  Config?: Firebase_ExtensionsInstanceConfig;

  /*
The ID to use for the Extension Instance, which will become the final
component of the instance's name.
*/
  InstanceId?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;
}
export class ExtensionsInstance extends Resource {
  // The type of the last operation that acted on the Extension Instance.
  public LastOperationType?: string;

  /*
(Output)
The unique identifier for this configuration.
*/
  public Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
The current Config of the Extension Instance.
Structure is documented below.
*/
  public Config?: Firebase_ExtensionsInstanceConfig;

  /*
If this Instance has `state: ERRORED`, the error messages
will be found here.
Structure is documented below.
*/
  public ErrorStatuses?: Array<Firebase_ExtensionsInstanceErrorStatus>;

  /*
A weak etag that is computed by the server based on other configuration
values and may be sent on update and delete requests to ensure the
client has an up-to-date value before proceeding.
*/
  public Etag?: string;

  /*
The ID to use for the Extension Instance, which will become the final
component of the instance's name.
*/
  public InstanceId?: string;

  /*
The name of the last operation that acted on this Extension
Instance
*/
  public LastOperationName?: string;

  /*
(Output)
The time at which the Extension Instance Config was created.
*/
  public CreateTime?: string;

  /*
Data set by the extension instance at runtime.
Structure is documented below.
*/
  public RuntimeDatas?: Array<Firebase_ExtensionsInstanceRuntimeData>;

  /*
The email of the service account to be used at runtime by compute resources
created for the operation of the Extension instance.
*/
  public ServiceAccountEmail?: string;

  // The processing state of the extension instance.
  public State?: string;

  // The time at which the Extension Instance was updated.
  public UpdateTime?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "Config",
        "The current Config of the Extension Instance.\nStructure is documented below.",
        Firebase_ExtensionsInstanceConfig_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "InstanceId",
        "The ID to use for the Extension Instance, which will become the final\ncomponent of the instance's name.",
        [],
        true,
        true,
      ),
    ];
  }
}
