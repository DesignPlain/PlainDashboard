import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  cloudwatch_getLogDataProtectionPolicyDocumentStatementOperationDeidentifyMaskConfig,
  cloudwatch_getLogDataProtectionPolicyDocumentStatementOperationDeidentifyMaskConfig_GetTypes,
} from "./cloudwatch_getLogDataProtectionPolicyDocumentStatementOperationDeidentifyMaskConfig";

export interface cloudwatch_getLogDataProtectionPolicyDocumentStatementOperationDeidentify {
  // An empty object that configures masking.
  maskConfig?: cloudwatch_getLogDataProtectionPolicyDocumentStatementOperationDeidentifyMaskConfig;
}

export function cloudwatch_getLogDataProtectionPolicyDocumentStatementOperationDeidentify_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "maskConfig",
      "An empty object that configures masking.",
      cloudwatch_getLogDataProtectionPolicyDocumentStatementOperationDeidentifyMaskConfig_GetTypes(),
      true,
      false,
    ),
  ];
}
