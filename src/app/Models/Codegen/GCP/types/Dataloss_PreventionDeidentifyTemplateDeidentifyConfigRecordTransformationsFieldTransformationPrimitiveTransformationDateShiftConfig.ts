import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationPrimitiveTransformationDateShiftConfigContext,
  Dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationPrimitiveTransformationDateShiftConfigContext_GetTypes,
} from "./Dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationPrimitiveTransformationDateShiftConfigContext";
import {
  Dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationPrimitiveTransformationDateShiftConfigCryptoKey,
  Dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationPrimitiveTransformationDateShiftConfigCryptoKey_GetTypes,
} from "./Dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationPrimitiveTransformationDateShiftConfigCryptoKey";

export interface Dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationPrimitiveTransformationDateShiftConfig {
  /*
Points to the field that contains the context, for example, an entity id.
If set, must also set cryptoKey. If set, shift will be consistent for the given context.
Structure is documented below.
*/
  Context?: Dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationPrimitiveTransformationDateShiftConfigContext;

  /*
Causes the shift to be computed based on this key and the context. This results in the same shift for the same context and cryptoKey. If set, must also set context. Can only be applied to table items.
Structure is documented below.
*/
  CryptoKey?: Dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationPrimitiveTransformationDateShiftConfigCryptoKey;

  // For example, -5 means shift date to at most 5 days back in the past.
  LowerBoundDays?: number;

  /*
Range of shift in days. Actual shift will be selected at random within this range (inclusive ends). Negative means shift to earlier in time. Must not be more than 365250 days (1000 years) each direction.
For example, 3 means shift date to at most 3 days into the future.
*/
  UpperBoundDays?: number;
}

export function Dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationPrimitiveTransformationDateShiftConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "Context",
      "Points to the field that contains the context, for example, an entity id.\nIf set, must also set cryptoKey. If set, shift will be consistent for the given context.\nStructure is documented below.",
      Dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationPrimitiveTransformationDateShiftConfigContext_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "CryptoKey",
      "Causes the shift to be computed based on this key and the context. This results in the same shift for the same context and cryptoKey. If set, must also set context. Can only be applied to table items.\nStructure is documented below.",
      Dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationPrimitiveTransformationDateShiftConfigCryptoKey_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "LowerBoundDays",
      "For example, -5 means shift date to at most 5 days back in the past.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "UpperBoundDays",
      "Range of shift in days. Actual shift will be selected at random within this range (inclusive ends). Negative means shift to earlier in time. Must not be more than 365250 days (1000 years) each direction.\nFor example, 3 means shift date to at most 3 days into the future.",
      [],
      true,
      false,
    ),
  ];
}
