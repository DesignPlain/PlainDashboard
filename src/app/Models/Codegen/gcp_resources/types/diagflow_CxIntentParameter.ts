import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface diagflow_CxIntentParameter {
  /*
The entity type of the parameter.
Format: projects/-/locations/-/agents/-/entityTypes/<System Entity Type ID> for system entity types (for example, projects/-/locations/-/agents/-/entityTypes/sys.date), or projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/entityTypes/<Entity Type ID> for developer entity types.
*/
  entityType?: string;

  // The unique identifier of the parameter. This field is used by training phrases to annotate their parts.
  id?: string;

  // Indicates whether the parameter represents a list of values.
  isList?: boolean;

  /*
Indicates whether the parameter content should be redacted in log. If redaction is enabled, the parameter content will be replaced by parameter name during logging.
Note: the parameter content is subject to redaction if either parameter level redaction or entity type level redaction is enabled.
*/
  redact?: boolean;
}

export function diagflow_CxIntentParameter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "id",
      "The unique identifier of the parameter. This field is used by training phrases to annotate their parts.",
      [],
      true,
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
      "Indicates whether the parameter content should be redacted in log. If redaction is enabled, the parameter content will be replaced by parameter name during logging.\nNote: the parameter content is subject to redaction if either parameter level redaction or entity type level redaction is enabled.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "entityType",
      "The entity type of the parameter.\nFormat: projects/-/locations/-/agents/-/entityTypes/<System Entity Type ID> for system entity types (for example, projects/-/locations/-/agents/-/entityTypes/sys.date), or projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/entityTypes/<Entity Type ID> for developer entity types.",
      [],
      true,
      false,
    ),
  ];
}
