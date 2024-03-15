import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { CxWebhookGenericWebService } from "../types/CxWebhookGenericWebService";
import { CxWebhookServiceDirectory } from "../types/CxWebhookServiceDirectory";

export interface CxWebhookArgs {
  // Indicates whether the webhook is disabled.
  Disabled?: boolean;

  // Indicates if automatic spell correction is enabled in detect intent requests.
  EnableSpellCorrection?: boolean;

  /*
Configuration for a generic web service.
Structure is documented below.
*/
  GenericWebService?: CxWebhookGenericWebService;

  /*
The agent to create a webhook for.
Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>.
*/
  Parent?: string;

  // Webhook execution timeout.
  Timeout?: string;

  /*
The human-readable name of the webhook, unique within the agent.


- - -
*/
  DisplayName?: string;

  // Determines whether this agent should log conversation queries.
  EnableStackdriverLogging?: boolean;

  // Name of the SecuritySettings reference for the agent. Format: projects/<Project ID>/locations/<Location ID>/securitySettings/<Security Settings ID>.
  SecuritySettings?: string;

  /*
Configuration for a Service Directory service.
Structure is documented below.
*/
  ServiceDirectory?: CxWebhookServiceDirectory;
}
export class CxWebhook extends Resource {
  // Indicates whether the webhook is disabled.
  public Disabled?: boolean;

  // Indicates if automatic spell correction is enabled in detect intent requests.
  public EnableSpellCorrection?: boolean;

  /*
The unique identifier of the webhook.
Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/webhooks/<Webhook ID>.
*/
  public Name?: string;

  // Name of the SecuritySettings reference for the agent. Format: projects/<Project ID>/locations/<Location ID>/securitySettings/<Security Settings ID>.
  public SecuritySettings?: string;

  // Webhook execution timeout.
  public Timeout?: string;

  /*
The human-readable name of the webhook, unique within the agent.


- - -
*/
  public DisplayName?: string;

  // Determines whether this agent should log conversation queries.
  public EnableStackdriverLogging?: boolean;

  /*
Configuration for a generic web service.
Structure is documented below.
*/
  public GenericWebService?: CxWebhookGenericWebService;

  /*
The agent to create a webhook for.
Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>.
*/
  public Parent?: string;

  /*
Configuration for a Service Directory service.
Structure is documented below.
*/
  public ServiceDirectory?: CxWebhookServiceDirectory;

  // Name of the start flow in this agent. A start flow will be automatically created when the agent is created, and can only be deleted by deleting the agent. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>.
  public StartFlow?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.CheckBox,
        "Disabled",
        "Indicates whether the webhook is disabled.",
      ),
      new DynamicUIProps(
        InputType.String,
        "GenericWebService",
        "Configuration for a generic web service.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ServiceDirectory",
        "Configuration for a Service Directory service.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "EnableSpellCorrection",
        "Indicates if automatic spell correction is enabled in detect intent requests.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Parent",
        "The agent to create a webhook for.\nFormat: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Timeout",
        "Webhook execution timeout.",
      ),
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "The human-readable name of the webhook, unique within the agent.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "EnableStackdriverLogging",
        "Determines whether this agent should log conversation queries.",
      ),
      new DynamicUIProps(
        InputType.String,
        "SecuritySettings",
        "Name of the SecuritySettings reference for the agent. Format: projects/<Project ID>/locations/<Location ID>/securitySettings/<Security Settings ID>.",
      ),
    ];
  }
}
