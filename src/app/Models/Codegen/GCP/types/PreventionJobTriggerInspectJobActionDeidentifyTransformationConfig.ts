export interface PreventionJobTriggerInspectJobActionDeidentifyTransformationConfig {
  // If this template is specified, it will serve as the default de-identify template.
  DeidentifyTemplate?: string;

  // If this template is specified, it will serve as the de-identify template for images.
  ImageRedactTemplate?: string;

  // If this template is specified, it will serve as the de-identify template for structured content such as delimited files and tables.
  StructuredDeidentifyTemplate?: string;
}
