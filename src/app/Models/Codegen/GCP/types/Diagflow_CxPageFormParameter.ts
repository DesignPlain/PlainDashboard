import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Diagflow_CxPageFormParameterAdvancedSettings,
  Diagflow_CxPageFormParameterAdvancedSettings_GetTypes,
} from "./Diagflow_CxPageFormParameterAdvancedSettings";
import {
  Diagflow_CxPageFormParameterFillBehavior,
  Diagflow_CxPageFormParameterFillBehavior_GetTypes,
} from "./Diagflow_CxPageFormParameterFillBehavior";

export interface Diagflow_CxPageFormParameter {
  // The default value of an optional parameter. If the parameter is required, the default value will be ignored.
  DefaultValue?: string;

  // The human-readable name of the parameter, unique within the form.
  DisplayName?: string;

  /*
The entity type of the parameter.
Format: projects/-/locations/-/agents/-/entityTypes/<System Entity Type ID> for system entity types (for example, projects/-/locations/-/agents/-/entityTypes/sys.date), or projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/entityTypes/<Entity Type ID> for developer entity types.
*/
  EntityType?: string;

  /*
Defines fill behavior for the parameter.
Structure is documented below.
*/
  FillBehavior?: Diagflow_CxPageFormParameterFillBehavior;

  // Indicates whether the parameter represents a list of values.
  IsList?: boolean;

  /*
Indicates whether the parameter content should be redacted in log.
If redaction is enabled, the parameter content will be replaced by parameter name during logging. Note: the parameter content is subject to redaction if either parameter level redaction or entity type level redaction is enabled.
*/
  Redact?: boolean;

  /*
Indicates whether the parameter is required. Optional parameters will not trigger prompts; however, they are filled if the user specifies them.
Required parameters must be filled before form filling concludes.
*/
  Required?: boolean;

  /*
Hierarchical advanced settings for this parameter. The settings exposed at the lower level overrides the settings exposed at the higher level.
Hierarchy: Agent->Flow->Page->Fulfillment/Parameter.
Structure is documented below.
*/
  AdvancedSettings?: Diagflow_CxPageFormParameterAdvancedSettings;
}

export function Diagflow_CxPageFormParameter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "DefaultValue",
      "The default value of an optional parameter. If the parameter is required, the default value will be ignored.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "DisplayName",
      "The human-readable name of the parameter, unique within the form.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "EntityType",
      "The entity type of the parameter.\nFormat: projects/-/locations/-/agents/-/entityTypes/<System Entity Type ID> for system entity types (for example, projects/-/locations/-/agents/-/entityTypes/sys.date), or projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/entityTypes/<Entity Type ID> for developer entity types.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "FillBehavior",
      "Defines fill behavior for the parameter.\nStructure is documented below.",
      Diagflow_CxPageFormParameterFillBehavior_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "IsList",
      "Indicates whether the parameter represents a list of values.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "Redact",
      "Indicates whether the parameter content should be redacted in log.\nIf redaction is enabled, the parameter content will be replaced by parameter name during logging. Note: the parameter content is subject to redaction if either parameter level redaction or entity type level redaction is enabled.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "Required",
      "Indicates whether the parameter is required. Optional parameters will not trigger prompts; however, they are filled if the user specifies them.\nRequired parameters must be filled before form filling concludes.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "AdvancedSettings",
      "Hierarchical advanced settings for this parameter. The settings exposed at the lower level overrides the settings exposed at the higher level.\nHierarchy: Agent->Flow->Page->Fulfillment/Parameter.\nStructure is documented below.",
      Diagflow_CxPageFormParameterAdvancedSettings_GetTypes(),
      false,
      false,
    ),
  ];
}
