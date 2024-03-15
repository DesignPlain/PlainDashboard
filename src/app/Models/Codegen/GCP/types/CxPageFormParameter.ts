import { CxPageFormParameterFillBehavior } from "./CxPageFormParameterFillBehavior";
import { CxPageFormParameterAdvancedSettings } from "./CxPageFormParameterAdvancedSettings";

export interface CxPageFormParameter {
  /*
The entity type of the parameter.
Format: projects/-/locations/-/agents/-/entityTypes/<System Entity Type ID> for system entity types (for example, projects/-/locations/-/agents/-/entityTypes/sys.date), or projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/entityTypes/<Entity Type ID> for developer entity types.
*/
  EntityType?: string;

  /*
Defines fill behavior for the parameter.
Structure is documented below.
*/
  FillBehavior?: CxPageFormParameterFillBehavior;

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
  AdvancedSettings?: CxPageFormParameterAdvancedSettings;

  // The default value of an optional parameter. If the parameter is required, the default value will be ignored.
  DefaultValue?: string;

  // The human-readable name of the parameter, unique within the form.
  DisplayName?: string;
}
