import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Diagflow_FulfillmentFeature,
  Diagflow_FulfillmentFeature_GetTypes,
} from "../types/Diagflow_FulfillmentFeature";
import {
  Diagflow_FulfillmentGenericWebService,
  Diagflow_FulfillmentGenericWebService_GetTypes,
} from "../types/Diagflow_FulfillmentGenericWebService";

export interface FulfillmentArgs {
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
  Features?: Array<Diagflow_FulfillmentFeature>;

  /*
Represents configuration for a generic web service. Dialogflow supports two mechanisms for authentications: - Basic authentication with username and password. - Authentication with additional authentication headers.
Structure is documented below.
*/
  GenericWebService?: Diagflow_FulfillmentGenericWebService;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;
}
export class Fulfillment extends Resource {
  /*
The unique identifier of the fulfillment.
Format: projects/<Project ID>/agent/fulfillment - projects/<Project ID>/locations/<Location ID>/agent/fulfillment
*/
  public Name?: string;

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
  public Features?: Array<Diagflow_FulfillmentFeature>;

  /*
Represents configuration for a generic web service. Dialogflow supports two mechanisms for authentications: - Basic authentication with username and password. - Authentication with additional authentication headers.
Structure is documented below.
*/
  public GenericWebService?: Diagflow_FulfillmentGenericWebService;

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
        InputType.String,
        "DisplayName",
        "The human-readable name of the fulfillment, unique within the agent.\n\n\n- - -",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "Enabled",
        "Whether fulfillment is enabled.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "Features",
        "The field defines whether the fulfillment is enabled for certain features.\nStructure is documented below.",
        Diagflow_FulfillmentFeature_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "GenericWebService",
        "Represents configuration for a generic web service. Dialogflow supports two mechanisms for authentications: - Basic authentication with username and password. - Authentication with additional authentication headers.\nStructure is documented below.",
        Diagflow_FulfillmentGenericWebService_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
