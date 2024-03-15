import { ProjectCustomModuleCustomConfigCustomOutputPropertyValueExpression } from "./ProjectCustomModuleCustomConfigCustomOutputPropertyValueExpression";

export interface ProjectCustomModuleCustomConfigCustomOutputProperty {
  /*
The CEL expression for the custom output. A resource property can be specified
to return the value of the property or a text string enclosed in quotation marks.
Structure is documented below.
*/
  ValueExpression?: ProjectCustomModuleCustomConfigCustomOutputPropertyValueExpression;

  // Name of the property for the custom output.
  Name?: string;
}
