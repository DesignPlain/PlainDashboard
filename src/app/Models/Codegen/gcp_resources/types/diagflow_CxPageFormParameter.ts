import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  diagflow_CxPageFormParameterAdvancedSettings,
  diagflow_CxPageFormParameterAdvancedSettings_GetTypes,
} from "./diagflow_CxPageFormParameterAdvancedSettings";
import {
  diagflow_CxPageFormParameterFillBehavior,
  diagflow_CxPageFormParameterFillBehavior_GetTypes,
} from "./diagflow_CxPageFormParameterFillBehavior";

export interface diagflow_CxPageFormParameter {
  // Indicates whether the parameter represents a list of values.
  isList?: boolean;

  /*
Indicates whether the parameter content should be redacted in log.
If redaction is enabled, the parameter content will be replaced by parameter name during logging. Note: the parameter content is subject to redaction if either parameter level redaction or entity type level redaction is enabled.
*/
  redact?: boolean;

  /*
Indicates whether the parameter is required. Optional parameters will not trigger prompts; however, they are filled if the user specifies them.
Required parameters must be filled before form filling concludes.
*/
  required?: boolean;

  /*
Hierarchical advanced settings for this parameter. The settings exposed at the lower level overrides the settings exposed at the higher level.
Hierarchy: Agent->Flow->Page->Fulfillment/Parameter.
Structure is documented below.
*/
  advancedSettings?: diagflow_CxPageFormParameterAdvancedSettings;

  // The default value of an optional parameter. If the parameter is required, the default value will be ignored.
  defaultValue?: string;

  // The human-readable name of the parameter, unique within the form.
  displayName?: string;

  /*
The entity type of the parameter.
Format: projects/-/locations/-/agents/-/entityTypes/<System Entity Type ID> for system entity types (for example, projects/-/locations/-/agents/-/entityTypes/sys.date), or projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/entityTypes/<Entity Type ID> for developer entity types.
*/
  entityType?: string;

  /*
Defines fill behavior for the parameter.
Structure is documented below.
*/
  fillBehavior?: diagflow_CxPageFormParameterFillBehavior;
}

export function diagflow_CxPageFormParameter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "defaultValue",
      "The default value of an optional parameter. If the parameter is required, the default value will be ignored.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "displayName",
      "The human-readable name of the parameter, unique within the form.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "entityType",
      "The entity type of the parameter.\nFormat: projects/-/locations/-/agents/-/entityTypes/<System Entity Type ID> for system entity types (for example, projects/-/locations/-/agents/-/entityTypes/sys.date), or projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/entityTypes/<Entity Type ID> for developer entity types.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "fillBehavior",
      "Defines fill behavior for the parameter.\nStructure is documented below.",
      diagflow_CxPageFormParameterFillBehavior_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "isList",
      "Indicates whether the parameter represents a list of values.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "redact",
      "Indicates whether the parameter content should be redacted in log.\nIf redaction is enabled, the parameter content will be replaced by parameter name during logging. Note: the parameter content is subject to redaction if either parameter level redaction or entity type level redaction is enabled.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "required",
      "Indicates whether the parameter is required. Optional parameters will not trigger prompts; however, they are filled if the user specifies them.\nRequired parameters must be filled before form filling concludes.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "advancedSettings",
      "Hierarchical advanced settings for this parameter. The settings exposed at the lower level overrides the settings exposed at the higher level.\nHierarchy: Agent->Flow->Page->Fulfillment/Parameter.\nStructure is documented below.",
      diagflow_CxPageFormParameterAdvancedSettings_GetTypes(),
      false,
      false,
    ),
  ];
}
