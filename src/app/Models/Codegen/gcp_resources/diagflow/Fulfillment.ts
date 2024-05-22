import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  diagflow_FulfillmentFeature,
  diagflow_FulfillmentFeature_GetTypes,
} from "../types/diagflow_FulfillmentFeature";
import {
  diagflow_FulfillmentGenericWebService,
  diagflow_FulfillmentGenericWebService_GetTypes,
} from "../types/diagflow_FulfillmentGenericWebService";

export interface FulfillmentArgs {
  /*
The human-readable name of the fulfillment, unique within the agent.


- - -
*/
  displayName?: string;

  // Whether fulfillment is enabled.
  enabled?: boolean;

  /*
The field defines whether the fulfillment is enabled for certain features.
Structure is documented below.
*/
  features?: Array<diagflow_FulfillmentFeature>;

  /*
Represents configuration for a generic web service. Dialogflow supports two mechanisms for authentications: - Basic authentication with username and password. - Authentication with additional authentication headers.
Structure is documented below.
*/
  genericWebService?: diagflow_FulfillmentGenericWebService;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;
}
export class Fulfillment extends Resource {
  // Whether fulfillment is enabled.
  public enabled?: boolean;

  /*
The field defines whether the fulfillment is enabled for certain features.
Structure is documented below.
*/
  public features?: Array<diagflow_FulfillmentFeature>;

  /*
Represents configuration for a generic web service. Dialogflow supports two mechanisms for authentications: - Basic authentication with username and password. - Authentication with additional authentication headers.
Structure is documented below.
*/
  public genericWebService?: diagflow_FulfillmentGenericWebService;

  /*
The unique identifier of the fulfillment.
Format: projects/<Project ID>/agent/fulfillment - projects/<Project ID>/locations/<Location ID>/agent/fulfillment
*/
  public name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  /*
The human-readable name of the fulfillment, unique within the agent.


- - -
*/
  public displayName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "displayName",
        "The human-readable name of the fulfillment, unique within the agent.\n\n\n- - -",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "enabled",
        "Whether fulfillment is enabled.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "features",
        "The field defines whether the fulfillment is enabled for certain features.\nStructure is documented below.",
        diagflow_FulfillmentFeature_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "genericWebService",
        "Represents configuration for a generic web service. Dialogflow supports two mechanisms for authentications: - Basic authentication with username and password. - Authentication with additional authentication headers.\nStructure is documented below.",
        diagflow_FulfillmentGenericWebService_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
