import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { FulfillmentFeature } from "../types/FulfillmentFeature";
import { FulfillmentGenericWebService } from "../types/FulfillmentGenericWebService";

export interface FulfillmentArgs {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
The human-readable name of the fulfillment, unique within the agent.


- - -
*/
  DisplayName?: string;

  // Whether fulfillment is enabled.
  Enabled?: boolean;

  /*
The field defines whether the fulfillment is enabled for certain features.
Structure is documented below.
*/
  Features?: Array<FulfillmentFeature>;

  /*
Represents configuration for a generic web service. Dialogflow supports two mechanisms for authentications: - Basic authentication with username and password. - Authentication with additional authentication headers.
Structure is documented below.
*/
  GenericWebService?: FulfillmentGenericWebService;
}
export class Fulfillment extends Resource {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
The human-readable name of the fulfillment, unique within the agent.


- - -
*/
  public DisplayName?: string;

  // Whether fulfillment is enabled.
  public Enabled?: boolean;

  /*
The field defines whether the fulfillment is enabled for certain features.
Structure is documented below.
*/
  public Features?: Array<FulfillmentFeature>;

  /*
Represents configuration for a generic web service. Dialogflow supports two mechanisms for authentications: - Basic authentication with username and password. - Authentication with additional authentication headers.
Structure is documented below.
*/
  public GenericWebService?: FulfillmentGenericWebService;

  /*
The unique identifier of the fulfillment.
Format: projects/<Project ID>/agent/fulfillment - projects/<Project ID>/locations/<Location ID>/agent/fulfillment
*/
  public Name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "The human-readable name of the fulfillment, unique within the agent.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "Enabled",
        "Whether fulfillment is enabled.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "Features",
        "The field defines whether the fulfillment is enabled for certain features.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "GenericWebService",
        "Represents configuration for a generic web service. Dialogflow supports two mechanisms for authentications: - Basic authentication with username and password. - Authentication with additional authentication headers.\nStructure is documented below.",
      ),
    ];
  }
}
