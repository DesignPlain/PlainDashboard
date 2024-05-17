import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Diagflow_CxIntentParameter,
  Diagflow_CxIntentParameter_GetTypes,
} from "../types/Diagflow_CxIntentParameter";
import {
  Diagflow_CxIntentTrainingPhrase,
  Diagflow_CxIntentTrainingPhrase_GetTypes,
} from "../types/Diagflow_CxIntentTrainingPhrase";

export interface CxIntentArgs {
  /*
Marks this as the [Default Welcome Intent](https://cloud.google.com/dialogflow/cx/docs/concept/intent#welcome) for an agent. When you create an agent, a Default Welcome Intent is created automatically.
The Default Welcome Intent cannot be deleted; deleting the `gcp.diagflow.CxIntent` resource does nothing to the underlying GCP resources.

> Avoid having multiple `gcp.diagflow.CxIntent` resources linked to the same agent with `is_default_welcome_intent = true` because they will compete to control a single Default Welcome Intent resource in GCP.
*/
  IsDefaultWelcomeIntent?: boolean;

  /*
The key/value metadata to label an intent. Labels can contain lowercase letters, digits and the symbols '-' and '_'. International characters are allowed, including letters from unicase alphabets. Keys must start with a letter. Keys and values can be no longer than 63 characters and no more than 128 bytes.
Prefix "sys-" is reserved for Dialogflow defined labels. Currently allowed Dialogflow defined labels include: - sys-head - sys-contextual The above labels do not require value. "sys-head" means the intent is a head intent. "sys.contextual" means the intent is a contextual intent.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  /*
The priority of this intent. Higher numbers represent higher priorities.
If the supplied value is unspecified or 0, the service translates the value to 500,000, which corresponds to the Normal priority in the console.
If the supplied value is negative, the intent is ignored in runtime detect intent requests.
*/
  Priority?: number;

  // Human readable description for better understanding an intent like its scope, content, result etc. Maximum character limit: 140 characters.
  Description?: string;

  /*
Marks this as the [Default Negative Intent](https://cloud.google.com/dialogflow/cx/docs/concept/intent#negative) for an agent. When you create an agent, a Default Negative Intent is created automatically.
The Default Negative Intent cannot be deleted; deleting the `gcp.diagflow.CxIntent` resource does nothing to the underlying GCP resources.

> Avoid having multiple `gcp.diagflow.CxIntent` resources linked to the same agent with `is_default_negative_intent = true` because they will compete to control a single Default Negative Intent resource in GCP.
*/
  IsDefaultNegativeIntent?: boolean;

  /*
The language of the following fields in intent:
Intent.training_phrases.parts.text
If not specified, the agent's default language is used. Many languages are supported. Note: languages must be enabled in the agent before they can be used.
*/
  LanguageCode?: string;

  /*
The collection of parameters associated with the intent.
Structure is documented below.
*/
  Parameters?: Array<Diagflow_CxIntentParameter>;

  /*
The agent to create an intent for.
Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>.
*/
  Parent?: string;

  /*
The collection of training phrases the agent is trained on to identify the intent.
Structure is documented below.
*/
  TrainingPhrases?: Array<Diagflow_CxIntentTrainingPhrase>;

  /*
The human-readable name of the intent, unique within the agent.


- - -
*/
  DisplayName?: string;

  /*
Indicates whether this is a fallback intent. Currently only default fallback intent is allowed in the agent, which is added upon agent creation.
Adding training phrases to fallback intent is useful in the case of requests that are mistakenly matched, since training phrases assigned to fallback intents act as negative examples that triggers no-match event.
To manage the fallback intent, set `is_default_negative_intent = true`
*/
  IsFallback?: boolean;
}
export class CxIntent extends Resource {
  /*
The priority of this intent. Higher numbers represent higher priorities.
If the supplied value is unspecified or 0, the service translates the value to 500,000, which corresponds to the Normal priority in the console.
If the supplied value is negative, the intent is ignored in runtime detect intent requests.
*/
  public Priority?: number;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  /*
Marks this as the [Default Negative Intent](https://cloud.google.com/dialogflow/cx/docs/concept/intent#negative) for an agent. When you create an agent, a Default Negative Intent is created automatically.
The Default Negative Intent cannot be deleted; deleting the `gcp.diagflow.CxIntent` resource does nothing to the underlying GCP resources.

> Avoid having multiple `gcp.diagflow.CxIntent` resources linked to the same agent with `is_default_negative_intent = true` because they will compete to control a single Default Negative Intent resource in GCP.
*/
  public IsDefaultNegativeIntent?: boolean;

  /*
Marks this as the [Default Welcome Intent](https://cloud.google.com/dialogflow/cx/docs/concept/intent#welcome) for an agent. When you create an agent, a Default Welcome Intent is created automatically.
The Default Welcome Intent cannot be deleted; deleting the `gcp.diagflow.CxIntent` resource does nothing to the underlying GCP resources.

> Avoid having multiple `gcp.diagflow.CxIntent` resources linked to the same agent with `is_default_welcome_intent = true` because they will compete to control a single Default Welcome Intent resource in GCP.
*/
  public IsDefaultWelcomeIntent?: boolean;

