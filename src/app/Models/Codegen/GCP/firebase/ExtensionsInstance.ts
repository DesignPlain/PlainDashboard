import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { ExtensionsInstanceConfig } from "../types/ExtensionsInstanceConfig";
import { ExtensionsInstanceErrorStatus } from "../types/ExtensionsInstanceErrorStatus";
import { ExtensionsInstanceRuntimeData } from "../types/ExtensionsInstanceRuntimeData";

export interface ExtensionsInstanceArgs {
  /*
The current Config of the Extension Instance.
Structure is documented below.
*/
  Config?: ExtensionsInstanceConfig;

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
  /*
If this Instance has `state: ERRORED`, the error messages
will be found here.
Structure is documented below.
*/
  public ErrorStatuses?: Array<ExtensionsInstanceErrorStatus>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
The email of the service account to be used at runtime by compute resources
created for the operation of the Extension instance.
*/
  public ServiceAccountEmail?: string;

  /*
The name of the last operation that acted on this Extension
Instance
*/
  public LastOperationName?: string;

  // The type of the last operation that acted on the Extension Instance.
  public LastOperationType?: string;

  /*
(Output)
The unique identifier for this configuration.
*/
  public Name?: string;

  /*
Data set by the extension instance at runtime.
Structure is documented below.
*/
  public RuntimeDatas?: Array<ExtensionsInstanceRuntimeData>;

  /*
The current Config of the Extension Instance.
Structure is documented below.
*/
  public Config?: ExtensionsInstanceConfig;

  /*
(Output)
The time at which the Extension Instance Config was created.
*/
  public CreateTime?: string;

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

  // The processing state of the extension instance.
  public State?: string;

  // The time at which the Extension Instance was updated.
  public UpdateTime?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Config",
        "The current Config of the Extension Instance.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "InstanceId",
        "The ID to use for the Extension Instance, which will become the final\ncomponent of the instance's name.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
    ];
  }
}
