import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Diagflow_CxWebhookGenericWebService,
  Diagflow_CxWebhookGenericWebService_GetTypes,
} from "../types/Diagflow_CxWebhookGenericWebService";
import {
  Diagflow_CxWebhookServiceDirectory,
  Diagflow_CxWebhookServiceDirectory_GetTypes,
} from "../types/Diagflow_CxWebhookServiceDirectory";

export interface CxWebhookArgs {
  // Indicates whether the webhook is disabled.
  Disabled?: boolean;

  /*
The human-readable name of the webhook, unique within the agent.


- - -
*/
  DisplayName?: string;

  /*
Configuration for a generic web service.
Structure is documented below.
*/
  GenericWebService?: Diagflow_CxWebhookGenericWebService;

  /*
The agent to create a webhook for.
Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>.
*/
  Parent?: string;

  // Webhook execution timeout.
  Timeout?: string;

  // Indicates if automatic spell correction is enabled in detect intent requests.
  EnableSpellCorrection?: boolean;

  // Determines whether this agent should log conversation queries.
  EnableStackdriverLogging?: boolean;

  // Name of the SecuritySettings reference for the agent. Format: projects/<Project ID>/locations/<Location ID>/securitySettings/<Security Settings ID>.
  SecuritySettings?: string;

  /*
Configuration for a Service Directory service.
Structure is documented below.
*/
  ServiceDirectory?: Diagflow_CxWebhookServiceDirectory;
}
export class CxWebhook extends Resource {
  // Indicates whether the webhook is disabled.
  public Disabled?: boolean;

  // Indicates if automatic spell correction is enabled in detect intent requests.
  public EnableSpellCorrection?: boolean;

  // Determines whether this agent should log conversation queries.
  public EnableStackdriverLogging?: boolean;

  /*
Configuration for a generic web service.
Structure is documented below.
*/
  public GenericWebService?: Diagflow_CxWebhookGenericWebService;

  /*
The agent to create a webhook for.
Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>.
*/
  public Parent?: string;

  // Name of the SecuritySettings reference for the agent. Format: projects/<Project ID>/locations/<Location ID>/securitySettings/<Security Settings ID>.
  public SecuritySettings?: string;

  /*
Configuration for a Service Directory service.
Structure is documented below.
*/
  public ServiceDirectory?: Diagflow_CxWebhookServiceDirectory;

  // Webhook execution timeout.
  public Timeout?: string;

  /*
The human-readable name of the webhook, unique within the agent.


- - -
*/
  public DisplayName?: string;

  /*
The unique identifier of the webhook.
Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/webhooks/<Webhook ID>.
*/
  public Name?: string;

  // Name of the start flow in this agent. A start flow will be automatically created when the agent is created, and can only be deleted by deleting the agent. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>.
  public StartFlow?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Bool,
        "Disabled",
        "Indicates whether the webhook is disabled.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "The human-readable name of the webhook, unique within the agent.\n\n\n- - -",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "EnableStackdriverLogging",
        "Determines whether this agent should log conversation queries.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "SecuritySettings",
        "Name of the SecuritySettings reference for the agent. Format: projects/<Project ID>/locations/<Location ID>/securitySettings/<Security Settings ID>.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "ServiceDirectory",
        "Configuration for a Service Directory service.\nStructure is documented below.",
        Diagflow_CxWebhookServiceDirectory_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "GenericWebService",
        "Configuration for a generic web service.\nStructure is documented below.",
        Diagflow_CxWebhookGenericWebService_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Parent",
        "The agent to create a webhook for.\nFormat: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Timeout",
        "Webhook execution timeout.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "EnableSpellCorrection",
        "Indicates if automatic spell correction is enabled in detect intent requests.",
        [],
        false,
        false,
      ),
    ];
  }
}
