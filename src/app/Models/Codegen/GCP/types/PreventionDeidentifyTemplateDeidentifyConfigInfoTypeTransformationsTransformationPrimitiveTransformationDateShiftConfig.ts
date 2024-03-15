import { PreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationPrimitiveTransformationDateShiftConfigContext } from "./PreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationPrimitiveTransformationDateShiftConfigContext";
import { PreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationPrimitiveTransformationDateShiftConfigCryptoKey } from "./PreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationPrimitiveTransformationDateShiftConfigCryptoKey";

export interface PreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationPrimitiveTransformationDateShiftConfig {
  /*
Range of shift in days. Actual shift will be selected at random within this range (inclusive ends). Negative means shift to earlier in time. Must not be more than 365250 days (1000 years) each direction.
For example, 3 means shift date to at most 3 days into the future.
*/
  UpperBoundDays?: number;

  /*
Points to the field that contains the context, for example, an entity id.
If set, must also set cryptoKey. If set, shift will be consistent for the given context.
Structure is documented below.
*/
  Context?: PreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationPrimitiveTransformationDateShiftConfigContext;

  /*
Causes the shift to be computed based on this key and the context. This results in the same shift for the same context and cryptoKey. If set, must also set context. Can only be applied to table items.
Structure is documented below.
*/
  CryptoKey?: PreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationPrimitiveTransformationDateShiftConfigCryptoKey;

  // For example, -5 means shift date to at most 5 days back in the past.
  LowerBoundDays?: number;
}