  // Human readable description for better understanding an intent like its scope, content, result etc. Maximum character limit: 140 characters.
  public Description?: string;

  /*
The key/value metadata to label an intent. Labels can contain lowercase letters, digits and the symbols '-' and '_'. International characters are allowed, including letters from unicase alphabets. Keys must start with a letter. Keys and values can be no longer than 63 characters and no more than 128 bytes.
Prefix "sys-" is reserved for Dialogflow defined labels. Currently allowed Dialogflow defined labels include: - sys-head - sys-contextual The above labels do not require value. "sys-head" means the intent is a head intent. "sys.contextual" means the intent is a contextual intent.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  /*
The unique identifier of the intent.
Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/intents/<Intent ID>.
*/
  public Name?: string;

  /*
The collection of parameters associated with the intent.
Structure is documented below.
*/
  public Parameters?: Array<Diagflow_CxIntentParameter>;

  /*
The agent to create an intent for.
Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>.
*/
  public Parent?: string;

  /*
The collection of training phrases the agent is trained on to identify the intent.
Structure is documented below.
*/
  public TrainingPhrases?: Array<Diagflow_CxIntentTrainingPhrase>;

  /*
The human-readable name of the intent, unique within the agent.


- - -
*/
  public DisplayName?: string;

  /*
Indicates whether this is a fallback intent. Currently only default fallback intent is allowed in the agent, which is added upon agent creation.
Adding training phrases to fallback intent is useful in the case of requests that are mistakenly matched, since training phrases assigned to fallback intents act as negative examples that triggers no-match event.
To manage the fallback intent, set `is_default_negative_intent = true`
*/
  public IsFallback?: boolean;

  /*
The language of the following fields in intent:
Intent.training_phrases.parts.text
If not specified, the agent's default language is used. Many languages are supported. Note: languages must be enabled in the agent before they can be used.
*/
  public LanguageCode?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Number,
        "Priority",
        "The priority of this intent. Higher numbers represent higher priorities.\nIf the supplied value is unspecified or 0, the service translates the value to 500,000, which corresponds to the Normal priority in the console.\nIf the supplied value is negative, the intent is ignored in runtime detect intent requests.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "Human readable description for better understanding an intent like its scope, content, result etc. Maximum character limit: 140 characters.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "LanguageCode",
        "The language of the following fields in intent:\nIntent.training_phrases.parts.text\nIf not specified, the agent's default language is used. Many languages are supported. Note: languages must be enabled in the agent before they can be used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "Parameters",
        "The collection of parameters associated with the intent.\nStructure is documented below.",
        Diagflow_CxIntentParameter_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "TrainingPhrases",
        "The collection of training phrases the agent is trained on to identify the intent.\nStructure is documented below.",
        Diagflow_CxIntentTrainingPhrase_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "IsFallback",
        "Indicates whether this is a fallback intent. Currently only default fallback intent is allowed in the agent, which is added upon agent creation.\nAdding training phrases to fallback intent is useful in the case of requests that are mistakenly matched, since training phrases assigned to fallback intents act as negative examples that triggers no-match event.\nTo manage the fallback intent, set `is_default_negative_intent = true`",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "IsDefaultWelcomeIntent",
        "Marks this as the [Default Welcome Intent](https://cloud.google.com/dialogflow/cx/docs/concept/intent#welcome) for an agent. When you create an agent, a Default Welcome Intent is created automatically.\nThe Default Welcome Intent cannot be deleted; deleting the `gcp.diagflow.CxIntent` resource does nothing to the underlying GCP resources.\n\n> Avoid having multiple `gcp.diagflow.CxIntent` resources linked to the same agent with `is_default_welcome_intent = true` because they will compete to control a single Default Welcome Intent resource in GCP.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "Labels",
        'The key/value metadata to label an intent. Labels can contain lowercase letters, digits and the symbols \'-\' and \'_\'. International characters are allowed, including letters from unicase alphabets. Keys must start with a letter. Keys and values can be no longer than 63 characters and no more than 128 bytes.\nPrefix "sys-" is reserved for Dialogflow defined labels. Currently allowed Dialogflow defined labels include: * sys-head * sys-contextual The above labels do not require value. "sys-head" means the intent is a head intent. "sys.contextual" means the intent is a contextual intent.\nAn object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.',
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "IsDefaultNegativeIntent",
        "Marks this as the [Default Negative Intent](https://cloud.google.com/dialogflow/cx/docs/concept/intent#negative) for an agent. When you create an agent, a Default Negative Intent is created automatically.\nThe Default Negative Intent cannot be deleted; deleting the `gcp.diagflow.CxIntent` resource does nothing to the underlying GCP resources.\n\n> Avoid having multiple `gcp.diagflow.CxIntent` resources linked to the same agent with `is_default_negative_intent = true` because they will compete to control a single Default Negative Intent resource in GCP.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Parent",
        "The agent to create an intent for.\nFormat: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "The human-readable name of the intent, unique within the agent.\n\n\n- - -",
        [],
        true,
        false,
      ),
    ];
  }
}
