export interface CxIntentParameter {
  /*
The entity type of the parameter.
Format: projects/-/locations/-/agents/-/entityTypes/<System Entity Type ID> for system entity types (for example, projects/-/locations/-/agents/-/entityTypes/sys.date), or projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/entityTypes/<Entity Type ID> for developer entity types.
*/
  EntityType?: string;

  // The unique identifier of the parameter. This field is used by training phrases to annotate their parts.
  Id?: string;

  // Indicates whether the parameter represents a list of values.
  IsList?: boolean;

  /*
Indicates whether the parameter content should be redacted in log. If redaction is enabled, the parameter content will be replaced by parameter name during logging.
Note: the parameter content is subject to redaction if either parameter level redaction or entity type level redaction is enabled.
*/
  Redact?: boolean;
}
